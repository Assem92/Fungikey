
import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import {Image} from 'react-bootstrap'


/**
 * @returns Page Principale d'Identification avec des aides pour l'anatomies des champignons
 */

export default function Identification() {
  return (
    <>
    <Sidebar/>
    <div className='container-identification'>
      
      <h2 className='h2-identification'>Anatomie des champignons</h2>
      <Image fluid src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Sch%C3%A9ma_champignon.jpg/440px-Sch%C3%A9ma_champignon.jpg'></Image>
      <p>Source: Wikipedia</p>
      <h2 className='h2-identification'>Tubes ou Lames? </h2>
      <Image fluid src='./images/aideIdenti1.webp'></Image>
      <p>Source: toxinfo.ch</p>

      <Link to="/">
        <button className='button-retour'>Retour</button>
      </Link>
    </div>
    </>
  )
}

