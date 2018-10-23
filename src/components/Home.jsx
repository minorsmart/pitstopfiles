import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap'
import './Home.css'

export default class Home extends Component {
    render() {
      return (
        <Grid>
          <Jumbotron>
            <h2>MSI Pitstop 2018</h2>
            <p>Kom inspiratie opdoen voor je Smart Ambities!</p>
            <Link to="/programma">
              <Button bsStyle="primary" bsSize="large">Bekijk het programma</Button>
            </Link>
          </Jumbotron>

          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Panel>
                <Panel.Heading>
                  <Panel.Title>
                    <Image src="assets/smartie.jpg" circle className="profile-pic" />
                    <h3>Smarties</h3>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  Onbegrijpelijk veel mensen hebben familiebetrekkingen, vrienden of kennissen te Amsterdam. Het is een verschijnsel dat ik eenvoudig toeschrijf aan de veelheid der inwoners van die hoofdstad. Ik had er voor een paar jaren nog een verre neef. Waar hij nu is, weet ik niet. Ik geloof dat hij naar de West gegaan is. Misschien heeft de een of ander van mijn lezers hem wel brieven meegegeven. In dat geval hebben zij een nauwgezette, maar onvriendelijke bezorger gehad, als uit de inhoud van deze weinige bladzijden waarschijnlijk duidelijk worden zal.
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Panel>
                <Panel.Heading>
                  <Panel.Title>
                    <Image src="assets/partner.jpg" circle className="profile-pic" />
                    <h3>Partners</h3>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  Inderdaad, ik ken vele mensen, die nogal ophebben met hun Amsterdamse neven, vooral als ze tot 'Lezers in Felix behoren, of als ze een rijtuig houden; maar ik heb dikwijls verbaasd gestaan over mijn verregaande koelheid omtrent de persoon van mijn neef Nurks; en niets verschrikkelijker, dan wanneer hij mij zaterdagmiddag per diligence een steen stond met een brief er aan, inhoudende dat hij (mits het weer goedbleef en er niet, maar dat kwam er nooit, het een of ander in de weg kwam) met mij de dag in de Haarlemmerhout zou komen doorbrengen; niet dat ik iets tegen het gemelde bos heb, maar wel tegen ZEd.
                </Panel.Body>
              </Panel>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Panel>
                <Panel.Heading>
                  <Panel.Title>
                    <Image src="assets/guest.jpg" circle className="profile-pic" />
                    <h3>Gasten</h3>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  Toch kon ik bijan overtuigd zijn, dat mijn beminnelijke neef Nurks, de eerste maal dat hij er mij mee zag, met de hatelijkste glimlach van de wereld en met een soort van ontevreden verbaasdheid zeggen zou: 'Wat een weergase gekke hoed heb jij op.' - Nu is het onbegrijpelijk moeielijk - schoon ik gaarne beken dat de een zich daar handiger in gedraagt dan de ander, en ik niet een van de gauwsten ben - nu is het onbegrijpelijk moeielijk, onder een dergelijke kritische verklaring omtrent uw hoed, een tamelijk figuur te blijven maken. Het in ernst voor uw hoed op te nemen, is wat al te gek. Het met een: h?, vind je dat?' af te laten lopen, verraadt volslagen gemis van tegenwoordigheid van geest.
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      )
    }
}
