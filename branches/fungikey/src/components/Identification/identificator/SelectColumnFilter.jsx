import React from "react";


/**
 * 
 * @param {string} column  une colonne  
 * @returns Un filtre type "sélection"
 * @constant filterValue la valeur à filtrer 
 * @constant setFilter booléen pour savoir si l'ont filtre ou non 
 */
export const SelectColumnFilter = ({ column }) => {
    const {filterValue, setFilter,  preFilteredRows, id } = column

    /**
     * @constant options les options de sélection 
     * On traverse les valeurs pour chaque colonne et on élimine les valeurs en doubles ou nulles
     * @return options possibles se trouvant dans la colonne donnée
     */
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => {
            if(!(row.values[id] == null || row.values[id] == "")){
                options.add(row.values[id])
            }
          
        })
        return [...options.values()]
      }, [id, preFilteredRows])
      
    return (
        <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
        >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
  )
}