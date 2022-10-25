import React from 'react'
import Sidebar from '../Sidebar'
import {Link} from 'react-router-dom';
import { TableIdentificator2, } from './TableIdentificatorComp.jsx'


/**
 * @author Manal Boutajar
 * @returns Retourne un bloc contenant le tableau identificator commplémentaire et un bouton retour
 */
export default function IdentificatorComp() {
  return (
    <>
    <Sidebar/>
    <div className="container-identification">
        
        <h1>Identificator - Complémentaire</h1>
        <TableIdentificator2></TableIdentificator2>
        <Link to="/">
        <button className='button-retour'>Retour</button>
        </Link>
    </div>
    </>
  )
}
