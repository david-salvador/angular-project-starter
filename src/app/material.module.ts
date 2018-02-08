import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatListModule,
    MatIconModule,
    MatToolbarModule, 
    MatButtonModule,

    MatInputModule, MatProgressSpinnerModule, MatCardModule,

    MatSidenavModule

    } from '@angular/material';

@NgModule({
    imports: [

    ],
    exports:[
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,

        MatInputModule, MatProgressSpinnerModule, MatCardModule,

        MatSidenavModule
    ]
})
export class MaterialModule{ }