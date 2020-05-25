import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { PostDetailsComponent } from "./pages/post-details/post-details.component";
import { PostResolver } from "./resolvers/post.resolver";
import { ErrorComponent } from "./pages/error/error.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "home", component: HomepageComponent },
  {
    path: "post/:slug",
    component: PostDetailsComponent,
    resolve: {
      post: PostResolver
    }
  },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
