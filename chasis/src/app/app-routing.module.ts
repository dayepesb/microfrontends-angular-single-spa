import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [{
  path: 'main',
  component: MainComponent,
  children: [{
    path: 'app1',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'child1' }
  }, {
    path: 'app2',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'child2' }
  }, {
    path: '**',
    redirectTo: 'main/app1'
  }]
}, {
  path: '**',
  redirectTo: 'main/app1'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
