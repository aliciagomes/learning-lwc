import { LightningElement } from 'lwc';

export default class ParentComponent1 extends LightningElement {
    name="Maria Benevenuto";
}
/*
No componente pai conseguimos chamar o componente filho e alterar o valor da variável pública
name, que é a variável fullName do componente filho.

O componente filho pode ser um componente reutilizavel, e o componente pai é exposta em páginas.
*/