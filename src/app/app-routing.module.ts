import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent1Component } from './test-component1/test-component1.component';
import { TestComponent2Component } from './test-component2/test-component2.component';
import { TestComponent3Component } from './test-component3/test-component3.component';


const routes: Routes = [
  {path : " ", pathMatch: "full" ,redirectTo : "/home" },
  {path : "Home" , component :TestComponent1Component },
  {path : "Venue" , component : TestComponent2Component},
  {path : "Locations" , component : TestComponent3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
