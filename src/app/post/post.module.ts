import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./post-list/post-list.module').then(m => m.PostListPageModule) },
  { path: ':id', loadChildren: './post-detail/post-detail.module#PostDetailPageModule' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostModule { }
