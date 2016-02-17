import { Component } from 'angular2/core';
import {AwesomeComponent} from "./awesome-component/awesome-component";

@Component({
    selector: 'my-app',
    directives: [AwesomeComponent],
    template: '<awesome-component></awesome-component>'
})

export class App {
    constructor () {}
}