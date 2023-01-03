import { textPointerCircle, textPointerPath } from "./styles";
import InfoText from "./InfoText"

function TextPointer ({x, y, text}) {
    x = parseFloat(x);
    y = parseFloat(y);
    const pathx = 0.07746000000000208;
    const pathy = -0.05164999999999509;
    const distxText = 8.423359999999988;
    const distyText = 0.91992;

    return(
        <g>
            <path style={textPointerPath} d={`M ${x - pathx},${y - pathy} h 8.15821`} />
            <circle style={textPointerCircle} cx={x} cy={y} r="0.92941582" />
            <InfoText x={x + distxText} y={y + distyText} text={text} />
        </g>
    );
}

export default TextPointer;