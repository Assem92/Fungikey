import React  from 'react'
import {Link} from 'react-router-dom'
import { Image} from 'react-bootstrap';
import Sidebar from '../Jeux/Sidebar';
/**
* @author Assem Aoussar
**/


export default function Jeu2() {
  
 
  
  return (
    
    <div className="Jeu2">
     
     <Sidebar/>
      <p class="titre">Jeu: 4 images un mot</p>

<h1>Quel image correspond à l'Amanite tue mouche?</h1>


    <div className="container-identification">

       <Link to="/Incorrect">
            <Image  src="./images/Amanite_panthere.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Amanite_phalloide.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Correct">
            <Image src="./images/Amanite_tue-mouche.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Auriculaires.webp" fluid></Image>
        </Link>

    </div>
 <h1>Quel image correspond au bolet elegant?</h1>
 <div className="container-identification">
 <Link to="/Correct">
            <Image src="./images/Bolet_elegant.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Boletus.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Calocères.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Cepe_de_Bordeaux.webp" fluid></Image>
        </Link>

        <br />
        <br />
        <br />
        </div>
        <h1>Quel image correspond au Clathres?</h1>
        <div className="container-identification">
       <Link to="/Incorrect">
            <Image src="./images/Chalciporus.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Correct">
            <Image src="./images/Clathres.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Clavaires.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Clitocybe_nebuleux.webp" fluid></Image>
        </Link>

        </div>
        <div className="container-identification">
        <h1>Quel image correspond à l'Entolome livide?</h1>

        <Link to="/Incorrect">
            <Image src="./images/Cortinaire_couleur_mer.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Cortinaire_chaussette.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Cortinaire_camphre.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Correct">
            <Image src="./images/Entolome_livide.webp" fluid></Image>
        </Link>
        </div>
        <h1>Quel image correspond au Géastre?</h1>
        <div className="container-identification">
       <Link to="/Correct">
            <Image src="./images/Géastres.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Girolle.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Gyromitres.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Gyroporus.webp" fluid></Image>
        </Link>
        </div>

        <h1>Quel image correspond à l'Héloties?</h1>
        <div className="container-identification">
        <Link to="/Incorrect">
            <Image src="./images/Hebelome_echaude.webp" fluid></Image>
        </Link>
 
        <br />

        <Link to="/Correct">
            <Image src="./images/Héloties.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Helvelles.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Hydnes.webp" fluid></Image>
        </Link>
        </div>

        <h1>Quel image correspond à l'Hypholome touffe?</h1>
 <div className="container-identification">
        <Link to="/Incorrect">
            <Image src="./images/Lactaire_delicieux.webp" fluid></Image>
        </Link>

        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Lactaire_humide.webp" fluid></Image>
        </Link>

        <br /> 

        
        <Link to="/Correct">
            <Image src="./images/Bolet_elegant.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Lactaire_tranquille.webp" fluid></Image>
        </Link>
        </div>
        <div className="container-identification">
        <h1>Quel image correspond au Leccinum?</h1>

       <Link to="/Correct">
            <Image src="./images/Leccinum.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Langue_boeuf.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Lepiote_deguenillee.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Mérules.webp" fluid></Image>
        </Link>
        </div>

        <h1>Quel image correspond aux Morilles?</h1>
        <div className="container-identification">

       <Link to="/Correct">
            <Image src="./images/Morilles.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Paxille.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Pézizes.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Incorrect">
            <Image src="./images/Phallus.webp" fluid></Image>
        </Link>
        </div>

        <h1>Quel image correspond Vesses?</h1>
        <div className="container-identification">

        <Link to="/Incorrect">
            <Image src="./images/Xerocomus.webp" fluid></Image>
        </Link>
        
        <br />

        <Link to="/Incorrect">
            <Image src="./images/Typopilus.webp" fluid></Image>
        </Link>

        <br /> 

        <Link to="/Incorrect">
            <Image src="./images/Truffes.webp" fluid></Image>
        </Link>

        <br />

        <Link to="/Correct">
            <Image src="./images/Vesses (souples).webp" fluid></Image>
        </Link>

        <Link to="/">
            <button className='button-retour'>Retour</button>
        </Link>
        
        </div>






























      
    
    </div>
    
    
  );
}


  



