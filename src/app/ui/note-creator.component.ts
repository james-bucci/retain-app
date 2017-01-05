import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    templateUrl: './app/ui/note-creator.component.html',
    styleUrls: ['./app/ui/note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
    @Output() noteCreated = new EventEmitter;
    newNote = {};
    expandedForm: boolean;    

    onCreateNote() {
        //const { title, value, color } = this.newNote;
        //if (title & value) {
        console.log(this.newNote);
        this.noteCreated.next(this.newNote);  
        this.reset(); 
        //}
    }    

    onCancelNote() {
        console.log('Canceling Note'); 
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