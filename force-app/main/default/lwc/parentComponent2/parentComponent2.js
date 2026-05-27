import { LightningElement } from 'lwc';

export default class ParentComponent2 extends LightningElement {
    name='';

    handleEvent(event)
    {
        this.name=event.detail;
    }
}