import { LightningElement } from 'lwc';

export default class WireExample4 extends LightningElement {
     name='';

    handleClick(event)
    {
        this.name=this.template.querySelector('lightning-input.inputclass').value;
    }
}