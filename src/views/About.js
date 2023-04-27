import '../styles/Navbar.css';
import '../styles/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutUsBlurb from '../components/AboutUsBlurb';

function About() {
    return (
        <div id="about-view">
            <div id="showcase" className="about-container">
                <div className="about-text">
                    <h1>About Us</h1>
                    <div className="about-sub-text">
                        <h3>Learn about why we started out journey towards delivering best in class fitness options for people of all kinds</h3>
                    </div>
                </div>
            </div>

            <Container fluid >
                <Row  id="about-us-section" >
                    <Col className="blurb" xs={12} lg={7}>
                        <AboutUsBlurb />
                    </Col>
                    <Col className="blurb-pic" xs={12} lg={5}>
                        <div></div>
                    </Col>


                </Row>




            </Container>
            <div className="endDiv"></div>

        </div>
    )
}

export default About;