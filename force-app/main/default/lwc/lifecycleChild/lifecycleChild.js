import { LightningElement } from 'lwc';

export default class LifecycleChild extends LightningElement {

    error;
    stack;
    
    constructor()
    {
        super(); //calling constructor of parent class LightningElement
        console.log('In Child Constructor');
    }

    connectedCallback()
    {
        console.log('In Child connectedCallback method');
    }

    renderedCallback()
    {
        console.log('In Child renderedCallback method'); 
    }

    disconnectedCallback()
    {
        console.log('In Child disconnectedCallback method');
    }

    errorCallback(error, stack)
    {
        console.log('In Child errorCallback method');
        this.error=error;
        this.stack=stack;
    }
}