import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task.list';
import ComponentA from './components/componet_A/component_A';
import Example1 from './components/hooks/Example1';
import Explample2 from './components/hooks/Example2';
import MyContextComponent from './components/hooks/Example3'
import Example4 from './components/hooks/Example4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import ListContacts from './components/Contacts/listContacts';
import OpcionalRender from './components/pure/opcionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
// import SquareColor from './components/squareColor/squareColor';

function App() {



  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Greeting name="Julio"></Greeting> */}
      {/* <GreetingF name="Marcelo"></GreetingF> */}

      {/* <ComponentA ></ComponentA> */}

      {/* Componente de listado de tareas */}
      {/* <TaskListComponent items={list} /> */}

      {/* <Example1></Example1> */}
      {/* <Explample2></Explample2> */}
      {/* <MyContextComponent></MyContextComponent> */}
      {/* Todo lo que esté dentro de Example4 estará 
          marcado como props.children */}
      {/* <Example4 name="Cristian">
          <h3>
            Contenido del props.children
          </h3>

        </Example4> */}
      {/* <GreetingStyled name='Cristian' /> */}
      {/* </header> */}
      {/* <TaskListComponent>
      </TaskListComponent> */}

      {/* Ejemplos de login con Formik */}
      {/* <LoginFormik></LoginFormik> */}


      {/* <RegisterFormik /> */}


      {/* <OpcionalRender /> */}


      {/* 

      {/* <Father /> */}

    </div>
  );
}

export default App;
