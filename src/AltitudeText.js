import { mainTextStyle } from "./styles";
// x="88.225189" y="192.43329"
function AltitudeText({x, y, altitude}) {
    x = parseFloat(x);
    y = parseFloat(y);

    return (
        <g>
        <path
            style={{fill:"none",stroke:"#000000",strokeWidth:"0.264583px",strokeLinecap:"butt",strokeLinejoin:"miter"}}
            d="M 81.444526,188.50579 H 95.209137"
            id="path5649-1" />
            <path
                style={{fill:"none",stroke:"#000000",strokeWidth:"0.264583px",strokeLinecap:"butt",strokeLinejoin:"miter"}}
                d="M 81.444526,193.14267 H 95.209137"
                id="path5649-1" />
        <text xmlSpace="preserve" style={mainTextStyle} x={x} y={y}>
            <tspan style={{textAlign:"center",textAnchor:"middle"}}>{altitude}ft</tspan>
        </text>
        </g>
    );
}

export default AltitudeText;
