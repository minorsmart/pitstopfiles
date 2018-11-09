import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import './Partners.css'

export default class Partners extends Component {
    render() {
      return (
        <div>
        <Image src="assets/partners.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <h2>Partners</h2>
                <p>Concretiseren projecten S2. Smart Alliances genereren via Design Thinking sessies.</p>
                <p>Projecten S2 meebrengen. Datum Pitchdag: 13 februari / 9:00 - 14:00u (met lunch) Samenwerking met andere bedrijven stimuleren.</p>

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
