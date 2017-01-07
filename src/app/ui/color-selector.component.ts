import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'color-selector',
    templateUrl: './app/ui/color-selector.component.html',
    styleUrls: ['./app/ui/color-selector.component.css']
})
export class ColorSelectorComponent implements OnInit {

    @Input() colors: string[];
    @Output() colorSelected = new EventEmitter;

    _visible: boolean;

    constructor() { }

    show() {
        this._visible = true;
    }

    select(color: string) {
        this.colorSelected.next(color);
        this._visible = false;
    }

    ngOnInit() {
        this._visible = false;

        if (this.colors.length == 0) {
            this.colors = ['lightblue', 'red', 'yellow', 'black', 'white', 'green']
        }
    }
}