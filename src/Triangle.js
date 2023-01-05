import { timerTriangle } from "./styles";

function Triangle({x, y, rotationDeg="0"}){
    x = parseFloat(x);
    y = parseFloat(y);
    rotationDeg = parseFloat(rotationDeg);

    const rotationRad = (rotationDeg * Math.PI / 180);
    const triangleX1 = -4.5 * Math.cos(-rotationRad) + -2.25 * Math.sin(-rotationRad);
    const triangleY1 = 4.5 * Math.sin(-rotationRad) + -2.25 * Math.cos(-rotationRad);
    const triangleX2 = 0 * Math.cos(-rotationRad) + 4.5 * Math.sin(-rotationRad);
    const triangleY2 = -0 * Math.sin(-rotationRad) + 4.5 * Math.cos(-rotationRad);

    return(
        <g>
            <path
                style={timerTriangle}
                d={`m ${x},${y} ${-triangleX1},${-triangleY1} ${-triangleX2},${-triangleY2} z`} />
        </g>
    );
}

export default Triangle;