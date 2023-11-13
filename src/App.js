// import { useState } from "react";

import { Children, useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setisOpen] = useState(true);

//   function handleNext() {
//     if (step < 3) setStep((s) => s + 1);
//   }

//   function handlePrevious() {
//     if (step > 1) setStep((s) => s - 1);
//   }
//   return (
//     <>
//       <button className="close" onClick={() => setisOpen((o) => !o)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           {/* Hello Steps React APP */}
//           <div className="numbers">
//             <div className={step >= 1 && "active"}>1</div>
//             <div className={step >= 2 && "active"}>2</div>
//             <div className={step >= 3 && "active"}>3</div>
//           </div>
//           <StepMessage step={step}>{messages[step - 1]}</StepMessage>
//           <div className="buttons">
//             <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
//               Previous👈
//             </Button>
//             <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
//               👉Next
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// function Button({ textColor, bgColor, onClick, children }) {
//   return (
//     <button
//       style={{ backgroundColor: bgColor, color: textColor }}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

// function StepMessage({ step, children }) {
//   return (
//     <div className="message">
//       <h3>Step {step}:</h3>
//       {children}
//     </div>
//   );
// }

///// Excercise-2 \\\\\
export default function App() {
  const [bill, setBill] = useState(0);
  const [avgTib, setAvgTib] = useState(null);

  function handleAvgTib(x) {
    avgTib === null ? setAvgTib(x) : setAvgTib((s) => s + x);
    console.log(avgTib);
  }
  return (
    <>
      <Bill bill={bill} setBill={setBill} />
      <SelectPrecent onAvgTip={handleAvgTib}> My Tip</SelectPrecent>
    </>
  );
}
function Bill({ bill, setBill }) {
  return (
    <dev>
      <p>How Much the bill was</p>
      <input type="number" onChange={(e) => setBill(e.target.value)} />
      {console.log(bill)}
    </dev>
  );
}
function SelectPrecent({ onAvgTip, children }) {
  return (
    <div>
      <p>{children}</p>
      <select onChange={(e) => onAvgTip(e.target.value)}>
        <option value={0}>dissatisfied 0%</option>
        <option value={5}>it was ok 5%</option>
        <option value={10}>it was good 10%</option>
        <option value={20}>it was amazing 20%</option>
      </select>
    </div>
  );
}

// ///// Challenge \\\\\\\\
// export default function App() {
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div
//         className="step"
//         style={{ textAlign: "center", fontSize: "20px", margin: "40px 0" }}
//       >
//         <button onClick={() => setStep(() => step + 1)}>+</button>{" "}
//         {/* <span> Step:{step} </span> */}
//         <input
//           type="range"
//           min={0}
//           max={10}
//           value={step}
//           onChange={(e) => {
//             setStep(e.target.value * 1);
//           }}
//         />
//         <button onClick={() => setStep(() => step - 1)}>-</button>
//         <p>{step}</p>
//       </div>
//       <div
//         className="count"
//         style={{ textAlign: "center", fontSize: "20px", margin: "40px 0" }}
//       >
//         <button onClick={() => setCount(() => count + step)}>+</button>{" "}
//         <input
//           placeholder="Counts Num"
//           onChange={(e) => setCount(e.target.value * 1)}
//           value={count}
//         />
//         <button onClick={() => setCount(() => count - step)}>-</button>
//       </div>
//       <p
//         style={{ textAlign: "center", fontSize: "20px", margin: "40px 0" }}
//       >{`${count !== 0 ? `${count} days from` : ""} today is ${new Date(
//         Date.now() + count * 24 * 60 * 60 * 1000
//       ).toDateString()}`}</p>
//     </>
//   );
// }
