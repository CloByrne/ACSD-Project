// Denis Murray
import '../styles/Navbar.css';
import '../styles/Fitness.css';
import FitnessExercises from '../components/FitnessExercises'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleMap from '../components/Map';
import OpeningHours from '../components/OpeningHours';

function Fitness() {
    return (
        <div>
            <div className="fitness-hero">
                <div className="fitness-container">
                    <div className="fitness-text">
                        <h1>Welcome to the Fitness page</h1>
                        <div className="fitness-sub-text">
                            <p>To get you started, click the buttons below to receive a list of exercises to target specific muscle groups</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exercises-container secondary-text">
                <h2>What muscle groups do you want to target?</h2>
                <FitnessExercises />
            </div>
            <Container className="fitness-bootstrap-container">
                <Row>
                    <Col sm={12} md={12} className="secondary-text title" >
                        <h2>Or visit us in person for an session with our trainers!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={5} id="opening-hours-box">
                        <OpeningHours />
                    </Col>
                    <Col sm={12} md={7}>
                        <div id="map">
                            <SimpleMap />
                        </div>
        
                    </Col>
                </Row>
            </Container>
            <div className="endDiv"></div>
        </div>
        
    )
}

export default Fitness;