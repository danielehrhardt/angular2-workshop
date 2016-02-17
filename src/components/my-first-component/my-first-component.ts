import { Component } from 'angular2/core';
import {CORE_DIRECTIVES} from "angular2/common";

@Component({
    selector: 'my-first-component',
    directives: [CORE_DIRECTIVES],
    templateUrl: 'components/my-first-component/my-first-component.html'
})

export class MyFirstComponent {
    public bindMe = 'Woohoo';

    constructor () {}
}