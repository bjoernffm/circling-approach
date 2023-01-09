import AltitudeText from "./AltitudeText";
import TdzeText from "./TdzeText";
import CourseText from "./CourseText";
import { localizerStyle, alternatePathStyle, activePathStyle, runwayStyle, dashedConnectorStyle } from "../styles";
import TextPointer from "./TextPointer";
import TimerPath from "./TimerPath";
import Triangle from "./Triangle";
import InfoText from "./InfoText";
import { useSelector } from "react-redux";

function Chart() {

    const input = useSelector(state => state.input);
    const course = parseFloat(input.course);
    const tdze = parseFloat(input.tdze);
    const altitude = parseFloat(input.altitude);
    const windDirDeg = parseFloat(input.windDirDeg);
    const windSpeed = parseFloat(input.windSpeed);

    const windDirRad = ((windDirDeg - course + 45) * Math.PI / 180);
    const timeToLowerAltitude = Math.ceil(((altitude - tdze) / 100) * 3);
    const headWindKnots = windSpeed * Math.sin(windDirRad);
    const breakoutTimer = Math.ceil(20 + (headWindKnots * 0.5));

    return (
        <svg width="104.492mm" height="166.065mm" viewBox="0 0 104.492 166.065" version="1.1" id="svg6132" xmlns="http://www.w3.org/2000/svg">
            <g>
                <g transform="translate(-6.4072786,-22.921149)">
                    <path
                        style={alternatePathStyle}
                        d="m 59.889948,133.09512 24.709581,-24.84925 c 0,0 0.62278,-0.64723 1.17559,-1.84231 0.5528,-1.19509 0.51115,-2.13786 0.51115,-2.13786 V 40.365543 c 0,0 0.58417,-15.334579 -13.699101,-15.334579 -14.28327,0 -13.93632,15.334579 -13.93632,15.334579 v 55.678542" />
                    <g transform="matrix(-1,0,0,1,159.66209,-55.140895)">
                        <path
                            style={localizerStyle}
                            d="M 101,151.18498 97,230 101,224.98343 105,230 Z" />
                        <path
                            style={activePathStyle}
                            d="m 101,244.12656 v -52.8218 c 0,0 0.005,-0.90965 0.33562,-1.69356 0.33083,-0.78392 0.90348,-1.37519 0.90348,-1.37519 l 24.70958,-24.84925 c 0,0 0.62278,-0.64723 1.17559,-1.84231 0.5528,-1.19508 0.51115,-2.13785 0.51115,-2.13785 V 95.506438 c 0,0 0.58417,-15.334579 -13.6991,-15.334579 C 100.65305,80.171859 101,95.506438 101,95.506438 v 55.678542" />
                        <path
                            style={runwayStyle}
                            d="m 101,128.879 v 22.30598" />
                        <path
                            style={dashedConnectorStyle}
                            d="m 101,128.879 h 27.37233" />
                    </g>

                    <AltitudeText x="71.2" y="137.35" altitude={altitude} />
                    <AltitudeText x="20.2" y="47.1" altitude={altitude} />

                    <TdzeText x="63.8" y="76" altitude={tdze} />

                    <CourseText x="46.8" y="152" course={course} />
                    <CourseText x="62" y="44.6" course={course + 180} />
                    <CourseText x="115.4" y="59.8" course={course + 45} align="center" rotationDeg="45" />
                    <CourseText x="18.8" y="95.7" course={course} />

                    <InfoText x="35" y="73" text="Abeam" />
                    <InfoText x="35" y="77" text="Threashold" />

                    <TextPointer x="56" y="132" text="Start Timer" align="end" dir="left" />
                    <TextPointer x="31" y="40.5" text="Final Turn" align="end" dir="left" />
                    <TextPointer x="31" y="73.7" text="Start Timer" align="end" dir="left" />
                    <TextPointer x="58.7" y="136" text="Breakout" align="end" dir="left" />

                    <TimerPath x="58"  y="128.8" text={`${breakoutTimer}s`} align="center" rotationDeg="-135" />
                    <TimerPath x="34.3" y="72.5" text={`${timeToLowerAltitude}s`} rotationDeg="-90" textPlacement="right" />

                    <Triangle x="58.7" y="47" rotationDeg="-90" />
                    <Triangle x="42" y="117.35" rotationDeg="45" />
                    <Triangle x="58.7" y="149" rotationDeg="90" />
                    <Triangle x="31" y="93" rotationDeg="90" />
                    <Triangle x="48" y="25" rotationDeg="180" />
                    <Triangle x="31" y="45" rotationDeg="90" />
                </g>
            </g>
        </svg>
    );
}

export default Chart;
