const inputDataReducer = (state = {
    course: 0,
    tdze: 0,
    altitude: 0,
    windDirDeg: 0,
    windSpeed: 0
}, action) => {
    switch(action.type){
        case 'COURSE':
            return state = {
                course: action.payload,
                tdze: 0,
                altitude: 0,
                windDirDeg: 0,
                windSpeed: 0
            };
        default:
            return state;
    }
}

export default inputDataReducer;