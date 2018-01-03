import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DemoPageComponent } from '../demo-page/demo-page.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
},
{
  path: 'demo',
  component: DemoPageComponent,
},
// from https://stackoverflow.com/a/40865173/2298807
{ path: '404', component: NotFoundComponent },
{ path: '**', component: NotFoundComponent }
// { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
