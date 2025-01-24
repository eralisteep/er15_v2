import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { fetchCountryMedals } from '../api/countryAPI';
import { Container, Col } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import '../styles/css.css';

const MedalPage = () => {
    const [country, setCountry] = useState(null);
    const { name, medalType } = useParams(); 
    useEffect(() => {
        fetchCountryMedals(name)
            .then(data => setCountry(data))
            .catch(error => console.error(error));
    }, [name]);

    if (!country) {
        return <div>Загрузка...</div>;
    }

    const medalColumnTitle = {
        gold: 'GOLD',
        silver: 'SILVER',
        bronze: 'BRONZE',
    };

    const medalKey = medalType.toLowerCase();

    const totalMedals = country.disciplines.reduce((total, discipline) => {
        return total + discipline[medalKey];
    }, 0);

    return (
        <Container className="containerStyle">
            <NavBar/>
            <Col>
                <h1 className="h1">{country.name}</h1>
                <img className="flag1" src={`/images/flags/${country.name.replace(' ', '')}.png`} alt={country.name} />
            </Col>
            <Col className="totalMedalsStyle">
                <h5>{medalColumnTitle[medalType]} MEDALS</h5>
                <h1 className="h1">{totalMedals}</h1>
            </Col>
            <table className="tab">
                <tr className="table2">
                    <th><h5 className="tableChild1">DISCIPLINE</h5></th>
                    <th><h5 className="tableChild1">MEDALS</h5></th>
                </tr>
                {country.disciplines.map((discipline, index) => (
                    <tr key={index} className="table2">
                        <td><h5 className="g">{discipline.name}</h5></td>
                        <td><h5 className="s">{discipline[medalKey]}</h5></td>
                    </tr>
                ))}
            </table>
        </Container>
    );
};

export default MedalPage;