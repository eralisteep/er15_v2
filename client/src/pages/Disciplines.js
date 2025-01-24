import { Container } from 'react-bootstrap';
import { DisciplineList } from '../components/DisciplineList';
import { NavBar } from '../components/NavBar';
import '../styles/css.css';

const Disciplines = () => {
    return (
        <Container className="containerStyle">
            <NavBar/>
            <h1 className="h1">Disciplines</h1>
            <DisciplineList/>
        </Container>
    );
};

export default Disciplines;