
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, double } from "./redux/counterSlice";

function GetCount() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>GET COUNT COMPONENT</h1>
            <h2>{count}</h2>

            <button onClick={() => dispatch(double())}>
                DOUBLE
            </button>
        </>
    );
}

export default GetCount;
