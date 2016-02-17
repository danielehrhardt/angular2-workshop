import { Component } from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
    selector: 'awesome-component',
    directives: [CORE_DIRECTIVES],
    templateUrl: 'components/awesome-component/awesome-component.html'
})

export class AwesomeComponent {
    public bindMe = 'Woohoo';
    public users:string[] = ["Liran", "Madhawa", "The Gil", "Reactislame"];

    clickToAlert () {
        alert('You are a goddamn genious');
    }
}