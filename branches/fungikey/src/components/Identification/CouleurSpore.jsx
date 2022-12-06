import React from 'react'
import { Accordion, ListGroup} from 'react-bootstrap';
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom';


/**
 * @returns Une liste + dropdown des couleurs de spores et des groupes de champignons liées
 */
export default function CouleurSpore() {
  return (
    <>
    <Sidebar/>
    <div className="container-identification">
        
        <h1>Couleurs de spores</h1>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Spores blanches</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item>
                        Pleurotes
                        <ul>
                            <li>stipe court (si présent)</li>
                            <li>lames décurrentes</li>
                            <li>lignicoles</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Schizophylles
                        <ul>
                            <li>silhouette pleurotoïde</li>
                            <li>lamelles fendues en 2 sur la longueur,</li>
                            <li>lignicoles</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Amanites
                        <ul>
                            <li>chapeau charnu</li>
                            <li>lisse ou recouvert de flocons</li>
                            <li>lames libres</li>
                            <li>volve parfois réduite à des bourrelets floconneux</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Lépiotes
                        <ul>
                            <li>chapeau méchuleux</li>
                            <li>lames libres</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Armillaires
                        <ul>
                            <li>chapeau méchuleux</li>
                            <li>armille</li>
                            <li>lames un peu décurrentes</li>
                            <li>stipe rigide charnu</li>
                            <li>cordon mycélien noir très évident</li>
                            <li>souvent en touffe</li>
                            <li>lignicoles</li>
                            <li>parasites</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Hygrophores
                        <ul>
                            <li>revêtement du chapeau fréquemment gras ou visqueux</li>
                            <li>Hygrocybe : couleurs vives</li>
                            <li>Hygrophorus : couleurs rarement vives</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Laccaires
                        <ul>
                            <li>petites espèces à silhouette collyboïde</li>
                            <li>lames espacées à peine décurrentes</li>
                            <li>colorées de brun-rose à violet, terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Collybies
                        <ul>
                            <li>chapeau parfois gras au toucher</li>
                            <li>hygrophane et plat</li>
                            <li>stipe fistuleux et un peu élastique</li>
                            <li>stipe souvent de même couleur que le chapeau</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Marasmes
                        <ul>
                            <li>espèces petites à moyennes</li>
                            <li>de silhouette le plus souvent gracile</li>
                            <li>chapeau blanc à brun</li>
                            <li>stipe parfois noir</li>
                            <li>souvent fin</li>

                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Mycènes
                        <ul>
                            <li>chapeau souvent nettement strié</li>
                            <li>espèces peu charnues et transparentes</li>
                            <li>stipe long et grêle</li>
                            <li>lames pouvant être décurrentes ou échancrées</li>
                            <li>souvent en touffe</li>
                            <li>terrestres ou sur débris végétaux</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Tricholomes
                        <ul>
                            <li>chapeau robuste</li>
                            <li>stipe charnu</li>
                            <li>terrestre</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Clitocybes
                        <ul>
                            <li>chapeau en général peu coloré</li>
                            <li>lames minces</li>
                            <li>sec en entonnoir</li>
                            <li>terrestre</li>
                        </ul>
                    </ListGroup.Item>

                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>Spores roses</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item>
                        Volvaires
                        <ul>
                            <li>lames libres</li>
                            <li>volve membraneuse en sac</li>
                            <li>terrestre</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Entolomes
                        <ul>
                            <li>chapeau charnu</li>
                            <li>sec et nu</li>
                            <li>terrestre</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Clitopiles
                        <ul>
                            <li>espèces fragiles</li>
                            <li>pied parfois absent</li>
                            <li>terrestre</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Plutées
                        <ul>
                            <li>lignicole</li>
                        </ul>
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>Spores ocres, gris-beige brun</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item>
                        Crépidotes
                        <ul>
                            <li>silhouette pleurotoïde</li>
                            <li>lignicole</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Pholiotes
                        <ul>
                            <li>espèces souvent à écailles</li>
                            <li>lames adnées</li>
                            <li>parfois armille ou cortine</li>
                            <li> souvent lignicoles et en touffe</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Galères
                        <ul>
                            <li>espèces grêles à chapeau jamais conique</li>
                            <li>souvent gras au toucher</li>
                            <li>souvent lignicoles</li>
                            <li>couleur jaune à brun-rouge</li>
                            <li>lames adnées </li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Cortinaires
                        <ul>
                            <li>cortine plutôt persistante</li>
                            <li>lames adnées à échancrées</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Inocybes
                        <ul>
                            <li>chapeau souvent conique ou mamelonné</li>
                            <li>fibrilleux radialement</li>
                            <li>odeur très souvent spermatique</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Hébélomes
                        <ul>
                            <li>chapeau charnu</li>
                            <li>spores couleur « café au lait »</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Paxilles
                        <ul>
                            <li>silhouette de gros clitocybe</li>
                            <li>hyménophore facilement détachable du chapeau</li>
                        </ul>
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>Spores brun-pourpre, violettes</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item>
                        Agarics
                        <ul>
                            <li>chapeau charnu</li>
                            <li>anneau très ne</li>
                            <li>spores violettes</li>
                            <li>lames libres</li>
                            <li>souvent terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Strophaires
                        <ul>
                            <li>anneau plus ou moins développé</li>
                            <li>spores brun-pourpre</li>
                            <li>chapeau souvent visqueux</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Psilocybe
                        <ul>
                            <li>espèces de petites taille</li>
                            <li>à silhouette mycénoïde</li>
                            <li>chapeau souvent visqueux</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Hypholomes
                        <ul>
                            <li>chapeau sec et nu</li>
                            <li>spores brun-violet</li>
                            <li>en touffe</li>
                            <li>lignicoles</li>
                        </ul>
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>Spores noire</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item>
                        Panéoles
                        <ul>
                            <li>espèces grêles</li>
                            <li>face des lames à maturation irrégulière (lames « nuageuses »)</li>
                            <li>chapeau gris à noirâtre</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Psathyrelles
                        <ul>
                            <li>espèces grêles</li>
                            <li>chair fragiles</li>
                            <li>lames non déliquescente</li>
                            <li>chapeau sec</li>
                            <li>clair ou pâle</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Coprins
                        <ul>
                            <li>espèces charnues ou fragiles</li>
                            <li>se liquéfiant souvent rapidement</li>
                            <li>lames libres</li>
                            <li>terrestres</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Gomphides
                        <ul>
                            <li>chapeau et cortine visqueux</li>
                            <li>lames très décurrentes et hyménophore facilement détachable du chapeau</li>
                        </ul>
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>



        </Accordion>

        <Link to="/Identification">
            <button className='button-retour'>Retour</button>
        </Link>
        
    </div>
    </>
  )
}
