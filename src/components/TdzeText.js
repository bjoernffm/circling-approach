import { mainTextStyle } from "../styles";

function TdzeText({x, y, altitude}) {
    return (
        <text xmlSpace="preserve" style={mainTextStyle}>
            <tspan style={{strokeWidth:0.109556}} x={x} y="131.0369">TDZE</tspan>
            <tspan style={{strokeWidth:0.109556}} x={x} y="136.51466">{altitude}ft</tspan>
        </text>
    );
}

export default TdzeText;
