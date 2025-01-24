import { Container, Row, Col } from 'react-bootstrap';
import { NavBar } from '../components/NavBar';
import '../styles/css.css';
import CountryList from '../components/CountryList';

const Countries = () => {
    return (
        <Container className="containerStyle">
            <NavBar/>
            <CountryList/>
        </Container>
    );
};

export default Countries;