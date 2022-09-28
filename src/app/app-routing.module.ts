import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./components/home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'about', 
    loadChildren: () => import('./components/in-work-page/in-work-page.module').then( m => m.InWorkPageModule),
  },
  {
    path: 'contacts', 
    loadChildren: () => import('./components/in-work-page/in-work-page.module').then( m => m.InWorkPageModule),  
  },
  {
    path: 'projects', 
    loadChildren: () => import('./components/in-work-page/in-work-page.module').then( m => m.InWorkPageModule),  
  },
  {
    path: 'stories', 
    loadChildren: () => import('./components/in-work-page/in-work-page.module').then( m => m.InWorkPageModule),  
  },
  {
    path:  '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then( m => m.PageNotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
