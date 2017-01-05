import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-selector',
    templateUrl: './app/ui/color-selector.component.html',
    styleUrls: ['./app/ui/color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {
    
    @Input() colors : string[];
    @Output() colorSelected = new EventEmitter;

    constructor() {}

    selectColor(color: string) {
        console.log('Color Selected:', color);
        this.colorSelected.next(color);
    }

    ngOnInit() {
        if (this.colors.length == 0) {
            this.colors = ['lightblue', 'red', 'yellow', 'black', 'white', 'green']
        }
    }
}