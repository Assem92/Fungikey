import React, { useMemo } from "react";
import { useTable, useFilters } from "react-table";
import { COLUMNS } from "./columnsMain";
import { Table, Form, Button, Container } from "react-bootstrap";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

/**
 * @returns le table identificator, qui permet de filtrer dynamiquement les champignons
 */

export const TableIdentificator = () => {
  /**
   * @constant columns memoization, on utilise les colonnes définies dans l'import
   * @constant data memoization, on utilise les données (json) définies dans l'import
   * useFilters: Afin d'utiliser les filtres dans React
   */

  //get data from api
  const [FamilleChamiDATA, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/familleChampi")
      .then((res) => res.json())
      .then((FamilleChamiDATA) => setData(FamilleChamiDATA));
  }, []);
  //

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => FamilleChamiDATA, [FamilleChamiDATA]);

  /**
   * @constant tableInstance: On utilise useTable de React-Table avec les colonnes et données déterminés plus haut,
   * on utilise useFilters pour indiquer que le tableau sera filtrable
   */
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters
  );

  /**
   * On prend les constantes nécessaires  (doc React Table) pour déterminer l'instance de la table
   */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    setAllFilters,
  } = tableInstance;

  /**
   * @returns la table générée grâce aux colonnes indiquées et à la base de données.
   * On utilise le Checkbox importé afin de faire apparaître le checkbox "Tout afficher"
   */

  return (
    <>
      <Container responsive>
        <Form>
          <Checkbox {...getToggleHideAllColumnsProps()} />
        </Form>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <Form.Check
                className="mb-2"
                inline
                type="switch"
                {...column.getToggleHiddenProps()}
              />{" "}
              {column.id}
            </label>
          </div>
        ))}
        <Button size="sm" variant="dark" onClick={() => setAllFilters([])}>
          Reset
        </Button>
      </Container>

      <br></br>

      <Table responsive bordered striped {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
