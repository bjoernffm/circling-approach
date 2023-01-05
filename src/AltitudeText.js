import { mainTextStyle, altitudePathStyle } from "./styles";

function AltitudeText({x, y, altitude}) {
    x = parseFloat(x);
    y = parseFloat(y);
    const pathOffsetX = 6.780663000000004;
    const pathOffsetYDown = -0.7093800000000101;
    const pathOffsetYUp = 3.927500000000009;

    return (
        <g>
            <path style={altitudePathStyle} d={`M ${x - pathOffsetX},${y - pathOffsetYUp} h 13.76461`} />
            <path style={altitudePathStyle} d={`M ${x - pathOffsetX},${y - pathOffsetYDown} h 13.76461`} />
            <text xmlSpace="preserve" style={mainTextStyle} x={x} y={y}>
                <tspan style={{textAlign:"center",textAnchor:"middle"}}>{altitude}ft</tspan>
            </text>
        </g>
    );
}

export default AltitudeText;
