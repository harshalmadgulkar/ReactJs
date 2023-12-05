const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const Heading=()=>{
    return <h1> Conditional Redering in React </h1>
}

const CarsDetails = () => {
    const cars = [{img:"https://cdn-icons-png.flaticon.com/128/741/741407.png", name:"BMW", average:50},
                   {img:"https://cdn-icons-png.flaticon.com/128/741/741449.png", name:"Audi", average:80} ];

    return (
        <>
        <h2> Cars Details </h2>
        <table border="1px">
            <thead>
                <tr>
                <th> Car Image </th>
                <th> Name </th>
                <th> Average </th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car,index)=>(<tr key={index}>
                                    <td> <img src={car.img}/> </td>
                                    <td> {car.name} </td>
                                    <td> {car.average} </td>
                                </tr>))}
            </tbody>
        </table>
        </>
    )
}

const StudentsDetails = () =>{
    let students = [ {name: 'Sirus', age: 20, marks:74},
                     {name: 'Rohit', age: 22, marks:52}, 
                     {name: 'Alex', age: 16, marks:95},]

    return (
        <>
        <h2> Students Details </h2>

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
        </>
    )
}

const App = () =>{
    let showcar = false;

    if(showcar){
        return <><Heading/><CarsDetails/></>
    }
    return <><Heading/><StudentsDetails/></>
}

rootElement.render(<App/>)