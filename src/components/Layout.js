import Chart from "./Chart";
import ChartLeft from "./ChartLeft";
import Input from "./Input";
import { useSelector } from "react-redux";

const Layout = () => {
    const input = useSelector(state => state.input);

    return(
        <div className="row">
            <div className="column left">
                <Input />
            </div>
            <div className="column right">
                {input.view? <Chart /> : <ChartLeft  />}
            </div>
        </div>
    );
}

export default Layout;