import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-creator',
    templateUrl: './app/ui/note-creator.component.html',
    styleUrls: ['./app/ui/note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
    
    @Output() noteCreated = new EventEmitter;
<<<<<<< HEAD

    newNote: {
        title: string,
        value: string,
        color: string
    };
    
    ColorSelector: boolean = false;
=======
    newNote: { 
        title: string; 
        value: string;
        color: string;
    };
>>>>>>> aeef29cd2381cd99b8132413cffef422ec7bb5ec
    expandedForm: boolean;    
    
    colors = ['lightblue', 'red', 'yellow', 'black', 'white', 'lightgreen'];

    onCreateNote() {
<<<<<<< HEAD
        console.log('Creating Note:', this.newNote);

        if (this.newNote.title && this.newNote.value) {
=======

        console.log('Creating Note:', this.newNote);
        if ( this.newNote.title ) {
>>>>>>> aeef29cd2381cd99b8132413cffef422ec7bb5ec
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
            color: 'lightblue'
        };        
        this.expandedForm = false;
    }

    showColorSelector(value: boolean) {
        this.showColorSelector = value;
    }

    expandForm(value: boolean) {
        this.expandedForm = value;
    }

    constructor() {
        this.reset();
     }

    ngOnInit() { }
}