import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home/home.module').then((m) => m.HomePageModule),
  // },
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full',
//   },
//   {
//     path: 'detail/:id',
//     loadChildren: () =>
//       import('./screens/detail/detail.module').then((m) => m.DetailPageModule),
//   },
// ];
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),

},
{
  path: 'registro',
  loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),

},
{
     path: 'home',
     loadChildren: () =>
     import('./home/home.module').then((m) => m.HomePageModule),
   },
  {
    path: 'venta',
    loadChildren: () => import('./venta/venta.module').then( m => m.VentaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
