import { useReducer } from "react";
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dec":
      return { count: state.count - state.step, step: state.step };
    case "inc":
      return { count: state.count + state.step, step: state.step };

    case "setCount":
      return { count: action.payload, step: state.step };
    case "setStep":
      return { count: state.count, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      return state;
  }
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.payload;
}
function DateCounter() {
  // const [count, setCount] = useState(0);
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({
      type: "dec",
    });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({
      type: "inc",
    });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({
      type: "setCount",
      payload: +e.target.value,
    });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({
      type: "setStep",
      payload: +e.target.value,
    });
    // setStep(Number(e.target.value));
  };
  //Action creator
  const reset = function () {
    dispatch({
      type: "reset",
    });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
