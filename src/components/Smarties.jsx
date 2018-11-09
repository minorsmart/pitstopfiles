import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Smarties.css'

export default class Smarties extends Component {
    render() {
      return (
        <div>
        <Image src="assets/smarties.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={12} className="main-section">
                <h2>Smarties</h2>
                  <h3>MSI Seminar</h3>
                  <p>
                    Tijdens het <Link to="/nieuws">Seminar</Link> eind januari zullen de presentaties voor MSI plaatsvinden.
                    Dit is de gelegenheid om je visie op Smart Industry met anderen te delen,
                    je opgedane kennis op dit gebied te tonen en de uitkomsten van je werk te presenteren.
                  </p>
                  <p>
                    Beschouw dit moment niet als de afronding van een traject, maar als een vliegende start van jouw carièrre binnen Smart Industry.
                    Gebruik de bijeenkomst om jezelf bij zoveel mogelijk personen en partijen op de kaart te zetten.
                    Maak afspraken, creëer opties voor jezelf en begin te bouwen aan je toekomst als Smart Industry professional.
                  </p>
                  <h3>Pitstop</h3>
                  <p>
                    Ter voorbereiding op het <Link to="/nieuws">Seminar</Link> vind op <span className="special-text">VRIJDAG 11 JANUARI 2019</span> de laatste Pitstop plaats.
                    Beschouw dit als een generale repetitie, waarbij je samen met je partnerorganisatie laat zien wat jullie hebben bereikt. Zie <Link to="/programma">hier</Link> het volledige programma.
                  </p>
                  <p>
                    Tijdens de Pitstop zal een projectmarkt worden ingericht, waar jullie een plek krijgt om het project te promoten.
                    <strong> Geef aan de organisatie van de Pitstop door welke faciliteiten je nodig hebt om je project optimaal te kunnen presenteren.</strong>
                  </p>
                  <p>
                  <h3>Projectcompetenties</h3>
                  <p>
                    Ter ondersteuning bij de voorbereiding staan hieronder nogmaals de competenties die we vanuit MSI hebben geformuleerd.
                    Gebruik ze als ontwerpcriteria bij de vormgeving van jouw persoonlijke waardepropositie (om maar eens vanuit een bekend model te citeren).
                  </p>
                  <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th></th>
                        <th>De <span className="special-text">SMARTIE</span> :</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><FontAwesomeIcon icon="lightbulb" /></td>
                        <td>ontwikkelt een prototype van de oplossings(richting)</td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon="trophy" /></td>
                        <td>draagt vanuit verschillende rollen bij aan het succes van een projectteam</td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon="comment-dots" /></td>
                        <td>communiceert op effectieve wijze zijn bevindingen naar verschillende doelgroepen</td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon="sun" /></td>
                        <td>draagt actief bij aan een optimale werksfeer sfeer binnen en buiten zijn team</td>
                      </tr>
                      <tr>
                        <td><FontAwesomeIcon icon="globe" /></td>
                        <td>ontwikkelt een professioneel netwerk</td>
                      </tr>
                    </tbody>
                  </Table>
                  </p>
                <p>
                </p>
                <h3>Ontwerp nieuwe projecten</h3>
                <p>
                  Een ander onderdeel van de Pitstop betreft de nieuwe MSI projecten.
                  In aantal Design Thinking sessies gaan we bedenken welke mooie opdrachten
                  we kunnen definiëren voor de nieuwe lichting <span className="special-text">SMARTIES</span>.
                </p>
                <p>
                  Je zal worden uitgenodigd om deel te nemen aan een sessie en samen met docenten en
                  projectpartners nieuwe ideeën en plannen te maken. Deze zullen later worden uitgewerkt tot
                  concrete charters en als uitgangspunt dienen voor de volgende <Link to="/nieuws">Pitchdag</Link>.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
}
