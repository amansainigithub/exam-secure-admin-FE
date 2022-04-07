import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DashboardAdminComponent } from './pages/dashboard/dashboard-admin/dashboard-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FetchRootCategoryComponent } from './pages/category/root-category/fetch-root-category/fetch-root-category.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { RootCategoryComponent } from './pages/category/root-category/root-category/root-category.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UpdateRootCategoryComponent } from './pages/category/root-category/update-root-category/update-root-category.component';
import { SubCategoryComponent } from './pages/category/sub-category/sub-category/sub-category.component';
import { FetchSubCategoryComponent } from './pages/category/sub-category/fetch-sub-category/fetch-sub-category.component';
import { UpdateSubCategoryComponent } from './pages/category/sub-category/update-sub-category/update-sub-category.component';
import { BootomCategoryComponent } from './pages/category/bottom-category/bootom-category/bootom-category.component';
import { FetchBootomCategoryComponent } from './pages/category/bottom-category/fetch-bootom-category/fetch-bootom-category.component';
import { UpdateBootomCategoryComponent } from './pages/category/bottom-category/update-bootom-category/update-bootom-category.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    DashboardAdminComponent,
    RootCategoryComponent,
    FetchRootCategoryComponent,
    UpdateRootCategoryComponent,
    SubCategoryComponent,
    FetchSubCategoryComponent,
    UpdateSubCategoryComponent,
    BootomCategoryComponent,
    FetchBootomCategoryComponent,
    UpdateBootomCategoryComponent,
    BranchComponent,
    FetchBranchComponent,
    UpdateBranchComponent,
    ChapterComponent,
    FetchChaptersComponent,
    UpdateChapterComponent,
    QuestionSetComponent,
    FetchQuestionSetComponent,
    UpdateQuestionSetComponent,
    FetchQuestionsWayComponent,
    QuestionAnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
