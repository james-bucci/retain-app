import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    templateUrl: './app/ui/note-creator.component.html',
    styleUrls: ['./app/ui/note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
    @Output() noteCreated = new EventEmitter;
    newNote: { 
        title: string; 
        value: string;
        color: string;
    };
    expandedForm: boolean;    

    onCreateNote() {

        console.log('Creating Note:', this.newNote);
        if ( this.newNote.title ) {
            this.noteCreated.next(this.newNote);  
            this.reset(); 
        }
    }    

    onCancelNote() {
        console.log('Canceling Note Creation'); 
        this.reset(); 
    }  

    reset() {
        this.newNote = {
            title: '',
            value: '',
            color: 'blue'
        };        
        this.expandedForm = false;
    }
    expandForm(value: boolean) {
        this.expandedForm = value;
    }

    constructor() {
        this.reset();
     }

    ngOnInit() { }
}