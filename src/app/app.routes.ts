import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home.component";
import {AboutComponent} from "./components/about.component";
import {AboutComponent, PostsComponent} from "./components/posts.component";
import {AboutComponent} from "./components/navbar.component";


export const allAppComponents = [HomeComponent, AboutComponent, PostsComponent];

export const routes: Routes = [
	{path: "posts", component: PostsComponent},
	{path: "about", component: AboutComponent},
	{path: "", component: HomeComponent},
	{path: "**", redirectTo: ""}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);