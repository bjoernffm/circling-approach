import { textPointerCircle, textPointerPath } from "../styles";
import InfoText from "./InfoText"

function TextPointer ({x, y, text, align="start", dir}) {
    x = parseFloat(x);
    y = parseFloat(y);
    let pathOffsetX = 0.07746000000000208;
    const pathOffsetY = -0.05164999999999509;
    let textOffsetX = 8.423359999999988;
    const textOffsetY = 0.91992;
    let pointerLength = 8.15821;

    if(dir === "left"){
        pointerLength = -pointerLength;
        pathOffsetX = -pathOffsetX;
        textOffsetX = -textOffsetX;
    }

    return(
        <g>
            <path style={textPointerPath} d={`M ${x - pathOffsetX},${y - pathOffsetY} h ${pointerLength}`} />
            <circle style={textPointerCircle} cx={x} cy={y} r="0.92941582" />
            <InfoText x={x + textOffsetX} y={y + textOffsetY} text={text} align={align} />
        </g>
    );
}

export default TextPointer;