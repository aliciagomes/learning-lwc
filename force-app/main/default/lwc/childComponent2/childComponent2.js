import { LightningElement } from 'lwc';

export default class ChildComponent2 extends LightningElement {
    firstName='';
    lastName='';

    handleChangeFirstName(event)
    {
        this.firstName=event.target.value;
    }

        handleChangeLastName(event)
    {
        this.lastName=event.target.value;
    }

    handleClick(event)
    {
        const searchEvent=new CustomEvent('getsearchevent',
            {
                detail:
                {
                  FirstName : this.firstName,
                  LastName : this.lastName
                }
            });
        this.dispatchEvent(searchEvent);
    }
}

/*
Para comunicação entre componente filho passando para o pai, é através de Custom Event.
O evento getsearchevent trará o valor de firstname e lastname no detail que será passado para o componente pai.
*/