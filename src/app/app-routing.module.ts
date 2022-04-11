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
import { BranchComponent } from './pages/category/branch/branch/branch.component';
import { FetchBranchComponent } from './pages/category/branch/fetch-branch/fetch-branch.component';
import { UpdateBranchComponent } from './pages/category/branch/update-branch/update-branch.component';
import { ChapterComponent } from './pages/category/chapters/chapter/chapter.component';
import { FetchChaptersComponent } from './pages/category/chapters/fetch-chapters/fetch-chapters.component';
import { UpdateChapterComponent } from './pages/category/chapters/update-chapter/update-chapter.component';
import { QuestionSetComponent } from './pages/category/question-set/question-set/question-set.component';
import { FetchQuestionSetComponent } from './pages/category/question-set/fetch-question-set/fetch-question-set.component';
import { UpdateQuestionSetComponent } from './pages/category/question-set/update-question-set/update-question-set.component';
import { FetchQuestionsWayComponent } from './pages/category/question-set/fetch-questions-way/fetch-questions-way.component';
import { QuestionAnswerComponent } from './pages/category/question-answer/question-answer/question-answer.component';
import { FetchQuestionAnswerComponent } from './pages/category/question-answer/fetch-question-answer/fetch-question-answer.component';
import { UpdateQuestionAnswerComponent } from './pages/category/question-answer/update-question-answer/update-question-answer.component';
import { UploadFileRootCategoryComponent } from './pages/category/root-category/upload-file-root-category/upload-file-root-category.component';

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
        },
        {
          path: 'branch', component: BranchComponent
        },
        {
          path: 'fetchBranch', component: FetchBranchComponent
        },
        {
          path: 'updateBranch/:id', component: UpdateBranchComponent
        },
        {
          path: 'chapter', component: ChapterComponent
        },
        {
          path: 'fetchChapters', component: FetchChaptersComponent
        },
        {
          path: 'updateChapter/:id', component: UpdateChapterComponent
        },
        {
          path: 'questionSet', component: QuestionSetComponent
        },
        {
          path: 'fetchQuestionSet', component: FetchQuestionSetComponent
        },
        {
          path: 'updateQuestionSet/:id', component: UpdateQuestionSetComponent
        },
        {
          path: 'fetchQuestionsWay', component: FetchQuestionsWayComponent
        },
        {
          path: 'questionAnswer', component: QuestionAnswerComponent
        },
        {
          path: 'fetchQuestionAnswer', component: FetchQuestionAnswerComponent
        },
        {
          path: 'updateQuestionAnswer/:id', component: UpdateQuestionAnswerComponent
        },
        {
          path: 'uploadRootCategoryFile', component: UploadFileRootCategoryComponent
        },

        
        ]
        
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
