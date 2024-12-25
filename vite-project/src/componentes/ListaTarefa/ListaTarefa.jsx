
import { ListaTarefaItem } from './ListaTarefaItem'

import style from './ListaTarefa.module.css';


const ListaTarefa = () => {
    const tarefas = [
        { id: 1, nome: 'Item 1'},
        { id: 1, nome: 'Item 2'},
        { id: 1, nome: 'Item 3'},
    ];

    return (
       
        <ul className={style.ListaTarefa}>
            {tarefas.map(item => <ListaTarefaItem key= {item.nome} nome={item.nome}/>)}
        </ul>
    );
};

export {ListaTarefa};