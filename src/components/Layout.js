import Chart from "./Chart";
import ChartLeft from "./ChartLeft";
import Input from "./Input";
import { useSelector } from "react-redux";

const Layout = () => {
    const input = useSelector(state => state.input);

    return(
        <div className="container text-center mt-5" style={{maxWidth: "900px"}}>
            <div className="row align-items-center g-2">
                <div className="col">
                    <Input />
                </div>
                <div className="col-8">
                    {input.view? <Chart /> : <ChartLeft  />}
                </div>
            </div>
        </div>
    );
}

export default Layout;