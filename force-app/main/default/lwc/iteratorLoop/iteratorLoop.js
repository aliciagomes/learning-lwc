import { LightningElement } from 'lwc';

export default class IteratorLoop extends LightningElement {

    employee={
        Fname:'Maria',
        Lname:'Benevenuto',
        Age:30,
        City:'Carmopolis'
    }

    employeeList=[
        {
        Fname:'Rachel',
        Lname:'Simoes',
        Age:35,
        City:'Recife'
        },
        {
            Fname:'Lucas',
            Lname:'Andrade',
            Age:34,
            City:'São Paulo'
        },
        {
            Fname:'Camile',
            Lname:'Francisca',
            Age:37,
            City:'Rio de Janeiro'
        }
    ]
}