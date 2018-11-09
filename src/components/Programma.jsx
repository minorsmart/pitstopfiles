import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Table } from 'react-bootstrap'
import './Programma.css'

export default class Programma extends Component {
    render() {
      return (
        <div>
        <Image src="assets/time.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <h2>Smarties</h2>
                  <h3>Pitstop</h3>
                  <p>
	                  We ontmoeten elkaar op <span className="special-text">VRIJDAG 11 JANUARI 2019</span> op de Verlengde Groenestraat 75 (Bisschop Hamerhuis) te Nijmegen in ruimte H021.
										Het programma start met een projectmarkt waarop de MSI teams en opdrachtgevers hun projecten tonen. Je kunt de stands bezoeken en je laten informeren en inspireren
										over de verschillende Smart Industry toepassingen.
									</p>
                  <p>
                    De projectmarkt sluit om 11:15u. Daaropvolgend starten de Design Thinking sessies. Het doel van de sessies is om te komen tot een nieuwe set van projectencharters
										voor de volgende ronde MSI die in februari van start gaat. Tussendoor zal een lichte lunch worden geserveerd.
									</p>
                  <p>
                    Om 13:00u sluiten we de Pitstop af. De uitkomsten van de Design Thinking sessies zullen verder worden uitgewerkt tot definitieve projectchaters. Deze zullen nogmaals ter
										beoordeling worden voorgelegd bij de partners. Daarna zullen ze worden gedeeld met de nieuwe lichting <span className="special-text">SMARTIES</span>.
									</p>
                  <p>
                    De charters dienen als uitgangspunt voor de <Link to="/nieuws">Pitchdag</Link> op 13 februari 2019.
									</p>

              </Col>
              <Col xs={12} sm={4} className="sidebar-section">
              <h3>Tijdschema</h3>

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
										<td>10:00u</td>
										<td>Ontvangst + Koffie</td>
										<td>H021</td>
									</tr>
									<tr>
										<td>10:15u</td>
										<td>Opening projectmarkt</td>
										<td>H021</td>
									</tr>
									<tr>
										<td>11:15u</td>
										<td>Design Thinking sessies</td>
										<td>H021</td>
									</tr>
									<tr>
										<td>13:00u</td>
										<td>Einde Pitstop</td>
										<td>H021</td>
									</tr>
								</tbody>
							</Table>
							<h3>Locatie</h3>
							<iframe title="Verlengde Groenestraat 75, Nijmegen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.7499252058465!2d5.860602815781821!3d51.82899857968917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c708f720b3b44f%3A0x9d7c0291c70f5fa1!2sVerlengde+Groenestraat+75%2C+6525+EJ+Nijmegen!5e0!3m2!1sen!2snl!4v1541762853329" width="400" height="300" frameborder="0" allowfullscreen></iframe>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
}
