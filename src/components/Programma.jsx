import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Col, Image } from 'react-bootstrap'
import './Programma.css'

export default class Programma extends Component {
    render() {
      return (
        <div>
          <Image src="assets/program.jpg" className="header-image" />
          <Grid>
            <Col xs={12} sm={8} smOffset={2}>
              <Image src="assets/witek.png" className="about-profile-pic" />
              <h2>Witek</h2>
              <p>
                Ik ben makelaar in koffi, en woon op de Lauriergracht No 37. Het is mijn gewoonte niet, romans te schrijven, of zulke dingen, en het heeft dan ook lang geduurd, voor ik er toe overging een paar riem papier extra te bestellen, en het werk aan te vangen, dat gij, lieve lezer, zoâven in de hand hebt genomen, en dat ge lezen moet als ge makelaar in koffie zijt, of als ge wat anders zijt. Niet alleen dat ik nooit iets schreef wat naar een roman geleek, maar ik houd er zelfs niet van, iets dergelijks te lezen, omdat ik een man van zaken ben.

                Sedert jaren vraag ik mij af, waartoe zulke dingen dienen, en ik sta verbaasd over de onbeschaamdheid, waarmee een dichter of romanverteller u iets op de mouw durft spelden, dat nooit gebeurd is, en meestal niet gebeuren kan.Als ik in mijn vak -- ik ben makelaar in koffie, en woon op de Lauriergracht No 37 -- aan een principaal -- een principaal is iemand die koffie verkoopt -- een opgave deed, waarin maar een klein gedeelte der onwaarheden voorkwam, die in gedichten en romans de hoofdzaak uitmaken, zou hij terstond Busselinck & Waterman nemen.
              </p>
            </Col>
          </Grid>
        </div>
      )
    }
}
