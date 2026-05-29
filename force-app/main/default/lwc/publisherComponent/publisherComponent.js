import { MessageContext, publish } from 'lightning/messageService'; // necessário quando há esse tipo de comunicação
import { LightningElement, wire } from 'lwc';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c';// necessário quando há esse tipo comunicação

export default class PublisherComponent extends LightningElement {
 firstName='';
    lastName='';
    @wire (MessageContext) messageContext;
    
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
        //code to pass message to subscribers
        let payload={firstname:this.firstName, lastname:this.lastName};
        publish(this.messageContext, ComrevoChannel, payload);
    }
}

//Na comunicação entre dois componentes que não tem relação, o publisher é o componente que envia os dados
//para o subscriber.