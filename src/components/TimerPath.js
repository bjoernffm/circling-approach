import { timerPath, timerTriangle } from "../styles";
import InfoText from "./InfoText";

function TimerPath ({x, y, text, align, rotationDeg = 0, textPlacement}) 
{
    const calcTextPosX = (rotationRad, textOffsetX) => {
        return (x + textOffsetX) * Math.cos(-rotationRad) - (y + textOffsetY) * Math.sin(-rotationRad);
    }

    const calcTextPosY = (rotationRad, textOffsetY) => {
        return (x + textOffsetX) * Math.sin(-rotationRad) + (y + textOffsetY) * Math.cos(-rotationRad);
    }

    const convDegToRad = (rotationDeg) => {
       return (rotationDeg * Math.PI / 180);
    }

    x = parseFloat(x);
    y = parseFloat(y);
    rotationDeg = parseFloat(rotationDeg);

    const rotationRad = convDegToRad(rotationDeg);
    const adjacentLeg = Math.cos(rotationRad) * 30;
    const oppositeLeg = Math.sin(rotationRad) * 30;
    let textOffsetX = Math.sin(rotationRad) - Math.cos(rotationRad) + adjacentLeg / 2;
    const textOffsetY = Math.sin(rotationRad) + Math.cos(rotationRad) + oppositeLeg / 2;

    if(textPlacement === "right"){
        textOffsetX = -textOffsetX;
    }

    let textRotate = 0;
    let textPosX = (x + textOffsetX);
    let textPosY = (y + textOffsetY);

    if(Math.abs(rotationDeg) !== 90){
        if(Math.abs(rotationDeg) < 90){
            textRotate = rotationDeg;
            textPosX = calcTextPosX(rotationRad, textOffsetX);
            textPosY = calcTextPosY(rotationRad, textOffsetY);
        } else if(rotationDeg < -90) {
            textRotate = rotationDeg + 180;
            textPosX = -calcTextPosX(rotationRad, textOffsetX);
            textPosY = -calcTextPosY(rotationRad, textOffsetY);
        } else {
            textRotate = rotationDeg - 180;
            textPosX = -calcTextPosX(rotationRad, textOffsetX);
            textPosY = -calcTextPosY(rotationRad, textOffsetY);
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
    const triangleX1 = -1.5 * Math.cos(-rotationRad) + -0.75 * Math.sin(-rotationRad);
    const triangleY1 = 1.5 * Math.sin(-rotationRad) + -0.75 * Math.cos(-rotationRad);
    const triangleX2 = 0 * Math.cos(-rotationRad) + 1.5 * Math.sin(-rotationRad);
    const triangleY2 = -0 * Math.sin(-rotationRad) + 1.5 * Math.cos(-rotationRad);

    return(
        <g>
            <path style={timerPath} d={`m ${x},${y} ${adjacentLeg},${oppositeLeg}`} />
            <path
                style={timerTriangle}
                d={`m ${x},${y} ${-triangleX1},${-triangleY1} ${-triangleX2},${-triangleY2} z`} />
            <path
                style={timerTriangle}
                d={`m ${x + adjacentLeg},${y + oppositeLeg} ${triangleX1},${triangleY1} ${triangleX2},${triangleY2} z`} />                
            <InfoText x={textPosX} y={textPosY} text={text} align={align} rotationDeg={textRotate} />
        </g>
    );
}

export default TimerPath;