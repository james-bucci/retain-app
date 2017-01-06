import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    templateUrl: './app/ui/note-creator.component.html',
    styleUrls: ['./app/ui/note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
    
    @Output() noteCreated = new EventEmitter;

    newNote: {
        title: string,
        value: string,
        color: string
    };
    backgroundColor : string;
    expandedForm: boolean;        
    colors = ['lightblue', 'red', 'yellow', 'black', 'white', 'lightgreen'];

    onCreateNote() {
        console.log('Creating Note:', this.newNote);
        if (this.newNote.title && this.newNote.value) {
            this.newNote.color = this.backgroundColor;
            this.noteCreated.next(this.newNote);  
            this.resetForm(); 
        }
    }    

    onCancelNote() {
        console.log('Canceling Note Creation'); 
        this.resetForm(); 
    }  

    onColorSelected(color: string) {
        this.backgroundColor = color;
    }

    resetForm() {
        this.newNote = { title: '', value: '', color: 'white' };        
        this.expandedForm = false;
        this.backgroundColor = 'white';
    }

    expandForm(value: boolean) {
        this.expandedForm = value;
    }

    constructor() {
        this.resetForm();
     }

    ngOnInit() { }
}