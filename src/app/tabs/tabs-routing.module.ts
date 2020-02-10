import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'entries',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../list-tab/list-tab.module').then(m => m.ListTabPageModule)
          },
          {
            path: 'detail/:id',
            children: [
              {
                path: '',
                loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)

              },
              {
                path:'edit',
                loadChildren: () => import('../edit-entry/edit-entry.module').then( m => m.EditEntryPageModule)

              }

            ]
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home-tab/home-tab.module').then(m => m.HomeTabPageModule)
          },
          {
            path: 'settings',
            loadChildren: () =>
            import('../settings/settings.module').then(m =>m.SettingsPageModule)
          },
          {
            path: 'favorites',
            children: [
              {
                path: '',
                loadChildren: () =>
                 import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
              },
              {
                path: 'detail/:id',
                children: [
                  {
                  path: '',
                  loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
                  },
                  {
                    path:'edit',
                    loadChildren: () => import('../edit-entry/edit-entry.module').then( m => m.EditEntryPageModule)
                  }
                ]
                
              }
            ] 
          },
          {
            path: 'tags',
            children: [
              {
                path: '',
                loadChildren: () => import('../tags/tags.module').then(m => m.TagsPageModule)
              },
              {
                path: 'tag-entries/:tag',
                children: [
                  {
                    path: '',
                    loadChildren: () => import('../tag-entries/tag-entries.module').then(m => m.TagEntriesPageModule)
                  },
                
                {
                  path: 'detail/:id',
                  children: [
                    {
                      path: '',
                      loadChildren: () => import('../detail/detail.module').then( m => m.DetailPageModule)
      
                    },
                    {
                      path:'edit',
                      loadChildren: () => import('../edit-entry/edit-entry.module').then( m => m.EditEntryPageModule)
      
                    }
      
                  ]
                }
              ]
              }
            ] 
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/entries',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
