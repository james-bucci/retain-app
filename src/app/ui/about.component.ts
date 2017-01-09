import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'about',
    template: `
        <div class="container">
            ABOUT COMPONENT
            <router-outlet></router-outlet>
        </div>
    `
})
export class AboutComponent implements OnInit, OnDestroy {
    constructor() { }
    ngOnDestroy() { console.log('Destroyed')}
    ngOnInit() { }
}