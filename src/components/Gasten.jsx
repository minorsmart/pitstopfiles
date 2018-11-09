import React, { Component } from 'react'
import { Grid, Row, Col, Image, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
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
                <p>
                  Informatie Seminar. Instructies deelname. Promotie en sponsoring. Recruiters.
                  Ruimte inplannen voor informatie Pitchdag S2 met terugblik op oorspronkelijke pitches. Informatie voor exposure. Promotie. Sponsoring.
                </p>
                <form action="https://formspree.io/wfth69@gmail.com" method="POST">
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Naam</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Vul uw naam in"
                    />
                    <br/>
                    <FormControl.Feedback />
                    <ControlLabel>Mailadres</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Uw mailadres"
                    />
                    <br/>
                    <FormControl.Feedback />
                    <ControlLabel>Opmerkingen</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Eventuele suggesties of wensen"
                    />
                    <br/>
                    <FormControl.Feedback />
                    <HelpBlock>Uw gegevens zullen uitsluitend worden bewaard om
                    u op de hoogte te houden van ontwikkelingen rondom de Pitstop.</HelpBlock>
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
