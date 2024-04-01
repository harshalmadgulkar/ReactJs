const root = ReactDOM.createRoot(document.getElementById('root'));

function Sum() {
	let a = 10;
	let b = 5;
	return a + b;
}

const JSXExpression = <h2> This is JSX Expression rendering here. </h2>;

function App() {
	let name = 'Microsoft';
	let age = 22;
	let demo = true;
	return (
		<>
			<h1> Hello, {name}</h1>
			{JSXExpression}
			<p> your age is {age}.</p>
			<p> Demo value: {demo} </p>
			<p> Calling Sum function is: {Sum()} </p>
		</>
	);
}
root.render(<App />);