import { mainTextStyle } from "../styles";

function formatCourse(course) {
    
    while(course < 0) {
        course += 360
    }

    while(course > 360) {
        course -= 360
    }

    if(course < 100) {
        course = "0" + course;
    }
    if(course < 10) {
        course = "0" + course;
    }
    return course;
}

const alignToAnchor = {
    start: "start",
    center: "middle",
    end: "end"
}

function CourseText({x, y, course, align = "start", rotationDeg="0"}) {
    return (
        <text xmlSpace="preserve" style={mainTextStyle} x={x} y={y} transform={"rotate("+rotationDeg+")"}>
            <tspan style={{fontWeight:"bold", textAlign: align, textAnchor: alignToAnchor[align]}}>
                {formatCourse(course)}°
            </tspan>
        </text>
    );
}

export default CourseText;
