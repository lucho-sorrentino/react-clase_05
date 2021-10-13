import './App.css';
import { useState } from "react";

function App() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //ESTADO que al mutar dispara el cambio de layout a renderizar: "NewUserLayout" o "SignInLayout"
  const [displayElement, setDisplayElement] = useState(false); 

  //COMPONENTE QUE MUESTRA PAGINA DE REGISTRO
  const NewUserLayout = () => {
    // const [newUsername, setNewUsername] = useState("");
    // const [newPassword, setNewPassword] = useState("");    

    const saveNewUsername = (e) => {
      setNewUsername(e.target.value);
      console.log(`El nuevo nombre de usuario es ${newUsername}`);
    };
  
    const saveNewPassword = (e) => {
      setNewPassword(e.target.value);
      console.log(`La nueva contraseña es ${newPassword}`)
    };
    
    //Para evento onClick de botón "Crear Usuario"
    const showLogIn = () => {
      setDisplayElement(true);
      console.log(`Datos nueva cuenta: Usuario: ${newUsername} y Pass: ${newPassword}`);
    }; 

    return (    
      <>
        <input
          name="newUSer"
          type="text"
          value={newUsername}
          onChange={saveNewUsername}
          placeholder="Usuario Nuevo"
          />
        <br />

        <input
          name="newPass"
          type="text"
          value={newPassword}
          onChange={saveNewPassword}
          placeholder="Contraseña Nueva"
        />
        <br />

        <button onClick={showLogIn}> Crear Usuario </button>
      </>
    );
  };

  //COMPONENTE QUE MUESTRA PAGINA DE INICIO DE SESION
  const SignInLayout = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    
    const saveUsername = (e) => {
      setUsername(e.target.value);
      console.log(`The user name is ${username}`);
    };

    const savePassword = (e) => {
      setPassword(e.target.value);
      console.log(`The password is ${password}`);
    };
        

      return (    
        <>
          <input
            name="user"
            type="text"
            value={username}
            onChange={saveUsername}
            placeholder="Usuario"
          />
          <br />

          <input
            name="pass"
            type="text"
            value={password}
            onChange={savePassword}
            placeholder="Contraseña"
          />
          <br />

          <button onClick={validateUser}> Loguearte </button>
        </>
      )
  };  
  
  //Para evento onClick de botón "Loguearte":
  const validateUser = () => {
    console.log(`Datos nueva cuenta: Usuario: ${newUsername} y Pass: ${newPassword}`);
    console.log(`Datos guardados: Usuario: ${username} y Pass: ${password}`);
    if (newUsername === username && newPassword === password) {
      console.log("Ingreso satisfactorio")
      return alert("Ingreso satisfactorio");
      } return alert("Error");
  };

  //COMPONENTE QUE DECIDE MOSTRAR UNO U OTRO DE LOS COMP ANTERIORES
  function ToggleDisplay () {
    if (displayElement) {
      return <SignInLayout />;
    }
      return <NewUserLayout /> 
  };


  //Para evento onClick de botón "SignIn"
  const showSignIn = () => {
    console.log("Aviso! Click en botón SignIn");
    setNewUsername("");
    setNewPassword("");
    setDisplayElement(false);    
  };

  //Para evento onClick de botón "LogIn"
  const showLogIn = () => {
    console.log("Aviso! Click en botón LogIn");
    setUsername("");
    setPassword("");
    setDisplayElement(true);    
  };  
  

  // RETURN DE COMPONENTE APP
  return (
    <div className="App">
      <button onClick={showSignIn}> SignIn </button>      
      <button onClick={showLogIn}> LogIn </button>
      <br />

      <ToggleDisplay />
    </div>
  );
}

export default App;
