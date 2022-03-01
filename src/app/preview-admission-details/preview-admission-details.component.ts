import { Component, OnInit } from '@angular/core';
import { Service } from "../service/service.service";
import { Router } from '@angular/router';
import { Model as model } from '../model/model';

@Component({
  selector: 'app-preview-admission-details',
  templateUrl: './preview-admission-details.component.html',
  styleUrls: ['./preview-admission-details.component.css']
})
export class PreviewAdmissionDetailsComponent implements OnInit {
  studentDetails: any={};
  // studentDetails: any = {
  //   studentDetails:{
  //     communicationDetails:{}
  //   },
  //   qualifiedExamDetails:{
  //     qualifiedExamDetailsLookup:{}

  //   }
  // };

  qualifiedExamDetails: Array<model.QualifiedExamDetailsLookup> = [];
  courseAppliedList: Array<model.CourseAppliedLookup> = [];

  constructor(private router: Router, private service: Service) { }

  ngOnInit(): void {
    this.studentDetails = this.service.getStudentAdmissiondtails();
    console.dir(this.studentDetails);
  }

  submitAdmissionDetails(){
    this.service.post_admissiondetails(this.studentDetails).subscribe((data: any) => {
      this.qualifiedExamDetails = data;
      //this.router.navigate(["upload-documents"]);
      this.router.navigateByUrl('upload-documents', { state: data });
      console.dir(this.courseAppliedList);
    });
  };


  gotoEditDetails(){
    this.service.setStudentAdmissiondtails(this.studentDetails);
    this.router.navigate(["edit-student-details"]);
  }
  
  
}
