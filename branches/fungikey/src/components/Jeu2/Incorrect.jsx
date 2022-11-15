import {Link} from 'react-router-dom'
import {React} from 'react'
import {Image} from 'react-bootstrap'

/**
* @author Assem Aoussar
**/

export default function Incorrect() {
       
 
  return (
  
    
<div>
  
  <h1>Mauvaise réponse..</h1>

  <Link to="/Incorrect">
            <Image src="./images/erreur.gif" fluid></Image>
        </Link>
  
  <Link to="/Jeu2">
            <button className='button-retour'>Retour</button>

        </Link>
   <div className="Incorrect">
 
    
          
     
          
      
         <div>    
  




</div>
         

   
    </div>
  </div>

  )
  
}




