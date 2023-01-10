import { useDispatch, useSelector } from "react-redux";

const Input = () => {

    const input = useSelector(state => state.input);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className="card">
            <div className="card-header fs-5 fw-bold">
                Circling Approach
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <label className="form-label">Course: </label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="number"
                                required
                                value={input.course}
                                onChange={(e) => dispatch({type: 'COURSE', payload: e.target.value})} />
                            <label className="input-group-text">°</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <label className="form-label">Touchdown Zone Elevation (TDZE): </label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="number"
                                required
                                value={input.tdze}
                                onChange={(e) => dispatch({type:'TDZE', payload: e.target.value})} />
                            <label className="input-group-text">ft</label>
                        </div> 
                    </div>
                    <div className="input-group mb-3">     
                        <label className="form-label">Altitude/MSA: </label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="number"
                                required
                                value={input.altitude}
                                onChange={(e) => dispatch({type:'ALTITUDE', payload: e.target.value})} />
                            <label className="input-group-text">ft</label>
                        </div>
                    </div>     
                    <div className="input-group mb-3">
                        <label className="form-label">Wind Direction: </label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="number"
                                required
                                value={input.windDirDeg}
                                onChange={(e) => dispatch({type:'WINDDIR', payload: e.target.value})} />
                            <label className="input-group-text">°</label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <label className="form-label">Wind Speed: </label>
                        <div className="input-group">
                            <input
                                className="form-control"
                                type="number"
                                required
                                value={input.windSpeed}
                                onChange={(e) => dispatch({type:'WINDSPEED', payload: e.target.value})} />
                            <label className="input-group-text">kts</label>
                        </div>
                    </div>
                    <button 
                        type="button"
                        className="btn btn-primary"
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