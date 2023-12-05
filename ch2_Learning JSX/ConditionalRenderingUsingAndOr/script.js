const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    let loggedIn = true;
    let name = "Alex";
    let lastName = "Diaz"

    // return  <>
    //         <h1> Hello {loggedIn?"Alex":"User"}! </h1>
    //         {loggedIn && <p>Welcome to the Portal </p>}
    //         </>

    // return <>
    //        <h1> Hello {lastName || name}! </h1>
    //        </>

    return  <>
            <h1> Hello {loggedIn? lastName||name : "User"}! </h1>
            </>
}

rootElement.render(<App/>);
