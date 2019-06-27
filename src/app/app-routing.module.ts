import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule' },
  { path: 'entries', loadChildren: './pages/entries/entries.module#EntriesModule' },
  { path: 'reports', loadChildren: './pages/reports/reports.module#ReportsModule' },
  { path: '', loadChildren: './pages/reports/reports.module#ReportsModule' },
  { path: '**', component: NotFoundComponent },
  
  //{ path: '', redirectTo: '/reports', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
