const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    let loggedIn = true;
    let name = "Alex";
    let lastName = "Diaz"

    // conditional rendering
    return  <>
            <h1> Hello {loggedIn?"Alex":"User"}! </h1>
            {/* AND operator rendering */}
            {loggedIn && <p>Welcome to the Portal </p>}
            </>

// OR operator rendering
    // return <>
    //        <h1> Hello {lastName || name}! </h1>
    //        </>

    // return  <>
    //         <h1> Hello {loggedIn? lastName||name : "User"}! </h1>
    //         </>
}

rootElement.render(<App/>);
