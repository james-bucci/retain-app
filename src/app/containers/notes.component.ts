import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
    selector: 'notes',
    templateUrl: './app/containers/notes.component.html',
    styleUrls: ['./app/containers/notes.component.css']
})
export class NotesComponent implements OnInit {
    notes: {}[] = [
        {title: 'Laundry' , value: 'Make sure its done before the weekend', color: 'lightblue' },
        {title: 'Exersise' , value: 'Yoga rocks!!', color: 'lightgreen' },
        {title: 'Work' , value: 'Finish projects for the department', color: 'yellow' },
        {title: 'Walk Dog' , value: 'Every night after dinner', color: 'red' }
    ];   

    onCompleted(index: number) {
        this.notes.splice(index, 1);
    }

    onNoteCreated(note) {
        this.notes.push(note);
    }

    constructor() { }

    ngOnInit() { }
}