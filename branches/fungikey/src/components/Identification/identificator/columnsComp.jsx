import { SearchColumnFilter } from './SearchColumnFilter'
import { SelectColumnFilter } from './SelectColumnFilter'


/**
 * @author Ghenima OULD AHMED
 * @constant COLUMNS  les colonnes de l'identificator
 * Header : Nom de la colonne
 * accessor: la clé accédant à la bonne donnée json
 * Filter: Le type de filtre à ajouter 
 */
export const COLUMNS =  [
    {
        Header: 'Nom Champignon',
        accessor: 'nom_champignon',
        Filter: SearchColumnFilter,
    },

    {
        Header: 'Nom Groupe', 
        accessor: 'nom_famille',
        Filter: SelectColumnFilter,
    },
    
    {
        Header: 'Groupe',
        accessor: 'groupe',
        Filter: SelectColumnFilter,
    },
    {
        Header: 'Genre Champignon',
        accessor: 'genre_champignon',
        Filter: SelectColumnFilter,
    },
    
    {
        Header: 'Type Chair',
        accessor: "type_chair",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Stipe", 
        accessor: "stipe",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Odeur",
        accessor: "odeur",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Lieu", 
        accessor: "Lieu",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Description", 
        accessor: "description",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Volve", 
        accessor: "volve",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Avec Anneau", 
        accessor: "avec_anneau",
        Filter: SelectColumnFilter,
    },
    
]
