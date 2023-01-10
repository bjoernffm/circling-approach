import { useDispatch, useSelector } from "react-redux";

const Input = () => {

    const input = useSelector(state => state.input);
    const dispatch = useDispatch();

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
                        value={input.course}
                        onChange={(e) => dispatch({type: 'COURSE', payload: e.target.value})}
                    />
                    <label>°</label>
                </p>
                <p>
                    <label>Touchdown Zone Elevation (TDZE): </label>
                    <input
                        type="number"
                        required
                        value={input.tdze}
                        onChange={(e) => dispatch({type:'TDZE', payload: e.target.value})}
                    />
                    <label>ft</label>
                </p>
                <p>
                    <label>Flight Altitude: </label>
                    <input
                        type="number"
                        required
                        value={input.altitude}
                        onChange={(e) => dispatch({type:'ALTITUDE', payload: e.target.value})}
                    />
                    <label>ft</label>
                </p>
                <p>
                    <label>Wind Direction: </label>
                    <input
                        type="number"
                        required
                        value={input.windDirDeg}
                        onChange={(e) => dispatch({type:'WINDDIR', payload: e.target.value})}
                    />
                    <label>°</label>
                </p>
                <p>
                    <label>Wind Speed: </label>
                    <input
                        type="number"
                        required
                        value={input.windSpeed}
                        onChange={(e) => dispatch({type:'WINDSPEED', payload: e.target.value})}
                    />
                    <label>kn</label>
                </p>
                <p>
                    <button 
                        type="button"
                        class="btn btn-primary"
                        onClick={() => dispatch({type:'SWITCHVIEW'})}
                    >
                        Switch View
                    </button>
                </p>
            </form>
        </div> 
    );
}

export default Input;