import { LightningElement } from 'lwc';

export default class LifecycleParent extends LightningElement {

    error;
    stack;
    
    constructor()
    {
        super(); //calling constructor of parent class LightningElement
        console.log('In Parent Constructor');
    }

    connectedCallback()
    {
        console.log('In Parent connectedCallback method');
    }

    
    renderedCallback()
    {
        console.log('In Parent renderedCallback method'); 
    }

    disconnectedCallback()
    {
        console.log('In Parent disconnectedCallback method');
    }

    errorCallback(error, stack)
    {
        console.log('In Parent errorCallback method');
        this.error=error;
        this.stack=stack;
    }
}