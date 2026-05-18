import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    employee={
        Fname:'Maria',
        Lname:'Benevenuto',
        Age:30,
        City:'Carmopolis'
        }

        get getEmployeeRank()
        {
            const rank = this.employee.Age>=50?'One':this.employee.Age>30?'Second':'Third';
            return rank;
        }
}