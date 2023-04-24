// Denis Murray
import '../styles/Navbar.css';
import '../styles/Fitness.css';
import FitnessExercises from '../components/FitnessExercises'

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
        </div>
    )
}

export default Fitness;