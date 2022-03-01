import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppContants } from '../constants/appConstants';
import { Model as model } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class Service {

  adminDetails: any = {};
  constructor(private httpClient: HttpClient) { }

  get_CourseCategoryLookup() {
    return this.httpClient.get<Array<model.CourseCategoryLookup>>(AppContants.GET_CourseCategoryLookup());
  }

  get_QualifiedExamDetailsLookup() {
    return this.httpClient.get<Array<model.QualifiedExamDetailsLookup>>(AppContants.GET_QualifiedExamDetailsLookup());
  }

  get_UniversityLookup() {
    return this.httpClient.get<Array<model.UniversityLookup>>(AppContants.GET_UniversityLookup());
  }

  get_LSCLookup() {
    return this.httpClient.get<Array<model.LSCLookup>>(AppContants.GET_LSCLookup());
  }

  post_admissiondetails(admissionDetails: any) {
    return this.httpClient.post<model.AdmissionDetailsResponse>(AppContants.POST_AdmissionDetails(), admissionDetails);
  }


  setStudentAdmissiondtails(adminDetails: any) {
    this.adminDetails = adminDetails;
  }

  getStudentAdmissiondtails() {
    return this.adminDetails;
  };
  get_Admissions(){
    return this.httpClient.get<Array<model.AdmissionDetailsResponse>>(AppContants.GET_Admissions());
  };
  post_UploadDocuments(studentId:any,doc:model.UploadedDocument){
    return this.httpClient.post(AppContants.POST_UploadDocuments(studentId),doc);
  };

  post_UploadFile(studentId:any,data:any){
    return this.httpClient.post<model.image>(AppContants.POST_UploadFile(studentId),data);
  };





}

