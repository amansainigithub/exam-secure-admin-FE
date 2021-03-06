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
import { FetchQuestionAnswerComponent } from './pages/category/question-answer/fetch-question-answer/fetch-question-answer.component';
import { UpdateQuestionAnswerComponent } from './pages/category/question-answer/update-question-answer/update-question-answer.component';
import { UploadFileRootCategoryComponent } from './pages/category/root-category/upload-file-root-category/upload-file-root-category.component';
import { UploadFileSubCategoryComponent } from './pages/category/sub-category/upload-file-sub-category/upload-file-sub-category.component';
import { UploadFileBottomCategoryComponent } from './pages/category/bottom-category/upload-file-bottom-category/upload-file-bottom-category.component';
import { UploadFileBranchComponent } from './pages/category/branch/upload-file-branch/upload-file-branch.component';
import { UploadFileChapterComponent } from './pages/category/chapters/upload-file-chapter/upload-file-chapter.component';
import { UploadFileQuestionSetComponent } from './pages/category/question-set/upload-file-question-set/upload-file-question-set.component';
import { UploadQuestionFilesComponent } from './pages/category/questions-files/upload-question-files/upload-question-files.component';
import { UpdateQuestionFilesComponent } from './pages/category/questions-files/update-question-files/update-question-files.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SaveFileResourceComponent } from './pages/fileResource/FileResourcePDF/save-file-resource/save-file-resource.component';
import { QuestionsListComponent } from './pages/category/question-answer/questions-list/questions-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { RootToEndComponent } from './pages/rootToEnd/root-to-end/root-to-end.component';
import { WatchSetsComponent } from './pages/watchSets/watch-sets/watch-sets.component';
import { WatchSetsByRootComponent } from './pages/watchSets/watch-sets-by-root/watch-sets-by-root.component';

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
    FetchQuestionAnswerComponent,
    UpdateQuestionAnswerComponent,
    UploadFileRootCategoryComponent,
    UploadFileSubCategoryComponent,
    UploadFileBottomCategoryComponent,
    UploadFileBranchComponent,
    UploadFileChapterComponent,
    UploadFileQuestionSetComponent,
    UploadQuestionFilesComponent,
    UpdateQuestionFilesComponent,
    SaveFileResourceComponent,
    QuestionsListComponent,
    RootToEndComponent,
    WatchSetsComponent,
    WatchSetsByRootComponent,
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
    MatDialogModule,
    CKEditorModule,
    MatPaginatorModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
