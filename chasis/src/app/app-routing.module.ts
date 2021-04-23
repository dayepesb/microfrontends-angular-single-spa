import { InjectionToken, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EventBusService } from './lib/event.service';

const EVENT_BUS_SERVICE = new InjectionToken<string>("EventBusService"); 

const routes: Routes = [{
  path: 'main',
  component: MainComponent,
  children: [{
    path: 'app1',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'child1', eventBus: EVENT_BUS_SERVICE }
  }, {
    path: 'app2',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'child2', eventBus: EVENT_BUS_SERVICE }
  }, {
    path: '**',
    redirectTo: 'main/app1'
  }]
}, {
  path: '**',
  redirectTo: 'main/app1'
}];

@NgModule({
  providers: [{
      provide: EVENT_BUS_SERVICE,
      useClass: EventBusService
  }],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
