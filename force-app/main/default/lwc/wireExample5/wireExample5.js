import { LightningElement } from 'lwc';

export default class WireExample5 extends LightningElement {
    fname='Maria';
    lname='Benevenuto';

    handleClick(event)
    {
        var input=this.template.querySelectorAll('lightning-input');

        input.forEach(function(element) 
        {
            if(element.name=="firstname")
            {
                this.fname=element.value
            }
            else if(element.name=="lastname")
            {
                this.lname=element.value
            }
        }
        , this);
    }
}