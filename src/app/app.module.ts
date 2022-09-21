import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { AboutComponent } from './components/about/about/about.component';
import { ExperienceComponent } from './components/experience/experience/experience.component';
import { PortfolioComponent } from './components/portfolio/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { CapsuleComponent } from './components/capsule/capsule.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SmallContactComponent } from './components/small-contact/small-contact.component';
import { Experience2Component } from './components/experience2/experience2.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    CapsuleComponent,
    FooterComponent,
    ProjectsComponent,
    SmallContactComponent,
    Experience2Component,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
