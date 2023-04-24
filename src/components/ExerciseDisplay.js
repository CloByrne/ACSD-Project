import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ExerciseDisplay (props) {
    return (
            <Col xs={12} sm={6} md={4}>
                <h2>{props.name}</h2>
                <h4>{props.muscle}</h4>
                <h5>{props.difficulty}</h5>
                <p>{props.instructions}</p>
            </Col>  
    )
}



export default ExerciseDisplay;