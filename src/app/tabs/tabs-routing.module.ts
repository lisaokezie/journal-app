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
          },
          {
            path: 'add-entry',
            loadChildren: () => import('../add-entry/add-entry.module').then( m => m.AddEntryPageModule)
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
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../settings-tab/settings-tab.module').then(m => m.SettingsTabPageModule)
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