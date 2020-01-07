import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materialimports.module';
import { TrackerModule } from './tracker/tracker.module';
import { HomeContainerComponent } from './home/home-container/home-container.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { GameLogModule } from './game-log/game-log.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    GameLogModule,
    MaterialModule,
    TrackerModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
