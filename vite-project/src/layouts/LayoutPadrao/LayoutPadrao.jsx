
import { useAppContext } from "../../hooks";

import { Outlet } from 'react-router-dom';

import { Cabecalho, Conteudo, Rodape } from "../../componentes";


const LayoutPadrao = () => {
    const { criador } = useAppContext();
    return(
        <>
            <Cabecalho nomeUsuario="Joana" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador={ criador } />
        </>
    );
};

export { LayoutPadrao };