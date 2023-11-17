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
  return (
    <>
      <TipCalculator />
    </>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [precentage1, setPrecentage1] = useState(0);
  const [precentage2, setPrecentage2] = useState(0);

  const tip = bill * ((precentage1 + precentage2) / 2 / 100);
  const total = tip + bill;

  function handleReset() {
    setBill(() => 0);
    setPrecentage1(0);
    setPrecentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPrecentage onSelect={setPrecentage1} precentage={precentage1}>
        {" "}
        My Tip
      </SelectPrecentage>
      <SelectPrecentage onSelect={setPrecentage2} precentage={precentage2}>
        {" "}
        My Friend Tip
      </SelectPrecentage>
      {bill > 0 && (
        <>
          {" "}
          <Output bill={bill} tip={tip} total={total} />
          <Reset onReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <dev>
      <label>How Much the bill was</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(e.target.value * 1)}
      />
      {console.log(bill)}
    </dev>
  );
}
function SelectPrecentage({ precentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={precentage} onChange={(e) => onSelect(e.target.value * 1)}>
        <option value="0">dissatisfied 0%</option>
        <option value="5">it was ok 5%</option>
        <option value="10">it was good 10%</option>
        <option value="20">it was amazing 20%</option>
      </select>
    </div>
  );
}
function Output({ bill, tip, total }) {
  return (
    <div>
      <h3>
        You pay {total} ( {bill}$ + x {tip}$ )
      </h3>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
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
