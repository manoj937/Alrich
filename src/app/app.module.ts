import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule, BsDropdownModule, CarouselModule} from 'ngx-bootstrap';
import { HeadertopComponent } from './tiles/headertop/headertop.component';
import { HeadermainComponent } from './tiles/headermain/headermain.component';
import { HeadersearchComponent } from './tiles/headersearch/headersearch.component';
import { FooterComponent } from './tiles/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadertopComponent,
    HeadermainComponent,
    HeadersearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
