import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App } from './app/app';
import { MainComponent } from './app/containers/main';
import { NavbarComponent } from './app/ui/navbar.component';
import { NotecardComponent } from './app/ui/notecard.component';
import { NotesComponent } from './app/containers/notes.component';
import { NoteCreatorComponent } from './app/ui/note-creator.component';
import { ColorSelectorComponent } from './app/ui/color-selector.component';

import { NotesService } from './app/services/notes.service';
import { ApiService } from './app/services/api.service';

@NgModule({
    declarations: [
        App,
        MainComponent,
        NavbarComponent,
        NotecardComponent,
        NotesComponent,
        NoteCreatorComponent,
        ColorSelectorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule       
    ],
    providers : [
        ApiService,
        NotesService
    ],
    bootstrap: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
