import { mainTextStyle } from "./styles";
// x="88.225189" y="192.43329"
function AltitudeText({x, y, altitude}) {
    x = parseFloat(x);
    y = parseFloat(y);
    var distx = 6.780663000000004;
    var distyDown = -0.7093800000000101;
    var distyUp = 3.927500000000009;

    return (
        <g>
        <path
            style={{fill:"none",stroke:"#000000",strokeWidth:"0.264583px",strokeLinecap:"butt",strokeLinejoin:"miter"}}
            d={"M " + (x - distx) +","+(y - distyUp)+ " "+ "h 13.76461"}
            id="path5649-1" />
            <path
                style={{fill:"none",stroke:"#000000",strokeWidth:"0.264583px",strokeLinecap:"butt",strokeLinejoin:"miter"}}
                d={"M " + (x - distx) +","+(y - distyDown)+ " "+ "h 13.76461"}
                id="path5649-1" />
        <text xmlSpace="preserve" style={mainTextStyle} x={x} y={y}>
            <tspan style={{textAlign:"center",textAnchor:"middle"}}>{altitude}ft</tspan>
        </text>
        </g>
    );
}

export default AltitudeText;
