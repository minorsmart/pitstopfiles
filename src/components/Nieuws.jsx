import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import './Nieuws.css'

export default class Nieuws extends Component {
    render() {
      return (
        <div>
        <Image src="assets/pitch.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={12} className="main-section">
                <h2>Nieuws</h2>
                <hr/>
                <h4>Seminar MSI/DBI S1</h4>
                <p>
                  Samen met de <a href="https://dbi.bkhan.nl/" target="_blank" rel="noreferrer noopener">Minor Digital Business & Innovation </a>
                  zal op <span className="special-text">28 JANUARI 2019 </span> een seminar worden georganiseerd omtrent technologie en business innovatie.
                  Het programma start om 19:00 en eindigt om 22:00u.
                  {/* Informatie Seminar. Instructies deelname. Promotie en sponsoring. Recruiters. */}
                </p>
                <p>
                  Tijdens het Seminar zullen de presentaties voor MSI plaatsvinden.
                  <span className="special-text"> SMARTIES</span> delen hun visie op Smart Industry,
                  tonen opgedane kennis op dit gebied en presenteren samen met de projectpartners de uitkomsten van hun werk.
                </p>
                <p>
                  Dit is de gelegenheid om te sparren met experts, inspiratie op te doen bij de verschillende projecten en
                  te leren van de ervaringen van anderen. Maak afspraken, creëer opties voor jou en je organisatie
                  en bouw aan mee aan Smart Industry.
                </p>
                <hr/>
                <h4>Pitchdag 2019 S2</h4>
                <p>
                  Op <span className="special-text">13 FEBRUARI 2019</span> om 9:00 - 14:00u vindt de Pitchdag 2019 S2 plaats. Dit is een eerste gelegenheid voor partners en MSI-teams
                  om kennis met elkaar te maken. Beide partijen kunnen achteraf bij de organisatie van MSI hun voorkeur uitspreken voor een project
                  of een team. Op basis hiervan zal een optimale match worden gemaakt tussen de projecten en de afzonderlijke teams.
                </p>
                <p>
                  Kijk <a href="https://minorsmart.github.io/pitch/" target="_blank" rel="noreferrer noopener">hier</a> voor een impressie van de laatste Pitchdag.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
}
