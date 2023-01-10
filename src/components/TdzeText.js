import { mainTextStyle } from "../styles";

function TdzeText({x, y, altitude}) {
    y = parseFloat(y);

    return (
        <text xmlSpace="preserve" style={mainTextStyle}>
            <tspan style={{strokeWidth:0.109556}} x={x} y={y}>TDZE</tspan>
            <tspan style={{strokeWidth:0.109556}} x={x} y={y+5.5}>{altitude}ft</tspan>
        </text>
    );
}

export default TdzeText;
