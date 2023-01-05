import AltitudeText from "./AltitudeText";
import TdzeText from "./TdzeText";
import CourseText from "./CourseText";
import { localizerStyle, alternatePathStyle, activePathStyle, runwayStyle, dashedConnectorStyle } from "./styles";
import TextPointer from "./TextPointer";
import TimerPath from "./TimerPath";
import Triangle from "./Triangle";
import InfoText from "./InfoText";

function Chart({course}) {
  return (
    <svg width="104.492mm" height="166.065mm" viewBox="0 0 104.492 166.065" version="1.1" id="svg6132" xmlns="http://www.w3.org/2000/svg">
        <defs />

        <g>
            <g transform="translate(-97.702461,-16.518505)">
                <path
                    style={alternatePathStyle}
                    d="m 148.71227,126.69248 -24.70958,-24.84926 c 0,0 -0.62278,-0.64723 -1.17559,-1.84231 -0.5528,-1.195079 -0.51115,-2.137849 -0.51115,-2.137849 V 33.962899 c 0,0 -0.58417,-15.33458 13.6991,-15.33458 14.28327,0 13.93632,15.33458 13.93632,15.33458 v 55.678542" />
                <g id="g8875-6" transform="translate(48.94013,-61.543539)">
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
                    <AltitudeText x="88.225189" y="192.43329" altitude="1000" />
                    <AltitudeText x="139.30057" y="102.50824" altitude="0000"/>
                    <TdzeText x="83.527054" y="131.0369" altitude="200" />
                    <CourseText x="131.85316" y="150.466" course={course} />
                    <CourseText x="97.810265" y="99.561417" course={(parseInt(course)+180)} align="end" />
                    <CourseText x="-41.847809" y="211.38739" course={(parseInt(course)+45)} align="center" rotationDeg="-45" />
                    <CourseText x="103.79466" y="207.09641" course={course} />
                    <InfoText x="114.65569" y="127.879" text="Abeam" />
                    <InfoText x="109.65569" y="131.879" text="Threashold" />

                    <TextPointer x="103.65569" y="186.98039" text="Start Timer" />
                    <TextPointer x="128.64665" y="95.626556" text="Final Turn" />
                    <TextPointer x="128.62082" y="128.879" text="Start Timer" />
                    <TextPointer x="101.02235" y="191.27895" text="Breakout" />

                    <TimerPath x="101.91964"  y="183.51461" text="30s" align="center" rotationDeg="-45" />
                    <TimerPath x="125.16243" y="127.61529" text="30s" align="end" rotationDeg="-90" />

                    <Triangle x="128.7" y="148" rotationDeg="90" />
                    <Triangle x="114" y="176.4" rotationDeg="135" />
                    <Triangle x="100.975" y="204.38739" rotationDeg="90" />
                    <Triangle x="128.7" y="100.50824" rotationDeg="90" />
                    <Triangle x="112.8" y="80.4" rotationDeg="0" />
                    <Triangle x="100.975" y="102" rotationDeg="-90" />
                </g>
            </g>
        </g>
    </svg>
  );
}

export default Chart;
