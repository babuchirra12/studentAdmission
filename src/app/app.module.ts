import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentAdmisiionComponent } from './student-admisiion/student-admisiion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { PreviewAdmissionDetailsComponent } from './preview-admission-details/preview-admission-details.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { EditStudentDetailsComponent } from './edit-student-details/edit-student-details.component';
import { StudentDetailsListComponent } from './student-details-list/student-details-list.component';
import { LoginComponent } from './login/login.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { OtpComponent } from './otp/otp.component';
@NgModule({
  declarations: [AppComponent, StudentAdmisiionComponent, PreviewAdmissionDetailsComponent, UploadDocumentsComponent, EditStudentDetailsComponent, StudentDetailsListComponent, LoginComponent, PaymentProcessComponent, OtpComponent],
  imports: [
    MaterialExampleModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
