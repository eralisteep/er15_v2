import { Row } from "react-bootstrap";

const imgStyle = {
    display: 'block',
};

const prev = {
    ...imgStyle,
    top: '15px',
    left: '10px',
    margin:"30px"
};

const logo = {
    ...imgStyle,
    top: '15px',
    left: '150px',
    margin:"15px",
    marginLeft:"71px",
    height:"57px",
};


const handlePrevClick = () => {
    window.history.back();
};

const NavBar = () => {
    return (
        <Row >
            <img style={prev} src='/images/ico-prev.svg' alt='paris' onClick={handlePrevClick}/>
            <img style={logo} src='/images/logo-sm-white.png' alt='paris' />
        </Row>
        );
    };
export {NavBar}