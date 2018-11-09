import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Programma.css'

export default class Programma extends Component {
    render() {
      return (
        <div>
        <Image src="assets/smarties.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <h2>Smarties</h2>
                  <h3>MSI Seminar</h3>
                  <p>
	                  We ontmoeten elkaar op <span className="special-text">VRIJDAG 11 JANUARI 2019</span> op de Verlengde Groenestraat 75 (Bisschop Hamerhuis) te Nijmegen in ruimte H021.
										Het programma start met een projectmarkt waarop de verschillende teams en hun opdrachtgevers hun projecten tonen en aanwezig zijn
										om een toelichting te geven. U kunt de verschillende stands bezoeken en u laten informeren en inspireren over de verschillende Smart Industry toepassingen.
									</p>
                  <p>
                    De projectmarkt sluit om 11:15u. Daaropvolgend starten de Design Thinking sessies. Het doel van de sessies is om te komen tot een nieuwe set van projectencharters
										voor de volgende ronde MSI die in februari van start gaat. Tussendoor zal een lichte lunch worden geserveerd.
									</p>
                  <h3>Pitstop</h3>
                  <p>
                    Om 13:00u sluiten we de Pitstop af. De uitkomsten van de Design Thinking sessies zullen verder worden uitgewerkt tot definitieve projectchaters. Deze zullen nogmaals ter
										beoordeling worden voorgelegd bij de partners. Daarna zullen ze worden gedeeld met de nieuwe lichting <span className="special-text">SMARTIES</span>.
									</p>
                  <p>
                    De charters dienen als uitgangspunt voor de Pitchdag op 13 februari 2019.
									</p>
                  <p>

									<Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Tijd</th>
												<th>Activiteit</th>
                        <th>Ruimte</th>
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
              </Col>
              <Col xs={12} sm={4} className="sidebar-section">
                <Image src="assets/person-laptop.jpg" className="profile-pic" />
                <p>
                  Ruimte inplannen voor informatie Pitchdag S2 met terugblik op oorspronkelijke pitches.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
}
