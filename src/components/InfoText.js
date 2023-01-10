import { infoTextStyle } from "../styles";

const alignToAnchor = {
    start: "start",
    center: "middle",
    end: "end"
}

function InfoText({x, y, text, align = "start", rotationDeg="0"}) {    
    return (
        <text xmlSpace="preserve" style={infoTextStyle} x={x} y={y} transform={`rotate(${rotationDeg})`}>
            <tspan style={{textAlign: align, textAnchor: alignToAnchor[align]}}>
                {text}
            </tspan>     
        </text>
    );
}

export default InfoText;
