import './App.css';

const App = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label>Usuário</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label>Senha</label>
        </div>
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
