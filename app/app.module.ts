
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  //This line was not needed after all; adding must have cleared the cache 
  // Thanks anyway to blog.angularindepth.com/how-to-manually-bootstrap-an-angular-application-9a36ccf86429
  //ngDoBootstrap(app) {}
}