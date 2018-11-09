import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './Partners.css'

export default class Partners extends Component {
    render() {
      return (
        <div>
        <Image src="assets/partners.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={12}>
                <h2>Partners</h2>
                <h3>MSI Seminar</h3>
                  <p>
                    Tijdens het <Link to="/nieuws">Seminar</Link> eind januari zullen de presentaties voor MSI plaatsvinden.
                    Dit is de gelegenheid om te laten zien welke resultaten het project voor jouw organisatie heeft opgeleverd
                    en te vernemen wat de ervaringen van de andere MSI-partners zijn geweest.
                  </p>

                  <h3>Pitstop</h3>
                  <p>
                    Ter voorbereiding op het <Link to="/nieuws">Seminar</Link> vindt op <span className="special-text">VRIJDAG 11 JANUARI 2019 </span>
                    de laatste Pitstop plaats. Zie <Link to="/programma">hier</Link> het volledige programma en informatie over de locatie.
                  </p>
                  <p>
                    Tijdens de Pitstop zal een projectmarkt worden ingericht, waar alle partners een plek krijgen om hun project te presenteren
                    aan de overige deelnemers. Dit is voor onze <span className="special-text">SMARTIES</span> een generale repetitie voor de <Link to="/nieuws">Seminar</Link> en
                    voor jou een gelegenheid om met andere MSI-partners ervaringen uit te wisselen.
                  </p>
                  <p>
                    Een belangrijk doel van de pitstop zal zijn om vooruit te kijken naar het volgende semester.
                    In aantal Design Thinking sessies gaan we bedenken welke nieuwe opdrachten
                    we kunnen definiëren voor de volgende ronde MSI.
                  </p>
                  <p>
                    Je zal worden uitgenodigd om deel te nemen aan een sessie waarin je samen met docenten en
                    de huidige <span className="special-text">SMARTIES</span> nieuwe ideeën en plannen gaat maken.
                    Deze zullen later worden uitgewerkt tot concrete charters en als uitgangspunt dienen voor de
                    volgende <Link to="/nieuws">Pitchdag</Link>.
                  </p>
                  <p>
                    We willen hiervoor gaan werken met Smart Allianties rondom gezamenlijke vraagstukken.
                    In het bijgevoegde formulier kun je jouw ideëen voor het volgende project achterlaten.
                    Wij zullen alle aangeleverde projectensuggesties met elkaar vergelijken en onderwerpen die elkaar
                    overlappen of complementair zijn groeperen. Tijdens de Design Thinking sessies zullen we trachten partners met vergelijkbare projectideeën aan dezelfde tafel te plaatsen.
                    De uitkomsten van de sessies zullen worden gebruikt ter voorbereiding op de volgende <Link to="/nieuws">Pitchdag</Link>.
                  </p>
                  <form action="https://formspree.io/witek.tenhove@han.nl" method="POST">
                    <FormGroup
                      controlId="formBasicText"
                    >
                      <ControlLabel>Naam</ControlLabel>
                      <FormControl
                        type="text"
                        name="name"
                        placeholder="Jouw naam"
                      />
                      <br/>
                      <FormControl.Feedback />
                      <ControlLabel>Bedrijf</ControlLabel>
                      <FormControl
                        type="tekst"
                        name="bedrijf"
                        placeholder="Jouw bedrijf"
                      />
                      <br/>
                      <FormControl.Feedback />
                      <ControlLabel>Projectvoorstellen</ControlLabel>
                      <FormControl
                        componentClass="textarea"
                        name="projecten"
                        placeholder="Projectonderwerpen voor MSI S2"
                      />
                      <br/>
                      <FormControl.Feedback />
                      <HelpBlock>De gegevens zullen uitsluitend worden gebruikt ter voorbereiding op de Pitstop.</HelpBlock>
                      <Button
                        bsStyle="primary"
                        bsSize="large"
                        type="submit"
                        value="Send"
                       >Verstuur</Button>
                    </FormGroup>
                  </form>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
}
