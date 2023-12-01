/** Javascript Code */
// const heading = document.createElement("h2");
// heading.textContent = "Hello Javscript";
// heading.className = "header";
// document.getElementById("root").append(heading);
// console.log(heading);


/** React with Javascript */
// const reactHeading = React.createElement("h1",{className:"head",id:"reactHeadId"},"Hello React!")
// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);
// console.log("React Element:", reactHeading);


/** React with JSX*/
// const jsxHeading = <div>
//                         <h1> Hello JSX </h1>
//                         <p>This is paragraph using JSX.</p>
//                     </div>
// const jsxParagraph = <p>This is paragraph using JSX.</p>;

// ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading)

/** Using React Components*/
// function App() {
//     return (
//         <>
//             <h1> Hello JSX </h1>
//             <p>This is paragraph using JSX.</p>
//             <h2>Trying to add one more components.</h2>
//         </>
//     )
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

/** React Components using Arrow Functions */
// const App =() => (<>
//             <h1> Hello JSX </h1>
//             <p>This is paragraph using JSX.</p>
//             <h2>Trying to add one more components.</h2>
//         </>)

// const Name =() => (
//     <>
//         <h2> Name functional component </h2>
//         <p> Inside Name component with paragraph. </p>
//     </>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<><App/><Name/></>);

/** Rendering 2 React Components by using 1component only */
const App =() => (<>
    <h1> Hello JSX </h1>
    <p>This is paragraph using JSX.</p>
    <h2>Trying to add one more components.</h2>
    <Name/>
</>)

const Name =() => (
<>
<h2> Name functional component </h2>
<p> Inside Name component with paragraph. </p>
</>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
