import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { EyewearComponent } from './eyewear/eyewear.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WatchesComponent } from './watches/watches.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'clothing',
    component:ClothingComponent
  },
  {
    path:'perfumes',
    component:PerfumesComponent
  },
  {
    path:'eyewear',
    component:EyewearComponent
  },
  {
    path:'watches',
    component:WatchesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
