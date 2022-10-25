import React from 'react'
import Sidebar from '../Sidebar'
import {Link} from 'react-router-dom';
import { TableIdentificator, } from './TableIdentificatorMain'

/**
 *
 * @returns Retourne un bloc contenant le tableau identificator et un bouton retour
 */
export default function IdentificatorMain() {
  return (
    <>
    <Sidebar/>
    <div className="container-identification">
        <h1>Identificator</h1>
        <TableIdentificator></TableIdentificator>
        <Link to="/">
        <button className='button-retour'>Retour</button>
      </Link>
    </div>
    </>
  )
}
