import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "./material/material.module";
import {ReactiveFormsModule} from '@angular/forms';

import { HeaderComponent } from "./component/header/header.component";
import { FooterComponent } from "./component/footer/footer.component";
import { AppRoutingModule } from "../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopbarComponent } from './component/topbar/topbar.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        TopbarComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
    ],
    exports:[
        MaterialModule,

        HeaderComponent,
        FooterComponent,
    ]
})
export class SharedModule{}