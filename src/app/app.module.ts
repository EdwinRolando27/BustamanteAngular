import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DatosComponent } from './components/datos/datos.component';
import { RigthComponent } from './components/rigth/rigth.component';
import { PaisPeruComponent } from './components/pais-peru/pais-peru.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostComComponent } from './components/post-com/post-com.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DatosComponent,
    RigthComponent,
    PaisPeruComponent,
    FooterComponent,
    PostComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
