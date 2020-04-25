import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule} from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InsettiComponent } from './insetti/insetti.component';
import { PesciComponent } from './pesci/pesci.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InsettiComponent,
    PesciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
