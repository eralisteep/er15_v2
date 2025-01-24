import React, { useEffect, useState } from 'react';  
import { useParams } from 'react-router-dom';
import { fetchDesciplinesData } from '../api/countryAPI'; 
import { Container, Col } from 'react-bootstrap'; 
import '../styles/css.css';
import { NavBar } from '../components/NavBar';

const DisciplinePage = () => {
    const [disciplineData, setDisciplineData] = useState(null);
    const { disciplineName, countryName } = useParams();

    useEffect(() => {
        console.log("Fetching data for discipline:", disciplineName, "and country:", countryName);
        if (disciplineName && countryName) {
            fetchDesciplinesData(disciplineName, countryName)
                .then(data => setDisciplineData(data))
                .catch(error => console.error("Error fetching disciplines data:", error));
        }
    }, [disciplineName, countryName]);

    if (!disciplineData) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="containerStyle">
            <NavBar/>
            <Col className="p-0">
                <h1 className="h1">{disciplineName}</h1>
                <img
                    className="discipline"
                    src={`/images/disciplines/${disciplineName}.svg`}
                    alt={disciplineName}
                />
                <h2 className="h1">{countryName}</h2>
            </Col>

            <Col>
                <table className="table">
                    <thead>
                        <tr className="tableRow">
                            <th className="tableHeader">GOLD</th>
                            <th className="tableHeader">SILVER</th>
                            <th className="tableHeader">BRONZE</th>
                            <th className="tableHeader">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tableRow">
                            <td className="tableCell">{disciplineData.discipline.gold}</td>
                            <td className="tableCell">{disciplineData.discipline.silver}</td>
                            <td className="tableCell">{disciplineData.discipline.bronze}</td>
                            <td className="tableCell">{disciplineData.discipline.gold + disciplineData.discipline.silver + disciplineData.discipline.bronze}</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Container>
    );
};

export default DisciplinePage;
