const rootElement = ReactDOM.createRoot(document.getElementById('root'));

let score = 0;
let wicket = 0;
let ballWiseResult = new Array;
let hit = 0;
let inputRef = React.createRef();

function addScore(num) {
    hit = num;
    rootElement.render(<App/>);
    console.log(hit);
}

function addWicket() {
    hit = "W";
    rootElement.render(<App/>);
    console.log(hit);
}

// Run and wkt adding buttons
const ScoreButtons = () =>(
    <div>
        <button onClick={()=> addScore(0)}> 0 </button>
        <button onClick={()=> addScore(1)}> 1 </button>
        <button onClick={()=> addScore(2)}> 2 </button>
        <button onClick={()=> addScore(3)}> 3 </button>
        <button onClick={()=> addScore(4)}> 4 </button>
        <button onClick={()=> addScore(5)}> 5 </button>
        <button onClick={()=> addScore(6)}> 6 </button>
        <button onClick={addWicket}> wicket </button>
    </div>
)

// Fetch all result(score & commentry)
const Result =()=>(
    <div>
        {ballWiseResult.map((res,index)=>(
            <>
            <p key={index}> {res} </p>
            </>
        ))}
    </div>
)

// submit form of score & comment
function handleSubmit(event) {
    event.preventDefault();
    if(wicket<10){
    ballWiseResult.unshift(
        <span> {`${hit},${inputRef.current.value}`} </span>
    );

    {hit=="W"?wicket+=1:score+=hit};

    hit=0;
    inputRef.current.value = "";

    rootElement.render(<App/>);
    }
}

// Score & comment added here
const Form = () =>(
    <form onSubmit={handleSubmit}>
        <input value={hit} />
        <input ref={inputRef} placeholder="Add a comment!"/>
        <button> Submit </button>
    </form>
)

// Main APP
const App =()=>(
            <>
            <h1> SCORE KEEPER APP </h1>
            <h2> Score: {score}/{wicket} </h2>
            <ScoreButtons/>
            <br/>
            <Form/>
            <hr/>
            <Result/>
            </>
)

rootElement.render(<App/>);