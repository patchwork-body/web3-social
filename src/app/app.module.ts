import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LinkComponent } from './navigation/link/link.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoogleComponent } from './login/google/google.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    NavigationComponent,
    LinkComponent,
    LoginComponent,
    PageNotFoundComponent,
    GoogleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
