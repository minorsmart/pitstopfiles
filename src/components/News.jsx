import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import './News.css'

export default class News extends Component {
    render() {
      return (
        <div>
        <Image src="assets/news.jpg" className="header-image" />
          <Grid>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <h2>Nieuws</h2>
                <p>
                  Onder die steden, welke vanouds aan de grafelijke kroon van Holland gelijk zoovele edelgesteenten flonkerden, en wier macht en rijkdom tot een hechten steun verstrekten aan des Landsheer gezag, was Haarlem, gelijk genoeg bekend is, een der voornaamste. Haar ouderdom verloor zich in den nacht der tijden: ’t zij, dat men haar, met Boxhoorn voor de vroege verblijfplaats der Herulen houde en den naam Haarlem, als een verbastering van Herulen-heim aanmerke: ’t zij, dat men dien, met Langendijk, van den Noorman Hariald afleide: ’t zij, dat men met de oude landskronieken veronderstelle, dat zekere Koning of Vorst, Lem genaamd aan de door hem gestichte stad de benaming van Heer Lems stad, naderhand Haarlem hebbe achtergelaten, of met een lateren taalkenner eenvoudig aanneme, dat het woord harel dezelfde beteekenis hebbe als hard, en door harelheim een harde grond te verstaan zijn – genoeg is het, de juist de onzekerheid van dien naamoorsprong de aloudheid der plaats zelve aanduidt.

                  Aan den over eener rivier gebouwd, waarvan zij zich als van twee armen bedienen kon, om, aan de eene zijde, het Haarlemmermeer en de daarom gelegen landen, aan de andere hij IJ, en door het IJ, de Zuiderzee te bereiken, had zij van deze gunstige ligging reeds vroeg partij getrokken, om een handel te drijven, die, schoon zich zelden verder uitstrekkende dan de gewesten, welke om die binnenzeeën gelegen waren, haar niettemin gelegenheid gaf, om de voortbrengselen van hare door heel Europa beroemde lakenweverijen te slijten en daardoor aan hare ingezetenen welvaart en aanzien te verschaffen: terwijl zij in hare bierbrouwerijen, die de bewoners der omliggende landstreken met den toenmaals zoo algemeenen drank voorzagen, een niet min voordeeligen tak van bestaan gevonden had, vooral, sedert door een grafelijk besluit het verkoopen van vreemd bier binnen Holland verboden en aan Haarlem alzoo een soort van alleenhandel in het graafschap vergund was.

                  De bekoorlijke omtrek, die zich niet alleen door een in Holland zoo zeldzame heuvelachtigheid onderscheidde, maar ook aan den adel de heerlijkste gelegenheid aanbood om in een klein bestek de rijkste genoegens van jacht en visscherij te smaken, had in de nabijheid der stad een immer toenemend aantal van aanzienlijke sloten en jachthuizen doen verrijzen, wier adellijke bewoners in een schier ongestoorde eensgezindheid met de poorters levende, het hunne  toebrachten om den bloei der stad te bevorderen. En opdat geen roem aan Haarlem ontbreken zou de Graven zelve kwamen meermalen zijn vest bezoeken, waar zij alsdan door hun prachtige hofhouding, door hun mildheid, door het vieren van ridderlijke feesten, welvaart en genoegen onder de ingezetenen verspreidden.
                </p>
              </Col>
              <Col xs={12} sm={4} className="sidebar-section">
                <Image src="assets/person-laptop.jpg" className="profile-pic" />
                <p>
                  Onder die steden, welke vanouds aan de grafelijke kroon van Holland gelijk zoovele edelgesteenten flonkerden, en wier macht en rijkdom tot een hechten steun verstrekten aan des Landsheer gezag, was Haarlem, gelijk genoeg bekend is, een der voornaamste. Haar ouderdom verloor zich in den nacht der tijden: ’t zij, dat men haar, met Boxhoorn voor de vroege verblijfplaats der Herulen houde en den naam Haarlem, als een verbastering van Herulen-heim aanmerke: ’t zij, dat men dien, met Langendijk, van den Noorman Hariald afleide: ’t zij, dat men met de oude landskronieken veronderstelle, dat zekere Koning of Vorst, Lem genaamd aan de door hem gestichte stad de benaming van Heer Lems stad, naderhand Haarlem hebbe achtergelaten, of met een lateren taalkenner eenvoudig aanneme, dat het woord harel dezelfde beteekenis hebbe als hard, en door harelheim een harde grond te verstaan zijn – genoeg is het, de juist de onzekerheid van dien naamoorsprong de aloudheid der plaats zelve aanduidt.

                  Aan den over eener rivier gebouwd, waarvan zij zich als van twee armen bedienen kon, om, aan de eene zijde, het Haarlemmermeer en de daarom gelegen landen, aan de andere hij IJ, en door het IJ, de Zuiderzee te bereiken, had zij van deze gunstige ligging reeds vroeg partij getrokken, om een handel te drijven, die, schoon zich zelden verder uitstrekkende dan de gewesten, welke om die binnenzeeën gelegen waren, haar niettemin gelegenheid gaf, om de voortbrengselen van hare door heel Europa beroemde lakenweverijen te slijten en daardoor aan hare ingezetenen welvaart en aanzien te verschaffen: terwijl zij in hare bierbrouwerijen, die de bewoners der omliggende landstreken met den toenmaals zoo algemeenen drank voorzagen, een niet min voordeeligen tak van bestaan gevonden had, vooral, sedert door een grafelijk besluit het verkoopen van vreemd bier binnen Holland verboden en aan Haarlem alzoo een soort van alleenhandel in het graafschap vergund was.

                  De bekoorlijke omtrek, die zich niet alleen door een in Holland zoo zeldzame heuvelachtigheid onderscheidde, maar ook aan den adel de heerlijkste gelegenheid aanbood om in een klein bestek de rijkste genoegens van jacht en visscherij te smaken, had in de nabijheid der stad een immer toenemend aantal van aanzienlijke sloten en jachthuizen doen verrijzen, wier adellijke bewoners in een schier ongestoorde eensgezindheid met de poorters levende, het hunne  toebrachten om den bloei der stad te bevorderen. En opdat geen roem aan Haarlem ontbreken zou de Graven zelve kwamen meermalen zijn vest bezoeken, waar zij alsdan door hun prachtige hofhouding, door hun mildheid, door het vieren van ridderlijke feesten, welvaart en genoegen onder de ingezetenen verspreidden.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    }
}
