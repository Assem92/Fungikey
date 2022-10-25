import React from "react";


/**
 * 
 * @param {string} column une colonne  
 * @returns Un filtre type "barre de recherche"
 * @constant filterValue la valeur à filtrer 
 * @constant setFilter booléen pour savoir si l'ont filtre ou non 
 */
export const SearchColumnFilter = ({ column }) => {
    const {filterValue, setFilter} = column
    return (
      <span>
        <input value= {filterValue || ''}
        onChange={ (e) => setFilter(e.target.value)} />
      </span>
  )
}