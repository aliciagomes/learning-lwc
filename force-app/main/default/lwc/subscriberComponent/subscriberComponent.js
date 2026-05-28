import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c';

export default class SubscriberComponent extends LightningElement {
    name='';
    subscription=null;
    @wire (MessageContext) messageContext;

    connectedCallback()
    {
        this.handleSubscribe();
    }

    disconnectedCallback()
    {
        this.handleUnsubscribe()
    }

    handleSubscribe()
    {
        if(!this.subscription)
        {
            this.subscription=subscribe(this.messageContext, ComrevoChannel, 
                (parameter)=>
                {
                    this.name=parameter.name;
                }
                );
        }
    }

    handleUnsubscribe()
    {
        unsubscribe(this.subscription);
        this.subscription=null;
    }
}
//connectedCallback() e disconnectedCallback():
//métodos executados automaticamente pelo framework em momentos específicos do ciclo de vida do componente.
//connectedCallback() - 
/*
É executado quando o componente é inserido no DOM.

Na prática:

quando o componente aparece na tela
quando é renderizado pela primeira vez
quando volta a ser inserido após remoção
*/

//disconnectedCallback() - 
/*
É executado quando o componente é removido do DOM.

Na prática:

navegação de página
fechamento de modal
troca de aba
renderização condicional (if:true)
destruição do componente
*/