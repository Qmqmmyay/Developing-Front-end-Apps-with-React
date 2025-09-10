import { useState, useRef, useEffect, useMemo, useCallback } from "react";

//Create a const name StateManagement which have a button click of showing name or not
function App1(){
  // Create a state variable to hold the count
  const [count, setCount] = useState(0);
  // Create another stateref to hold the count without render
   const countRef = useRef(0);

   // Function to handle button click without rendering
  const handleClick = () => {
    countRef.current += 1; // Fix: Actually increment the ref value
    //console.log("Clicked:", countRef.current);
  }
  // Function to handle button click with rendering
  const statechange = () => {
    setCount(count + 1); // Update the state variable
    //console.log("Clicked:", count);
  }
  // Render the component
  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count with render: {count}</p>
      <p>Count without render: {countRef.current}</p>
      <button onClick={handleClick}>Click without render</button>
      <button onClick={statechange}>Click with render</button>
    </div>
  );

}

export { App1 };


// App2, useMemo – Memoizing expensive calculations
//Goal: Make a component that:

//Calculates the factorial of a number
//Only re-calculates when the number changes

function factorialize(n) {
  return n <= 0 ? 1 : n * factorialize(n - 1);
}

function App2(){
  const [num, setNum] = useState(5);
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    return num <= 0 ? 1 : num * factorialize(num - 1);
  }, [num]);

  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(+e.target.value)} />
      <p>Factorial: {factorial}</p>
    </div>
  );
}


export { App2 };


