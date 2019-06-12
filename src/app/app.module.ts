import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { ReactiveFormsModule } from "@angular/forms";

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { WorksGifComponent } from './works-gif/works-gif.component';
import { WorkService } from './work.service';

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    WorksGifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
