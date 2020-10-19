import React from 'react';

import Routes from './routes';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Routes />  
  );
}

export default App;


//Variavel ambiente - que não fica exposta para o mundo
//Variavel q se consegue customizar dependendo do ambiente da aplicação.
//Se desenvolvimento ou produção. E nao vai para o github

//Toda variável ambiente(.env) no React precisa começar com "REACT_APP"
//O resto que vem depois tanto faz, pode se colocar qualquer nome, ex:"_MAPBOX_TOKEN"

//Ir no .gitignore e adiconar o .env, para não ser mandado pro github
//E ninguem utilizar o nosso token

//Restartar a aplicação React, para que ela leia o novo arquivo .env criado
//Ctrl+ C na area de termina do vscode
//yarn start