import {React} from 'react'
import {Link} from 'react-router-dom'
import { CardMushroom } from './Card';

import Sidebar from '../Jeux/Sidebar';
/**

 * @returns le troisième jeu: reconnaissance par champignon
 * @function refreshPage() on rafraîchit la page afin de regénérer un champignon au hasard
 */
export default function Jeu1() {



    function refreshPage() {
      window.location.reload(false);
    }
  
    return (
      <>
      <Sidebar/>
      <div className='container-identification'>
        <p class="titre">Jeu : Trouver le Champignon</p>
    
        
         <Link to="/">
            <button className='button-retour'>Retour</button>
        </Link>
        
  
        <CardMushroom/>
        
  
        <button className='button-retour' onClick={refreshPage} >Recommencer</button>
  
       
    
        
      </div>
      </>
  
    )
  
  }
  
  
  
    