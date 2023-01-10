import { useDispatch, useSelector } from "react-redux";

const Input = () => {

    const input = useSelector(state => state.input);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div class="card">
            <div class="card-header fs-5 fw-bold">
                Circling Approach
            </div>
            <div class="card-body">
                <form onSubmit={handleSubmit}>
                    <div class="input-group mb-3">
                        <label class="form-label">Course: </label>
                        <div class="input-group">
                            <input
                                class="form-control"
                                type="number"
                                required
                                value={input.course}
                                onChange={(e) => dispatch({type: 'COURSE', payload: e.target.value})} />
                            <label class="input-group-text">°</label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <label class="form-label">Touchdown Zone Elevation (TDZE): </label>
                        <div class="input-group">
                            <input
                                class="form-control"
                                type="number"
                                required
                                value={input.tdze}
                                onChange={(e) => dispatch({type:'TDZE', payload: e.target.value})} />
                            <label class="input-group-text">ft</label>
                        </div> 
                    </div>
                    <div class="input-group mb-3">     
                        <label class="form-label">Altitude/MSA: </label>
                        <div class="input-group">
                            <input
                                class="form-control"
                                type="number"
                                required
                                value={input.altitude}
                                onChange={(e) => dispatch({type:'ALTITUDE', payload: e.target.value})} />
                            <label class="input-group-text">ft</label>
                        </div>
                    </div>     
                    <div class="input-group mb-3">
                        <label class="form-label">Wind Direction: </label>
                        <div class="input-group">
                            <input
                                class="form-control"
                                type="number"
                                required
                                value={input.windDirDeg}
                                onChange={(e) => dispatch({type:'WINDDIR', payload: e.target.value})} />
                            <label class="input-group-text">°</label>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <label class="form-label">Wind Speed: </label>
                        <div class="input-group">
                            <input
                                class="form-control"
                                type="number"
                                required
                                value={input.windSpeed}
                                onChange={(e) => dispatch({type:'WINDSPEED', payload: e.target.value})} />
                            <label class="input-group-text">kts</label>
                        </div>
                    </div>
                    <button 
                        type="button"
                        class="btn btn-primary"
                        onClick={() => dispatch({type:'SWITCHVIEW'})}
                    >
                        Switch Direction
                    </button>       
                </form>
            </div>
        </div> 
    );
}

export default Input;