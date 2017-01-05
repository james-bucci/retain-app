import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { App } from './app/app';
import { MainComponent } from './app/containers/main';
import { NavbarComponent } from './app/ui/navbar.component';
import { NotecardComponent } from './app/ui/notecard.component';
import { NotesComponent } from './app/containers/notes.component';
import { NoteCreatorComponent } from './app/ui/note-creator.component';

@NgModule({
    declarations: [
        App,
        MainComponent,
        NavbarComponent,
        NotecardComponent,
        NotesComponent,
        NoteCreatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule       
    ],
    bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
