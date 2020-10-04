import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';

const Routes =[
  {path: 'news', component : NewsComponent}
];

@NgModule({

  imports: [[RouterModule.forRoot(Routes)]],
  exports: [RouterModule]
})
export class AppRoutingModule { }
