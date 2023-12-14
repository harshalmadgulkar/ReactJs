const rootElement = ReactDOM.createRoot(document.getElementById('root'));

let score = 0;
let wicket = 0;

function addScore(num) {
    score+=num;
    rootElement.render(<App/>);
}

function addWicket() {
    wicket+=1;
    rootElement.render(<App/>);
}

const App =()=>(
            <>
            <h1> SCORE KEEPER APP </h1>
            <h2> Score: {score}/{wicket} </h2>

            <div>
                <button onClick={()=> addScore(1)}> 1 </button>
                <button onClick={()=> addScore(2)}> 2 </button>
                <button onClick={()=> addScore(3)}> 3 </button>
                <button onClick={()=> addScore(4)}> 4 </button>
                <button onClick={()=> addScore(5)}> 5 </button>
                <button onClick={()=> addScore(6)}> 6 </button>
                <button onClick={addWicket}> wicket </button>
            </div>
            </>
)

rootElement.render(<App/>)