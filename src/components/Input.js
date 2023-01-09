import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Input = () => {

    const input = useSelector(state => state.input);
    const dispatch = useDispatch();
    const course = input.course;

    //const [course, setCourse] = useState('0');
    const [tdze, setTdze] = useState('0');
    const [altitude, setAltitude] = useState('0');
    const [windDir, setWindDir] = useState('0');
    const [windSpeed, setWindSpeed] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Course: </label>
                    <input
                        type="number"
                        required
                        value={course}
                        onChange={(e) => dispatch({type: 'COURSE', course: e.target.value})}
                    />
                    <label>°</label>
                </p>
                <p>
                    <label>Touchdown Zone Elevation (TDZE): </label>
                    <input
                        type="number"
                        required
                        value={tdze}
                        onChange={(e) => setTdze(e.target.value)}
                    />
                    <label>ft</label>
                </p>
                <p>
                    <label>Flight Altitude: </label>
                    <input
                        type="number"
                        required
                        value={altitude}
                        onChange={(e) => setAltitude(e.target.value)}
                    />
                    <label>ft</label>
                </p>
                <p>
                    <label>Wind Direction: </label>
                    <input
                        type="number"
                        required
                        value={windDir}
                        onChange={(e) => setWindDir(e.target.value)}
                    />
                    <label>°</label>
                </p>
                <p>
                    <label>Wind Speed: </label>
                    <input
                        type="number"
                        required
                        value={windSpeed}
                        onChange={(e) => setWindSpeed(e.target.value)}
                    />
                    <label>kn</label>
                </p>
            </form>
        </div> 
    );
}

export default Input;