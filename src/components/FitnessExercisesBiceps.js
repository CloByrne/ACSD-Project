// Denis Murray
import {useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ExerciseDisplay from './ExerciseDisplay';
import Modal from 'react-bootstrap/Modal';

function FitnessExercisesBiceps () {
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
            params: {muscle: "biceps"},
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
            <h2 className='fitness-subheading'>Arms Exercises</h2>
            <p className="fitness-subtext">Arm exercises are an essential part of any comprehensive strength training routine, as they help develop and tone the muscles of the upper body, including the biceps, triceps, and forearms. By incorporating various arm exercises into your workout regimen, such as push-ups, dips, and cable curls, you can enhance your upper body strength and muscular endurance, while achieving a more defined physique. Arm exercises also help improve overall functional strength, making everyday tasks easier to perform.</p>
            <button value="biceps" className="exercise-btn" onClick={function(event){GetExercises(event); setShow(true)}}>
                Browse Biceps Exercises
            </button>
        
            {/* Modal settings, xl sizing, outside click to close enabled */}
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Arms Exercises </Modal.Title>
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


export default FitnessExercisesBiceps;