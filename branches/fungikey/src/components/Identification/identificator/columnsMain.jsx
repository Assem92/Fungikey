import { SearchColumnFilter } from './SearchColumnFilter'
import { SelectColumnFilter } from './SelectColumnFilter'

/**
 * @author Helena Li 
 * @constant COLUMNS les colonnes de l'identificator
 * Header : Nom de la colonne
 * accessor: la clé accédant à la bonne donnée json
 * Filter: Le type de filtre à ajouter 
 */
export const COLUMNS =  [
    {
        Header: 'Nom', 
        accessor: 'nom_famille',
        Filter: SearchColumnFilter,
    },
    {
        Header: 'Type Champignon',
        accessor: 'type_champignon',
        Filter: SelectColumnFilter,
    },
    {
        Header: 'Type Chapeau',
        accessor: 'type_chapeau.hymenophores',
        Filter: SelectColumnFilter,
    },
    {
        Header: "Lames",
        accessor: "type_chapeau.type_lames",
        Filter: SelectColumnFilter,
    },
    {
        Header: 'Couleur Spore',
        accessor: 'type_chapeau.couleur_spores',
        Filter: SelectColumnFilter,
    },
    {
        Header: 'Stipe',
        accessor: "type_chapeau.stipe",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Trame", 
        accessor: "type_chapeau.trame",
        Filter: SelectColumnFilter,
    },
    {
        Header: "Forme",
        accessor: "type_chapeau.forme",
        Filter: SelectColumnFilter,
    }
]
