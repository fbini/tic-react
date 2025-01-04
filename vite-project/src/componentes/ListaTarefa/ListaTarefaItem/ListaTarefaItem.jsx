import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO, CampoTexto } from '../../../componentes';

import style from './ListaTarefaItem.module.css';


const ListaTarefaItem = (props) => {
const { id, nome } = props;

const [ estaEditando, setEstaEditando ] = useState(false);

const { editarTarefa, removerTarefa } = useAppContext();

    return(
    <li className={ style.ListaTarefaItem }>
        {estaEditando && (
           <CampoTexto
           defaultValue={nome}
           onChange = {event => editarTarefa(id, event.currentTarget.value)}
           onBlur = {() => setEstaEditando(false)} 
           autoFocus
            />
        )}
        {!estaEditando && (
            <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
        )}
        
        <Botao texto="-" 
        tipo={TIPO_BOTAO.SECUNDARIO} 
        onClick={() => removerTarefa(id)}
        />
    </li>
    );
};

export { ListaTarefaItem };