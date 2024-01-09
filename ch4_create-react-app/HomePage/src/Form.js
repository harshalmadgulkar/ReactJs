import {name, email} from './HomePage';

// Complete the Form Component and export it

const Form = () => (
  <>
    <div>
    <h3> Login Page </h3>

      <form onSubmit={handleLogin}>
      {/* Create a h3, 2 inputs and 1 button here */}
      <input type="text" placeholder="Name" value={name}></input>
      <br/>
      <br/>
      <input type="text" placeholder="Email" value={email}></input>
      <br/>
      <br/>
      <button type="submit"> Login </button>
      </form>
    </div>
  </>
);

function handleLogin(e) {
  e.preventDefault();
}

export default Form;