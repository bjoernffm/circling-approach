const initialState = {
    course: 0,
    tdze: 0,
    altitude: 0,
    windDirDeg: 0,
    windSpeed: 0
};

const inputDataReducer = (state = initialState, action) => {
    switch(action.type){
        case 'COURSE':  
            return {
                ...state,
                course: action.payload
            };
        case 'TDZE':  
        return {
            ...state,
            tdze: action.payload
        };
        case 'ALTITUDE':  
        return {
            ...state,
            altitude: action.payload
        };
        case 'WINDDIR':  
        return {
            ...state,
            windDirDeg: action.payload
        };
        case 'WINDSPEED':  
        return {
            ...state,
            windSpeed: action.payload
        };
        default:
            return state;
    }
}

export default inputDataReducer;