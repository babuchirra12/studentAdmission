import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from "../service/service.service";

import { Model as model } from '../model/model';

@Component({
  selector: 'app-student-admisiion',
  templateUrl: './student-admisiion.component.html',
  styleUrls: ['./student-admisiion.component.css']
})
export class StudentAdmisiionComponent implements OnInit {

  constructor(private router: Router, private service: Service) { }

  ngOnInit(): void {
    this.get_CourseCategoryLookup();
    this.get_QualifiedExamDetailsLookup();
    this.get_UniversityLookup();
    this.get_LSCLookup();
  }

  admissionDetails: any = {
    studentDetails:{
      communicationDetails:{}
    },
    qualifiedExamDetails:{
      qualifiedExamDetailsLookup:{}

    }
  };
  courseCategories: Array<model.CourseCategoryLookup> = [];
  courseAppliedList: Array<model.CourseAppliedLookup> = [];
  universities: Array<model.UniversityLookup> = [];
  skillCenters: Array<model.LSCLookup> = [];
  qualifiedExamDetails: Array<model.QualifiedExamDetailsLookup> = [];
  subjects: Array<string> = [];
  skillsCenterColleges:Array<string>=[];


  gotoDetails(data : any) {
    console.dir(data);
    console.dir(this.admissionDetails);
    this.service.setStudentAdmissiondtails(this.admissionDetails);
    this.router.navigate(["preview-student-details"]);

  }

  get_CourseCategoryLookup() {
    this.service.get_CourseCategoryLookup().subscribe((data: any) => {
      this.courseCategories = data;
      console.dir(this.courseCategories);
    });
  };
  get_QualifiedExamDetailsLookup() {
    this.service.get_QualifiedExamDetailsLookup().subscribe((data: any) => {
      this.qualifiedExamDetails = data;
      console.dir(this.courseAppliedList);
    });
  };
  get_UniversityLookup() {
    this.service.get_UniversityLookup().subscribe((data: any) => {
      this.universities = data;
      console.dir(this.courseAppliedList);
    });
  };
  get_LSCLookup() {
    this.service.get_LSCLookup().subscribe((data: any) => {
      this.skillCenters = data;
      console.dir(this.courseAppliedList);
    });
  };
  onCourseCategory(value: model.CourseCategoryLookup) {
    // alert(value);
    this.courseAppliedList = value.courseApplied;
  }
  onQualifiedExamDetails(value:model.QualifiedExamDetailsLookup){ 
    this.subjects=value.subjects;
  };
  onSkillCenters(value:model.LSCLookup){
    this.skillsCenterColleges=value.centers;
  };

  submitAdmissionDetails(){
    this.service.post_admissiondetails(this.admissionDetails).subscribe((data: any) => {
      this.qualifiedExamDetails = data;
      console.dir(this.courseAppliedList);
    });
  };

  
  paymntProcss(){
    this.router.navigate(["paymentProcess"]);

  }

}
