import React from 'react'
import { Table, Image} from 'react-bootstrap';
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom';

/**
 * @returns Un tableau HTML d'hyménophores internes
 */
export default function HymenoInterne() {
  return (
    <>
    <Sidebar/>
    <div className="container-identification">
        <Sidebar/>
        <h1>Hyménophore interne</h1>
        <Table responsive="sm" bordered striped hover>
            <thead>
                <th>
                    Globuleux
                </th>
                <th>
                    Gélatineux et nauséabonds
                </th>
                
            </thead>
            <tbody>
                <tr>
                    <td>Sclérodermes (coriaces)
                    <Image  fluid src='./images/Sclerodermes(coriaces).webp'></Image>
                    </td>
                    <td>Truffes
                    <Image  fluid src='./images/Truffes.webp'></Image> </td>
                    <td>Phallus
                    <Image  fluid src='./images/Phallus.webp'></Image>
                    </td>
                </tr>
                <tr>
                    <td>Géastres
                    <Image  fluid src='./images/Geastres.webp' alt="geastres"></Image>
                    </td>
                    <td></td>
                    <td>Clathres
                    <Image  fluid src='./images/Clathres.webp'></Image>
                    </td>

                </tr>
                <tr>
                  <td>Vesses (souples)
                  <Image  fluid src='./images/Vesses(souples).webp'></Image>
                  </td>
                  <td></td>
                  <td></td>
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
