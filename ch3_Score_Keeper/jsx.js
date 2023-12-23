const rootElement = ReactDOM.createRoot(document.getElementById('root'));

let score = 0;
let wicket = 0;
let ballWiseResult = new Array;
console.log(ballWiseResult);

function addScore(num) {
    if (wicket<10) {
        score+=num;
        ballWiseResult.push(num);
        rootElement.render(<App/>);   
        console.log(ballWiseResult);
    }
}

function addWicket() {
    if (wicket<10) {
        wicket+=1;
        ballWiseResult.push("W");
        rootElement.render(<App/>);   
        console.log(ballWiseResult);
    }
    else if(wicket >= 10){
        console.log("Match Over");
    }
}

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

const Result =()=>(
    <div>
        {ballWiseResult.map((res,index)=>(
            <>
            {index%6 === 0? <br/>: null}

            <span key={index} style={res==="W"?{color:"red"}:null} className="circle"> 
                {res===0 ? <strong> . </strong>: res} 
            </span>

            </>
        ))}
    </div>
)

function handleSubmit(event) {
    event.preventDefault();
}

const Form = () =>(
    <form onSubmit={handleSubmit}>
        <input/>
        <input/>
        <button> Submit </button>
    </form>
)

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

rootElement.render(<App/>)