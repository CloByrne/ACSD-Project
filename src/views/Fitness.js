// Denis Murray
import '../styles/Navbar.css';
import '../styles/Fitness.css';
import FitnessExercisesBiceps from '../components/FitnessExercisesBiceps'
import FitnessExercisesChest from '../components/FitnessExercisesChest'
import FitnessExercisesLegs from '../components/FitnessExercisesLegs';
import FitnessExercisesBack from '../components/FitnessExercisesBack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Fitness() {
    return (
        <div id="fitness-view">
            <div className="fitness-hero">
                <div className="fitness-container">
                    <div className="fitness-text">
                        <h1>Fitness</h1>
                        <div className="fitness-subtext">
                            <p>To get you started, click the buttons below to receive a list of exercises to target specific muscle groups</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="exercises-container secondary-text">
                <h2>What muscle groups do you want to target?</h2>
                <FitnessExercisesBiceps/>
            </div> */}

            <Container fluid className="fitness-exercises-container secondary-text">
                <Row >
                    <Col xs={12} md={12} lg={6} className="exercise-box">
                        <FitnessExercisesBiceps />
                    </Col>
                    <Col xs={12} md={12} lg={6} className="exercise-box">
                        <FitnessExercisesChest />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={6} className="exercise-box">
                        <FitnessExercisesLegs />
                    </Col>
                    <Col xs={12} md={12} lg={6} className="exercise-box">
                        <FitnessExercisesBack />
                    </Col>
                    
                </Row>





            </Container>
            
            <div className="endDiv"></div>
        </div>
        
    )
}

export default Fitness;