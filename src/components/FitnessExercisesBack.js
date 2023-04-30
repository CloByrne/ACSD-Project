// Denis Murray
import {useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ExerciseDisplay from './ExerciseDisplay';
import Modal from 'react-bootstrap/Modal';

function FitnessExercisesBack () {
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
            params: {muscle: "lower_back"},
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
            <h2 className='fitness-subheading'>Back Exercises</h2>
            <p className="fitness-subtext">Back exercises are an integral part of any strength training program, as they target the muscles of the upper, mid, and lower back, including the lats, traps, and erector spinae. Strong back muscles play a critical role in maintaining good posture, supporting the spine, and reducing the risk of injury. By incorporating various back exercises into your workout routine, such as pull-ups, rows, and hyperextensions, you can improve your upper body strength and posture, while also achieving a more defined back and reducing the risk of back pain.</p>
            <button value="biceps" className="exercise-btn" onClick={function(event){GetExercises(event); setShow(true)}}>
                Browse Biceps Exercises
            </button>
        
            {/* Modal settings, xl sizing, outside click to close enabled */}
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Back Exercises </Modal.Title>
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


export default FitnessExercisesBack;