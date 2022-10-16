import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UtlModule } from './utl/utl.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UtlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
