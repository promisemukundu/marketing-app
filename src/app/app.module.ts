import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CopyrightComponent } from './shared/copyright/copyright.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { QuotationComponent } from './quotation/quotation.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomeFeaturesComponent } from './home/home-features/home-features.component';
import { AboutHomeComponent } from './home/about-home/about-home.component';
import { VideoComponent } from './home/video/video.component';
import { ServicesHomeComponent } from './home/services-home/services-home.component';
import { ProjectComponent } from './home/project/project.component';
import { QouteComponent } from './home/qoute/qoute.component';
import { TeamComponent } from './home/team/team.component';
import { ImageSourcePipe } from './shared/pipes/image-source.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    FeaturesComponent,
    OurTeamComponent,
    TestimonialComponent,
    QuotationComponent,
    ErrorPageComponent,
    CarouselComponent,
    HomeFeaturesComponent,
    AboutHomeComponent,
    VideoComponent,
    ServicesHomeComponent,
    ProjectComponent,
    QouteComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderComponent,
    NavbarComponent,
    CopyrightComponent,
    FooterComponent,
    ImageSourcePipe,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
