

export declare namespace Model {




	interface AdmissionDetails {
		id: number;
		applicationNumber:string;
		admissionCategory:string;
		courseCategory:CourseCategoryLookup;
		courseApplied:CourseAppliedLookup;
		mediumOfInstruction:string;
		qualifiedExamDetails:QualifiedExamDetails;
		lscDistrict:LSCLookup;
		lscName:string;
		studentDetails:StudentDetails;
		
	}
	
	interface CourseCategoryLookup{
		id:number;
		name:string;
		code:string;
		courseApplied:Array<CourseAppliedLookup>
	}

	interface CourseAppliedLookup{
		id:number;
		name:string;
		code:string;
		
	}

	interface QualifiedExamDetails{
		id:number;
		qualifiedExamDetailsLookup:QualifiedExamDetailsLookup;
		mainSubjet1:string;
		groupSubject2:string;
		groupSubject3:string;
		yearOfPassing:string;
		regdNoOfQualifiedExam:string;
		university:UniversityLookup;
		aggregateMarks:number;

	}
	interface UniversityLookup{
		id:number;
		name:string;
		city:string;
	}

	interface QualifiedExamDetailsLookup{
		id:number;
		name:string;
		subjects:Array<string>;


	}

	interface LSCLookup{
		id:number;
		district:string;
		centers:Array<string>;
	}

	interface StudentDetails{
		id:number;
		studentName:string;
		fatherName:string;
		motherName:string;
		gender:string;
		maritalStatus:string;
		dob:string;
		casteCategory:string;
		religion:string;
		nationality:string;
		aadharNumner:string;
		physicallyChallenged:boolean;
		mobile:string;
		email:string;
		anuStudent:boolean;
		materialDispatch:string;
		consent:boolean;
		station:string;
		date:string;
		documents:UploadedDocument;
		communicationDetails:CommunicationDetails;


	}
	interface image{
		imageName:string;
		imagePath:string;
	}

	interface UploadedDocument{

		id?:number;
		photo?:string;
		signature?:string;
		aadharNumber?:string;
		ssc_birthcertificate?:string;
		provisional_odcertificate?:string;
		consoledate_marksmemo?:string;
		castCertificate?:string;
	}

	interface CommunicationDetails{

		careOf:string;
		doorNumner:string;
		streetName:string;
		villageName:string;
		mandal:string;
		district:string;
		state:string;
		county:string;
		pincode:string;
	}




	export interface AdmissionDetailsResponse {
		id: number;
		applicationNumber: string;
		studentName: string;
		fatherName: string;
		course: string;
		mobile: string;
		email: string;
		lscName: string;
	  
		
	  }



	
}