import React from 'react'
import {Link} from 'react-router-dom';
import { Table, Image} from 'react-bootstrap';
import Sidebar from './Sidebar'

/**
 * @returns Un tableau HTML des autres types d'hyménophores 
 */
export default function HymenoAutre() {
  return (
    <>
    <Sidebar/>
   
    <div className="container-identification">
        
        <h1>Autres types d'hyménophores</h1>
        <Table responsive="sm" bordered striped hover>
            <thead>
                <th>
                    Lisse/alvéolé
                    
                </th>
                <th>
                    Poré
                </th>
                <th>
                    A aiguillons
                </th>
                <th>
                    Plissé
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>Forme de croûtes</td>
                    <td>Polypores
                    <Image  fluid src='./images/Polypores.webp'></Image> 
                    </td>
                    <td>Hydnes
                    <Image  fluid src='./images/Hydnes.webp'></Image> 
                    <Image  fluid src='./images/Hydnes2.webp'></Image> 
                    </td>
                    <td>Girolles et Chanterelles
                    <Image  fluid src='./images/GirollesetChanterelles.webp'></Image> 
                    </td>
                </tr>
                <tr>
                    <td>Mérules
                    <Image  fluid src='./images/Merules.webp'></Image> 
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    </div>
    <Link to="/">
        <button className='button-retour'>Retour</button>
    </Link>
    </>
  )
}
