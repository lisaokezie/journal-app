import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'edit-entry',
    loadChildren: () => import('./edit-entry/edit-entry.module').then( m => m.EditEntryPageModule)
  },
  {
    path: 'add-entry',
    loadChildren: () => import('./add-entry/add-entry.module').then( m => m.AddEntryPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'tags',
    loadChildren: () => import('./tags/tags.module').then( m => m.TagsPageModule)
  },
  {
    path: 'tag-entries',
    loadChildren: () => import('./tag-entries/tag-entries.module').then( m => m.TagEntriesPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
