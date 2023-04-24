// Denis Murray
import {useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ExerciseDisplay from './ExerciseDisplay';

function FitnessExercises () {

    const [buttonClicked, setButtonClicked] = useState(false);
    const [exerciseChosen, setExerciseChosen] = useState('');
    const [receivedExercises, setReceivedExercises] = useState([]);

    async function GetExercises(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': '880fc9f306mshac2dc31075a9020p11af9bjsnab33e068fb58',
              'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
            }
          };
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setReceivedExercises(response.data)
              
          } catch (error) {
              console.error(error);
          }
    }

    return (
        <div>
            <Container className="exercise-section">
                Widths can be adjusted using different sizes
                <Row className="exercise-buttons">
                    <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){GetExercises(event); setExerciseChosen('biceps'); setButtonClicked(true)}}>Biceps</Button>
                    </Col>
                    <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){GetExercises(event)}}>Triceps</Button>
                    </Col>
                    <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){GetExercises(event)}}>Biceps</Button>
                    </Col>
                    <Col xs={4} md={3}>
                        <Button variant="secondary" onClick={function(event){GetExercises(event)}}>Biceps</Button>
                    </Col>
                </Row>
            </Container>
            {
                <Row className="exercise-box">{
                    receivedExercises.map(function (i, index) {
                        return (
                            <ExerciseDisplay name={i.name} muscle={i.muscle} difficulty={i.difficulty} instructions={i.instructions} key={index}/>
                        )
                     })
                    }
                </Row>
            }
            
            
            





        </div>
    )
}




export default FitnessExercises;