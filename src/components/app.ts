import { MyFirstComponent } from './my-first-component/my-first-component';
import { Component } from 'angular2/core';

@Component({
    selector: 'my-app',
    directives: [MyFirstComponent],
    template: '<my-first-component></my-first-component>'
})

export class App {
    constructor () {}
}