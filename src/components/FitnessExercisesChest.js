// Denis Murray
import {useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ExerciseDisplay from './ExerciseDisplay';
import Modal from 'react-bootstrap/Modal';

function FitnessExercisesChest () {
    const [exerciseChosen, setExerciseChosen] = useState("");
    const [receivedExercises, setReceivedExercises] = useState([]);

    // Bootstrap Modal settings
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function GetExercises(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
            params: {muscle: "chest"},
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
            <h2 className='fitness-subheading'>Chest Exercises</h2>
            <p className="fitness-subtext">Chest exercises are a crucial component of a well-rounded fitness regimen, as they help strengthen and tone the chest, shoulder, and tricep muscles. By incorporating various chest exercises into your workout routine, you can improve your upper body strength and achieve a more defined physique. Some common chest exercises include movements that involve pressing, pulling, and squeezing the chest muscles. Chest exercises are also fun and a easy area to target.</p>
            <button value="biceps" className="exercise-btn" onClick={function(event){GetExercises(event); setShow(true)}}>
                Browse Chest Exercises
            </button>
        
            {/* Modal settings, xl sizing, outside click to close enabled */}
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Chest Exercises </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                    <Row className="">
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
            
        </div>
    )
}


export default FitnessExercisesChest;