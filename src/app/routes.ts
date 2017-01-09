import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainComponent } from './containers/main';
import { NotesComponent } from './containers/notes.component';
import { NavbarComponent } from './ui/navbar.component';
import { NotecardComponent } from './ui/notecard.component';
import { NoteCreatorComponent } from './ui/note-creator.component';
import { AboutComponent } from './ui/about.component';

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot([
    { path: '', component: MainComponent,
        children: [
            { path: '', component: NotesComponent },
            { path: 'about', component: AboutComponent, 
                children : [
                    { path: '', component: NotecardComponent },
                    { path : 'aboutchild', component: NoteCreatorComponent }
                ]
            } 
        ]
    },
    { path: '**', redirectTo: 'about', pathMatch: 'full'}
]);


