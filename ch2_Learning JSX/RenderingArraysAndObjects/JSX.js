const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const App = ()=>{
    let arr = [11,21,31,5,35,67,90];
    let obj = {
        name : 'Harshal',
        eduacation: 'BTech',
        number: 7559207299
    }
    let cars = ['BMW', 'Audi', 'Nexa', 'MGHector'];
    let students = [ {name: 'Sirus', age: 20, marks:74},
                     {name: 'Rohit', age: 22, marks:52}, 
                     {name: 'Alex', age: 16, marks:95},]

    return (
        <>
        <h1> Rendering Arrays & Objects </h1>

        <table border="1" >
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Age </th>
                    <th> Marks </th>
                </tr>
            </thead>
            
            <tbody>
            {students.map((student,index) =>
                (<tr key = {index}>
                    <td> {student.name} </td>
                    <td> {student.age} </td>
                    <td> {student.marks} </td>
                </tr>) )
            }
            </tbody>
        </table>

        <ul>
        {cars.map((car, index) => <li key = {index}> {car} </li> )}
        </ul>
        {arr.map((num,index) => <p key={index}> {num*2} </p>)}
        <p> My name is {obj.name}. </p>
        </>
    )
}

rootElement.render(<App />);