import './App.css';
import UserBox from './Components/Userbox';

const App = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <UserBox type="text" label="User" />
        <UserBox type="password" label="Password" />
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ENTRAR
        </a>
      </form>
    </div>
  );
};

export default App;
