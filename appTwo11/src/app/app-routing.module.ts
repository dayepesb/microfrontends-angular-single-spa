import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTwoComponent } from './components/page-two/page-two.component';

const routes: Routes = [{
  path:'main/app2',
  component: PageTwoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
