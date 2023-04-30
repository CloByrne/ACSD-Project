// Denis Murray
import {useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ExerciseDisplay from './ExerciseDisplay';
import Modal from 'react-bootstrap/Modal';

function FitnessExercisesLegs () {
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
            params: {muscle: "calves"},
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
            <h2 className='fitness-subheading'>Legs Exercises</h2>
            <p className="fitness-subtext">Leg exercises are a vital component of any comprehensive fitness program, as they target the large muscle groups of the lower body, including the quads, hamstrings, glutes, and calves. Strong leg muscles not only support everyday movements like walking and climbing stairs, but also improve athletic performance and reduce the risk of injury. Incorporating leg exercises into your workout routine, such as squats, lunges, deadlifts, and calf raises, can help you build greater leg strength and power, while also improving your overall balance and stability.</p>
            <button value="biceps" className="exercise-btn" onClick={function(event){GetExercises(event); setShow(true)}}>
                Browse Legs Exercises
            </button>
        
            {/* Modal settings, xl sizing, outside click to close enabled */}
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Legs Exercises </Modal.Title>
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


export default FitnessExercisesLegs;