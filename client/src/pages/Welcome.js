import React from 'react';
import { Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {useHistory} from "react-router-dom"
import { COUNTRIES_ROUTE, DISCIPLINES_ROUTE } from '../utils/consts';
import '../styles/css.css';

const Shop = observer(() => {
    const history = useHistory()
    return (
        <Container className="containerStyle">
            <Row>
                <img src='/images/logo-white.png' alt='paris' className="logoStyle" />
            </Row>
            <Row>
                <img src='/images/frame.png' alt='paris' className="frameStyle" />
            </Row>
            <Row>
                <div className="icoCountriesStyle" onClick={() => history.push(COUNTRIES_ROUTE + '/')}>
                <img src='/images/ico-countries.svg' alt='paris' />
                Countries
                </div>
            </Row>
            <Row>
                <div className="icoDisciplinesStyle" onClick={() => history.push(DISCIPLINES_ROUTE + '/')}>
                <img src='/images/ico-disciplines.svg' alt='paris' />
                Disciplines
                </div>
            </Row>
        </Container>
    );
});

export default Shop;
