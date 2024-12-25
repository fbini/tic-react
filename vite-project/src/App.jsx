import { Cabecalho, Conteudo, Rodape } from './componentes';
import { Inicial } from './pages';

import './App.css';

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana" />
      <Conteudo>
          <Inicial />
      </Conteudo>
      <Rodape criador="Bini " />
    </>
  )
};

export { App };
