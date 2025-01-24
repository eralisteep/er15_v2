import React, { useEffect, useState } from 'react'; 
import { useHistory,useParams } from 'react-router-dom';
import { fetchDisciplines } from '../api/countryAPI'; // изменено на fetchDisciplines
import { Container, Col } from 'react-bootstrap'; 
import { DISCIPLINES_ROUTE } from '../utils/consts';
import { NavBar } from '../components/NavBar';
import '../styles/css.css';

const DisciplinePage = () => {
    const [countries, setCountries] = useState([]); // Массив стран
    const { name } = useParams(); // Получение имени дисциплины из URL
    const history = useHistory();

    useEffect(() => {
        console.log("Fetching data for discipline:", name);
        if (name) {
            fetchDisciplines(name) 
                .then(data => setCountries(data)) 
                .catch(error => console.error("Error fetching disciplines:", error));
        }
    }, [name]);

    const handleMedalClick = (name, countryName) => {
        history.push(DISCIPLINES_ROUTE + `/${name}/${countryName}`);
    };

    if (countries.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="containerStyle">
            <NavBar/>
            <Col className='p-0'>
                <h1 className="h1">{name}</h1>
            </Col>

            <Col>
                <table className="table">
                    <thead>
                        <tr className="tableRow">
                            <th className="tableHeader">Country</th>
                            <th className="tableHeader">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country, index) => (
                            <tr key={index} className="tableRow">
                                <td className="tableCountry" onClick={() => handleMedalClick(name,country.country)}>{country.country}</td>
                                <td className="tableCell">
                                    {country.discipline.gold + country.discipline.silver + country.discipline.bronze}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Col>
        </Container>
    );
};

export default DisciplinePage;