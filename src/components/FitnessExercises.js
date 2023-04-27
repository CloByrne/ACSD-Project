// Denis Murray
import {useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ExerciseDisplay from './ExerciseDisplay';
import Modal from 'react-bootstrap/Modal';

function FitnessExercises () {

    const [buttonClicked, setButtonClicked] = useState(false);
    const [exerciseChosen, setExerciseChosen] = useState("");
    const [receivedExercises, setReceivedExercises] = useState([]);

    // Bootstrap Modal settings
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle Exercise Chosen
    
    async function GetExercises(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: {muscle: exerciseChosen},
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': '880fc9f306mshac2dc31075a9020p11af9bjsnab33e068fb58',
              'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            },
          };
          try {
              const response = await axios.request(options);
              console.log(response.data);
              console.log(exerciseChosen + " exercise")
              setReceivedExercises(response.data)
              
          } catch (error) {
              console.error(error);
          }
    }

    return (
        <div>
            <Container className="exercise-section">
                <p className="fitness-subtext">We have a huge collection of exercises available for you to browse. Whether you are looking to target a specific muscle group, or are looking for a general workout routine, we've got you covered!</p>
                <Row className="exercise-buttons">
                    <Col>
                        <button className="exercise-btn" onClick={function(event){setExerciseChosen(''); GetExercises(event); setButtonClicked(true); setShow(true)}}>
                            Browse some of our exercises
                        </button>
                    </Col>
                    {/* <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){setExerciseChosen('biceps'); GetExercises(event); setButtonClicked(true); setShow(true)}}>Arms</Button>
                    </Col>
                    <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){setExerciseChosen('glutes'); GetExercises(event); setButtonClicked(true); setShow(true)}}>Legs</Button>
                    </Col>
                    <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){setExerciseChosen('chest'); GetExercises(event); setButtonClicked(true); setShow(true)}}>Chest</Button>
                    </Col>
                    <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){setExerciseChosen('lower_back'); GetExercises(event); setButtonClicked(true); setShow(true)}}>Back</Button>
                    </Col> */}
                </Row>
            </Container>

           
            {/* Modal settings, xl sizing, outside click to close enabled */}
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Sample Exercises </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                    <Row className="exercise-box">
                        {
                        receivedExercises.map(function (i, index) {
                            return (
                                <ExerciseDisplay name={i.name} muscle={i.muscle} difficulty={i.difficulty} instructions={i.instructions} key={index}/>
                            )
                            })
                        }
                    </Row>
                    }
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            
            {
                
            }

        </div>
    )
}




export default FitnessExercises;