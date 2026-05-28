import { MessageContext, publish } from 'lightning/messageService'; // necessário quando há esse tipo de comunicação
import { LightningElement, wire } from 'lwc';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c';// necessário quando há esse tipo comunicação

export default class PublisherComponent extends LightningElement {
    name='';
    @wire (MessageContext) messageContext;
    
    handleChange(event)
    {
        this.name=event.target.value;
    }

    handleClick(event)
    {
        //code to pass message to subscribers
        let payload={name:this.name};
        publish(this.messageContext, ComrevoChannel, payload);//passando os dados para o outro componente
    }
}

//Na comunicação entre dois componentes que não tem relação, o publisher é o componente que envia os dados
//para o subscriber.