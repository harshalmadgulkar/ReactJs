const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () =>{
    let fahrenheitTemp = 32;

    function fToC (temp){
        let celsiusTemp = (temp - 32) * (5/9);
        return celsiusTemp;
    }

    return(
        <>
        <h1> Temperature Converter (HomeWork) </h1>
        <p>Temperature in fahrenheit: {fahrenheitTemp} </p>
        <p> Temperature in celsius: {fToC(fahrenheitTemp)} </p>
        </>
        );
};

root.render(<App/>);