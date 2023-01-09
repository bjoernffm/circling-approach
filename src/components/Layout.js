import Chart from "./Chart";
import Input from "./Input";

const Layout = () => {
    return(
        <div className="row">
            <div className="column left">
                <Input />
            </div>
            <div className="column right">
                <Chart />
            </div>
        </div>
    );
}

export default Layout;