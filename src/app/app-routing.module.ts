import { CategoriesModule } from './pages/categories/categories.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule' },
  { path: 'entries', loadChildren: './pages/entries/entries.module#EntriesModule' },
  { path: 'reports', loadChildren: './pages/reports/reports.module#ReportsModule' },
  { path: '', loadChildren: './pages/reports/reports.module#ReportsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
