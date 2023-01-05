import { timerPath, timerTriangle } from "./styles";
import InfoText from "./InfoText";

function TimerPath ({x, y, text, align, rotate = 0}) {

    let textRotate;
    let yrot;
    let xrot;

    x = parseFloat(x);
    y = parseFloat(y);
    rotate = parseFloat(rotate);
    const convRotate = (rotate * Math.PI / 180);
    const adjacentLeg = Math.cos(convRotate) * 30;
    const oppositeLeg = Math.sin(convRotate) * 30;

    const distx = Math.sin(convRotate) - Math.cos(convRotate) + adjacentLeg / 2;
    const disty = Math.sin(convRotate) - Math.cos(convRotate) + oppositeLeg / 2;

    if(Math.abs(rotate) == 90){
        textRotate = 0; 
        yrot = (y + disty);
        xrot = (x + distx);
    } else {
        textRotate = rotate;
        yrot = - (x + distx) * Math.sin(convRotate) + (y + disty) * Math.cos(convRotate);
        xrot = (x + distx) * Math.cos(convRotate) + (y + disty) * Math.sin(convRotate);
    }

    const rotTrianglex1 = -1.5 * Math.cos(-convRotate) + -0.75 * Math.sin(-convRotate);
    const rotTriangley1 = 1.5 * Math.sin(-convRotate) + -0.75 * Math.cos(-convRotate);
    const rotTrianglex2 = 0 * Math.cos(-convRotate) + 1.5 * Math.sin(-convRotate);
    const rotTriangley2 = -0 * Math.sin(-convRotate) + 1.5 * Math.cos(-convRotate);

    return(
        <g>
            <path style={timerPath} d={`m ${x},${y} ${adjacentLeg},${oppositeLeg}`} />
            <path
                style={timerTriangle}
                d={`m ${x},${y} ${-rotTrianglex1},${-rotTriangley1} ${-rotTrianglex2},${-rotTriangley2} z`} />
            <path
                style={timerTriangle}
                d={`m ${x + adjacentLeg},${y + oppositeLeg} ${rotTrianglex1},${rotTriangley1} ${rotTrianglex2},${rotTriangley2} z`} />                
            <InfoText x={xrot} y={yrot} text={text} align={align} rotate={textRotate} />
        </g>
    );
}

export default TimerPath;