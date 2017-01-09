import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-container',
    template: `
        <div>
            <main class="main">
                <navbar></navbar>
            </main>
            <router-outlet></router-outlet>
        </div>
    `
})
export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}