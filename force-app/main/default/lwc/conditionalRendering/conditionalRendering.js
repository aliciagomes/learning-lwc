import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    isChecked = false;
    showMessage = false;

    handleCheckboxChange(event) {
        this.isChecked = event.target.checked;
        this.showMessage = this.isChecked;
    }
}