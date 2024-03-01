import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ContactComponent } from './contact/contact.component';
import { EyewearComponent } from './eyewear/eyewear.component';
import { FooterComponent } from './footer/footer.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { HomeComponent } from './home/home.component';
import { WatchesComponent } from './watches/watches.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    AccessoriesComponent,
    ClothingComponent,
    ContactComponent,
    EyewearComponent,
    FooterComponent,
    PerfumesComponent,
    HomeComponent,
    WatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
