import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import './Gasten.css'

export default class Gasten extends Component {
    render() {
      return (
        <div>
        <Image src="assets/gast.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <h2>Gasten</h2>
                 <h3>Pitstop</h3>
                  <p>
                    Bedrijven en organisaties die een project willen inbrengen, kunnen deelnemen aan de MSI Pitstop
                    op <span className="special-text">VRIJDAG 11 JANUARI 2019 </span>. Zie <Link to="/programma">hier </Link>
                    het volledige programma en informatie over de locatie.
                  </p>
                  <p>
                    Tijdens de Pitstop zal een projectmarkt worden ingericht, waar alle partners en
                    <span className="special-text"> SMARTIES</span> een plek krijgen om hun project te presenteren
                    aan de overige deelnemers.
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
                    overlappen of complementair zijn groeperen.
                  </p>
                <form action="https://formspree.io/wfth69@gmail.com" method="POST">
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
                    <ControlLabel>Mailadres</ControlLabel>
                    <FormControl
                      type="email"
                      name="_replyto"
                      placeholder="Jouw mailadres"
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
                    <HelpBlock>Uw gegevens zullen uitsluitend worden gebruikt om
                    u op de hoogte te houden van ontwikkelingen rondom de Pitstop.</HelpBlock>
                    <Button
                      bsStyle="primary"
                      bsSize="large"
                      type="submit"
                      value="Send"
                     >Verstuur</Button>
                  </FormGroup>
                </form>
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
