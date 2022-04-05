import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthguardGuard } from './authGuard/authguard.guard';
import { DashboardAdminComponent } from './pages/dashboard/dashboard-admin/dashboard-admin.component';
import { RootCategoryComponent } from './pages/category/root-category/root-category/root-category.component';
import { FetchRootCategoryComponent } from './pages/category/root-category/fetch-root-category/fetch-root-category.component';
import { UpdateRootCategoryComponent } from './pages/category/root-category/update-root-category/update-root-category.component';
import { SubCategoryComponent } from './pages/category/sub-category/sub-category/sub-category.component';
import { FetchSubCategoryComponent } from './pages/category/sub-category/fetch-sub-category/fetch-sub-category.component';
import { BootomCategoryComponent } from './pages/category/bottom-category/bootom-category/bootom-category.component';
import { FetchBootomCategoryComponent } from './pages/category/bottom-category/fetch-bootom-category/fetch-bootom-category.component';
import { UpdateBootomCategoryComponent } from './pages/category/bottom-category/update-bootom-category/update-bootom-category.component';
import { UpdateSubCategoryComponent } from './pages/category/sub-category/update-sub-category/update-sub-category.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'dashboard',canActivate:[AuthguardGuard],
        children: [
        {
           path: '', component: DashboardAdminComponent
        },
        {
          path: 'rootCategory', component: RootCategoryComponent
        },
        {
          path: 'fetchRootCategory', component: FetchRootCategoryComponent
        },
        {
          path: 'upadteRootCategory', component: UpdateRootCategoryComponent
        },
        {
          path: 'subCategory', component: SubCategoryComponent
        },
        {
          path: 'fetchSubCategory', component: FetchSubCategoryComponent
        },
        {
          path: 'updateSubCategory/:id', component: UpdateSubCategoryComponent
        },
        {
          path: 'bottomCategory', component: BootomCategoryComponent
        },
        {
          path: 'fetchBottomCategory', component: FetchBootomCategoryComponent
        },
        {
          path: 'updateBottomCategory/:id', component: UpdateBootomCategoryComponent
        }
        
        ]
        
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
