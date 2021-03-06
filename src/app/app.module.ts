import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PostComponent } from "./components/post/post.component";
import { PostDetailsComponent } from "./pages/post-details/post-details.component";
import { HttpClientModule } from "@angular/common/http";
import { ErrorComponent } from "./pages/error/error.component";
import { CommentComponent } from "./components/comment/comment.component";
import { AuthorComponent } from "./components/author/author.component";
import { SafeHTMLPipe } from "./pipes/safe-html.pipe";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { BackdropComponent } from "./components/backdrop/backdrop.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    PostComponent,
    PostDetailsComponent,
    ErrorComponent,
    CommentComponent,
    AuthorComponent,
    SafeHTMLPipe,
    SpinnerComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
