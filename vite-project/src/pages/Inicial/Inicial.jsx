import { FormCriarTarefa, ListaTarefa } from "../../componentes";

import style from './Inicial.module.css'

const Inicial = () => {
    return (
     <div className={style.Inicial}>
        <FormCriarTarefa />
        <ListaTarefa />
     </div>
    );
};

export { Inicial };