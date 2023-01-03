import { mainTextStyle, altitudePathStyle } from "./styles";

function AltitudeText({x, y, altitude}) {
    x = parseFloat(x);
    y = parseFloat(y);
    const distx = 6.780663000000004;
    const distyDown = -0.7093800000000101;
    const distyUp = 3.927500000000009;

    return (
        <g>
            <path style={altitudePathStyle} d={`M ${x - distx},${y - distyUp} h 13.76461`} />
            <path style={altitudePathStyle} d={`M ${x - distx},${y - distyDown} h 13.76461`} />
            <text xmlSpace="preserve" style={mainTextStyle} x={x} y={y}>
                <tspan style={{textAlign:"center",textAnchor:"middle"}}>{altitude}ft</tspan>
            </text>
        </g>
    );
}

export default AltitudeText;
