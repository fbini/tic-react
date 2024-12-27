import { Outlet } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape } from "../../componentes";


const LayoutPadrao = () => {
    return(
        <>
            <Cabecalho nomeUsuario="Joana" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador="Bini " />
        </>
    );
};

export { LayoutPadrao };