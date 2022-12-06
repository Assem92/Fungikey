import React from 'react'
import { Table, Image} from 'react-bootstrap';
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom';




/**
 * @returns Un tableau HTML d'hyménophores externes
 */
export default function HymenoExterne() {
  return (
    <>
    <Sidebar/>
    
    <div className="container-identification">
        
        <h1>Hyménophore Externe sans chapeau</h1>
        <Table responsive="sm" bordered striped hover>
            <thead>
                <th>
                    En coupe
                
                </th>
                <th>
                    Gélatineux
                </th>
                <th>
                    Pilon, arbuscule ou corail
                </th>
                <th>
                    Globuleux à alvéoles, ou en forme de selle
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>Auriculaires
                    <Image  fluid src='./images/Auriculaires.webp'></Image>
                    </td>
                    <td>Trémelles
                    <Image  fluid src='./images/Tremelles.webp'></Image>
                    </td>
                    <td>Calocères
                    <Image  fluid src='./images/Caloceres.webp'></Image>
                    </td>
                    <td>Morilles
                     <Image  fluid src='./images/Morilles.webp'></Image>
                        </td>
                </tr>
                <tr>
                    <td>Pézizes
                    <Image  fluid src='./images/Pezizes.webp'></Image>
                    </td>
                    <td></td>
                    <td>Clavaires
                    <Image  fluid src='./images/Clavaires.webp'></Image>
                    </td>
                    <td>Gyromitres
                    <Image  fluid src='./images/Gyromitres.webp'></Image>
                    </td>
                </tr>
                <tr>
                  <td>Héloties
                  <Image  fluid src='./images/Heloties.webp'></Image>
                  </td>
                  <td></td>
                  <td></td>
                  <td>Helvelles
                  <Image  fluid src='./images/Helvelles.webp'></Image>
                  </td>
                </tr>
            </tbody>
        </Table>
        <Link to="/Identification">
            <button className='button-retour'>Retour</button>
        </Link>
    </div>
    </>
  )
}
