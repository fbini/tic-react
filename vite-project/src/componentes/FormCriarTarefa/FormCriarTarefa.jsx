import { Botao, CampoTexto } from "../../componentes";

import style from './FormCriarTarefa.module.css';

const FormCriarTarefa = () => {
    return(
        <form className={style.FormCriarTarefa}>
            <CampoTexto />
            <Botao texto="+" />
        </form>
    );
};

export { FormCriarTarefa };