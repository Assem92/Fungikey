import React from 'react'
import { Table} from 'react-bootstrap'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom'



/**
 * @returns Un tableau HTML d'hyménophores à lames
 */
export default function HymenoLames() {
  return (
    <>
    <Sidebar/>
   
    <div className="container-identification">
        
        <h1>Hyménophore à lames</h1>
        <Table responsive bordered striped hover>
            <thead>
                <tr>
                    <td rowSpan={2}> Trame Grenue</td>
                    <td>
                        Latex
                    </td>
                    <th colSpan={7}>
                        Lactaires
                    </th>
                </tr>

                <tr>
                    <td>Pas de Latex</td>
                    <th colSpan={7}>
                        Russules
                    </th>
                </tr>
                <tr>
                    <td rowSpan={11}>
                        Trame fibreuse
                    </td>
                    <td  colSpan={3}>
                        Caractère du stipe/Couleur des spores
                    </td>
                    <td>Blanche</td>
                    <td>Rose</td>
                    <td>Ocre, gris-beige, brun</td>
                    <td>Brun-pourpre, Violette</td>
                    <td>Noire</td>
                   
                </tr>
                <tr>
                    <td  colSpan={3}>
                        Excentré/Pied latéral
                    </td>
                    <th>Pleurotes Schizophylles</th>
                    <th></th>
                    <th>Crépidotes</th>
                    <th></th>
                    <th></th>
                </tr>
                


                <tr>
                    <td  colSpan={3}>
                        Volve
                    </td>
                    <th>Amanites</th>
                    <th>Volvaires</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td  colSpan={3}>
                        Volve + anneau
                    </td>
                    <th>Amanites</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td  colSpan={3}>
                        Anneau
                    </td>
                    <th>Lépiotes Armillaires</th>
                    <th></th>
                    <th>Pholiotes Galères</th>
                    <th>Agarics Strophaires</th>
                    <th></th>
                </tr>
                <tr>
                    <td  colSpan={3}>
                        Cortine
                    </td>
                    <th></th>
                    <th></th>
                    <th>Cortinaires</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr>
                    <td rowSpan={5}>
                        Nu
                    </td>
                    <td>Lames épaisses/espacées</td>
                    <td>Lames adnées ou décurrentes</td>
                    <th>Hygrophores Laccaires</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>

                </tr>


                <tr>
                    <td rowSpan={4}>Lames fines</td>
                    <td rowSpan={2}>
                        Lames adnées à Lames échancrées
                    </td>
                    <th rowSpan={1}>Marasmes Mycènes Collybies </th>
                    <th></th>
                    <th>Inocybes</th>
                    <th>Psilocybes</th>
                    <th>Panéoles Psathyrelles</th>
                </tr>

                <tr>
                    <th>Tricolomes</th>
                    <th>Entolomes</th>
                    <th>Hébélomes</th>
                    <th>Hypholomes</th>
                    <th></th>
                </tr>

                
                <tr>
                    <td>Lames décurrentes</td>
                    <th>Clitocybes</th>
                    <th>Clitopiles</th>
                    <th>Paxilles</th>
                    <th></th>
                    <th>Gomphides</th>
                </tr>
                <tr>
                    <td>Lames Libres</td>
                    <th></th>
                    <th>Plutées</th>
                    <th></th>
                    <th></th>
                    <th>Coprins</th>
                </tr>
               
    
            </thead>
            
        </Table>
        <Link to="/Identification">
            <button className='button-retour'>Retour</button>
        </Link>
    </div>
    </>
  )
}
