import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as ioCons from "react-icons/io";
import { Modal, Image } from 'react-bootstrap';



/**
 * @returns la page d'accueuil contenant le logo et le menu principal
 * @constant show, setShow: React state, pour la fenêtre modale
 * @constant setShow : React state, pour la fenêtre modale
 * @constant handleClose close: Lorsqu'on clique, cela ferme la fenêtre modale
 * @constant handleshow: Lorsqu'on clique sur le bouton avertissement, cela ouvre la fenêtre modale
 */
export default function Home() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Image fluid src="/Fungikeyy.webp" alt="logo"></Image>
    <div className='container' > 
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Attention!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Cette application ne remplace pas l'avis d'un expert.
                      Risque d'intoxication sévère.
                <br />
                <a href="https://www.anses.fr/fr/content/la-saison-des-champignons-en-avance-cette-année-soyez-vigilant-face-aux-risques-d">Site de l'Anses</a>
                      
            </Modal.Body>

        </Modal>
        <div className="d-grid gap-2">
          <button className='button-main' onClick={handleShow}><ioCons.IoIosWarning/> Avertissement</button>

          <Link to='/Identification'>
            <button className='button-main'>Identification</button>
            </Link>
          <Link to='/Conseils'>
            <button className='button-main'> Conseils </button>
            </Link>
            <Link to='/Jeux'>
            <button className='button-main'> Jeux </button>
            </Link>
          
            
        </div>
        
    
    </div>

    </>
    
  );
}
