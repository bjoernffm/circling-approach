export const updateCourseInput = (course = 0) => {
    return {
        type: 'COURSE',
        payload: course
    }
}

export const updateTdzeInput = (tdze = 0) => {
    return {
        type: 'TDZE',
        payload: tdze
    }
}

export const updateAltitudeInput = (altitude = 0) => {
    return {
        type: 'ALTITUDE',
        payload: altitude
    }
}

export const updateWindDirInput = (windDir = 0) => {
    return {
        type: 'WINDDIR',
        payload: windDir
    }
}

export const updateWindSpeedInput = (windSpeed = 0) => {
    return {
        type: 'WINDSPEED',
        payload: windSpeed
    }
}

export const updateView = () => {
    return {
        type: 'SWITCHVIEW'
    }
}