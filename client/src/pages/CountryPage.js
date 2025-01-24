
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCountryMedals } from '../api/countryAPI';
import { Container, Col, Card, Row } from 'react-bootstrap';
import { COUNTRIES_ROUTE } from '../utils/consts';
import { NavBar } from '../components/NavBar';

const CountryPage = () => {
    const [country, setCountry] = useState(null);
    const { name } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchCountryMedals(name)
            .then(data => setCountry(data))
            .catch(error => console.error(error));
    }, [name]);

    const handleMedalClick = (name,medalType) => {
        history.push(COUNTRIES_ROUTE + `/${name}/${medalType}` );
    };

    if (!country) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="containerStyle">
            <NavBar/>
            <Col>
            <h1 className="h1">{country.name}</h1>
            <img className="flag1" src={`/images/flags/${country.name.replace(' ', '')}.png`} alt={country.name} />
            </Col>
            <Col className="table">
                <Row className="tableRow">
                    <h5 className="tableChild2">GOLD</h5>
                    <h5 className="tableChild2">SILVER</h5>
                    <h5 className="tableChild2">BRONZE</h5>
                    <h5 className="tableChild2">TOTAL</h5>
                </Row >
                <Row className="tableRow">
                    <h5 className="go">{country.medals.gold}</h5>
                    <h5 className="si">{country.medals.silver}</h5>
                    <h5 className="b">{country.medals.bronze}</h5>
                    <h5 className="t">{country.medals.gold + country.medals.silver + country.medals.bronze}</h5>
                </Row >
            </Col>


            <Col className="tab">
                <Col md={4}>
                    <Card onClick={() => handleMedalClick(country.name,'gold')} className="i">
                        <h5><img className="medal" src='/images/medals/gold.png' alt='gold'></img>Medals</h5>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card onClick={() => handleMedalClick(country.name,'silver')}  className="i">
                        <h5><img className="medal" src='/images/medals/silver.png' alt='silver'></img>Medals</h5>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card onClick={() => handleMedalClick(country.name,'bronze')} className="i">
                        <h5><img className="medal" src='/images/medals/bronze.png' alt='bronze'></img>Medals</h5>
                    </Card>
                </Col>
            </Col>
        </Container>
    );
};

export default CountryPage;