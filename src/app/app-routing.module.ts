import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { DatesComponent } from './components/dates/dates.component';

const routes: Routes = [
    {path: '', component: DatesComponent},
    {path: 'images/:date', component: ImageComponent},
    {path: '**', component: DatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
