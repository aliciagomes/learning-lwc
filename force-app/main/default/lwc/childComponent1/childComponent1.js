import { LightningElement, api } from 'lwc';

export default class ChildComponent1 extends LightningElement {
    @api fullName='Parag Jambhulkar';
}
/*Utilizamos o decarator @api para tornar pública a variável do componente filho, assim o componente pai pode acessar
e até mesma alterar o valor dessa variável.
*/