import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from '../service/service.service';

export interface AdmissionDetailsResponse {
 // id: number;
  applicationNumber: string;
  studentName: string;
  fatherName: string;
  course: string;
  mobile: string;
  email: string;
  lscName: string;


}



@Component({
  selector: 'app-student-details-list',
  templateUrl: './student-details-list.component.html',
  styleUrls: ['./student-details-list.component.css']
})
export class StudentDetailsListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['applicationNumber', 'studentName', 'fatherName', 'course', 'mobile', 'email', 'lscName'];
  ELEMENT_DATA: AdmissionDetailsResponse[] = [];
  dataSource = new MatTableDataSource<AdmissionDetailsResponse>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: Service) {

  }
  ngOnInit(): void {
    this.getAdmissionDetails();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  getAdmissionDetails() {
    this.service.get_Admissions().subscribe((data: any) => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<AdmissionDetailsResponse>(this.ELEMENT_DATA);
      console.dir(data);
    });
  };




}


