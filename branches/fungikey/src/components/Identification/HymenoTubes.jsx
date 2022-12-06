import React from 'react'
import {Link} from 'react-router-dom';
import { Table, Image} from 'react-bootstrap';
import Sidebar from './Sidebar';



/**
 * @returns Un tableau HTML d'hyménophores à tubes
 */
export default function HymenoTubes() {

  return (
    <>
    <Sidebar/>
    
    <div className='container-identification'>
        
        <h1>Hyménophore à tubes</h1>
        <Table striped bordered hover responsive="sm">

            <thead>
                <tr>
                    <th colSpan={3}>Tubes = Bolets</th>
                </tr>
   
                <tr>
                    <th>Pores blancs/gris/rosés</th>
                    <th>Pores jaunes/verdâtres/
                        olivâtres</th>
                    <th>Pores rouges/orangés</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    Gyroporus
                        <Image fluid src='./images/Gyroporus.webp'></Image>
                        
                        
                        
                    </td>
                    <td>
                    Xerocomus
                        <Image fluid src='./images/Xerocomus.webp'></Image>
                        
                        
                    </td>
                    <td>
                        Chalciporus
                        <Image  fluid src='./images/Chalciporus.webp'></Image>
                    </td>
                </tr>
                <tr>
                    <td>
                    Typopilus
                        <Image  fluid src='./images/Typopilus.webp'></Image>
                        
                    </td>
                    <td>
                    Boletus
                        <Image  fluid src='./images/Boletus.webp'></Image>
                        
                    </td>
                    <td>
                    Boletus
                        <Image  fluid src='./images/Boletus.webp'></Image>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                    Leccinum
                        <Image  fluid src='./images/Leccinum.webp'></Image>
                        
                    </td>
                    <td>
                    Suillus
                        <Image  fluid src='./images/Suillus.webp'></Image>
                        
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
