import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
    selector: 'notes',
    templateUrl: './app/containers/notes.component.html',
    styleUrls: ['./app/containers/notes.component.css']
})
export class NotesComponent implements OnInit {

    notes : {id:number, title:string, value:string, color:string}[] = [];  

    constructor(private notesService: NotesService) {}

    ngOnInit() { 
        this.notesService.getNotes()
            .subscribe(notes => this.notes = notes.data);
    }

    onNoteCreated(note) {
        this.notesService.createNote(note)
            .subscribe(note => this.notes.push(note));
    }

    onCompleted(note) {
        this.notesService.completeNote(note)
            .subscribe(note => {
                const index = this.notes.findIndex(localNote => localNote.id === note.id);
                this.notes.splice(index, 1);
            });
    }

}