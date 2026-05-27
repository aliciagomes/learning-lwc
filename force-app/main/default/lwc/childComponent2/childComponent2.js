import { LightningElement } from 'lwc';

export default class ChildComponent2 extends LightningElement {
    name='';

    handleChange(event)
    {
        this.name=event.target.value;
    }

    handleClick(event)
    {
        const searchEvent=new CustomEvent('getsearchevent',{detail:this.name});
        this.dispatchEvent(searchEvent);
    }
}

/*
Para comunicação entre componente filho passando para o pai, é através de Custom Event.
O evento getsearchevent trará o valor de name que será passado para o componente pai.
*/