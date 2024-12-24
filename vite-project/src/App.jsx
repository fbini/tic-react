import { Cabecalho, Conteudo, Rodape } from './componentes';

import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
        <h1>Titulo</h1>
        <p>Texto Texto Texto</p>
      </Conteudo>
      <Rodape criador="Bini " />
    </>
  )
};

export { App };
