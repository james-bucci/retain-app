import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-card',
    templateUrl: 'app/ui/notecard.component.html',
    styleUrls: ['app/ui/notecard.component.css']
})
export class NotecardComponent implements OnInit {
    showCheckmark: boolean = false;
    @Input() note = {};
    @Output() completed = new EventEmitter;

    taskCompleted() {
        this.completed.next(this.note);
    }

    toggleCheckmark() {
        this.showCheckmark = !this.showCheckmark;
    }
    constructor() { }

    ngOnInit() { }
}