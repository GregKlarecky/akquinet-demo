import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SideDrawerComponent } from "./components/side-drawer/side-drawer.component";
import { PostComponent } from "./components/post/post.component";
import { PostDetailsComponent } from "./pages/post-details/post-details.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    SideDrawerComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
