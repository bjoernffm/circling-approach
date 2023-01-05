import { textPointerCircle, textPointerPath } from "./styles";
import InfoText from "./InfoText"

function TextPointer ({x, y, text}) {
    x = parseFloat(x);
    y = parseFloat(y);
    const pathOffsetX = 0.07746000000000208;
    const pathOffsetY = -0.05164999999999509;
    const textOffsetX = 8.423359999999988;
    const textOffsetY = 0.91992;

    return(
        <g>
            <path style={textPointerPath} d={`M ${x - pathOffsetX},${y - pathOffsetY} h 8.15821`} />
            <circle style={textPointerCircle} cx={x} cy={y} r="0.92941582" />
            <InfoText x={x + textOffsetX} y={y + textOffsetY} text={text} />
        </g>
    );
}

export default TextPointer;