import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStudentDetailsComponent } from './edit-student-details/edit-student-details.component';
import { PreviewAdmissionDetailsComponent } from './preview-admission-details/preview-admission-details.component';
import { StudentAdmisiionComponent } from './student-admisiion/student-admisiion.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { StudentDetailsListComponent } from './student-details-list/student-details-list.component';
import {LoginComponent} from './login/login.component';
import {OtpComponent} from './otp/otp.component';
import {PaymentProcessComponent} from './payment-process/payment-process.component'

const routes: Routes = [
  { path: 'admission', component: StudentAdmisiionComponent },
  { path: 'student-details', component: StudentAdmisiionComponent },
  { path: 'preview-student-details', component: PreviewAdmissionDetailsComponent },
  { path: 'upload-documents', component: UploadDocumentsComponent },
  { path: 'edit-student-details', component: EditStudentDetailsComponent },
  { path: 'admissions', component: StudentDetailsListComponent },
  { path: '', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'paymentProcess', component: PaymentProcessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
