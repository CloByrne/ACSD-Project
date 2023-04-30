import Col from 'react-bootstrap/Col';

function ExerciseDisplay (props) {
    return (
            <Col className="individual-exercises" xs={12} xl={6}>
                <h2>{props.name}</h2>
                <h4>{props.muscle.toUpperCase()}</h4>
                <h5>Difficulty Level: {props.difficulty.toUpperCase()}</h5>
                <p>{props.instructions}</p>
            </Col>  
    )
}



export default ExerciseDisplay;