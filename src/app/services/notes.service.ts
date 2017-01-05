import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const path : string = '/notes';

@Injectable()
export class NotesService {

    constructor(private api: ApiService) { }

    createNote(note) {
        return this.api.post(path, note);
    }

    getNotes() {
        return this.api.get(path);
    }

    completeNote(note) {
        return this.api.delete(`${path}/${note.id}`);
    }


}