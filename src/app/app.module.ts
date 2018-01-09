import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';
import { ConsumerComponent } from './consumer/consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    ConsumerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
