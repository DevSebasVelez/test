import React from 'react';
import ReactDOM from 'react-dom/client';
// import  App  from './FirstApp'; //Importación por defecto
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';





//Forma de renderizar componente en el DOM
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp tittle='Hola' subtittle={ 123 }/> */}
        <CounterApp value={ 10 }/>
    </React.StrictMode>
)

