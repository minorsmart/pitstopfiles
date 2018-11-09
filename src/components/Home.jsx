import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
    render() {
      return (
        <Grid>
          <Jumbotron>
            <h2>MSI Pitstop 2019 S1</h2>
            <p>Wil je eindelijk je Smart ambities realiseren? Zoek je hiervoor inspiratie?
            Kom op <span className="special-text">VRIJDAG 11 JANUARI 2019</span> naar de Hogeschool van Arnhem en Nijmegen voor een ontmoeting met Smart Industry.
            </p>
            <Link to="/programma">
              <Button bsStyle="primary" bsSize="large">Bekijk het programma</Button>
            </Link>
          </Jumbotron>

          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Panel>
                <Panel.Heading>
                  <Link to="/smarties">
                    <Panel.Title>
                      <Image src="assets/smartie.jpg" circle className="profile-pic" />
                      <h3>Ga naar Smarties</h3>
                    </Panel.Title>
                  </Link>
                </Panel.Heading>
                <Panel.Body>
                  <p>Deelnemers van de Minor Smart Industry delen hun visie op Smart Industry.</p>
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Panel>
                <Panel.Heading>
                <Link to="/partners">
                  <Panel.Title>
                    <Image src="assets/partner.jpg" circle className="profile-pic" />
                    <h3>Ga naar Partners</h3>
                  </Panel.Title>
                </Link>
                </Panel.Heading>
                <Panel.Body>
                  <p>Partners van MSI wisselen ervaringen uit en vormen nieuwe Smart Allianties.</p></Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Panel>
                <Panel.Heading>
                <Link to="/gasten">
                  <Panel.Title>
                    <Image src="assets/guest.jpg" circle className="profile-pic" />
                    <h3>Ga naar Gasten</h3>
                  </Panel.Title>
                </Link>
                </Panel.Heading>
                <Panel.Body>
                  <p>Kom langs en ontdek wat wij kunnen betekenen voor jouw Smart ambities.</p>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      )
    }
}
