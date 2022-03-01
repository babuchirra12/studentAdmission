

export class
    AppContants {

      public static readonly  BASE_URL: string = "http://localhost:9000/";




 // public static readonly  BASE_URL: string = "https://school-prod-app.appspot.com/";

  // public static readonly  BASE_URL: string = "https://mms-staging-332612.el.r.appspot.com/";
  


   // public static readonly BASE_URL: string = "https://7a48-144-48-225-25.ngrok.io/";

    public static GET_CourseCategoryLookup(): string {
        return AppContants.BASE_URL + "Common/CourseCategoryLookup";
    }

    public static GET_QualifiedExamDetailsLookup(): string {
        return AppContants.BASE_URL + "Common/QualifiedExamDetailsLookup";
    }

    public static GET_UniversityLookup(): string {
        return AppContants.BASE_URL + "Common/UniversityLookup";
    }

    public static GET_LSCLookup(): string {
        return AppContants.BASE_URL + "Common/LSCLookup";
    }

    public static POST_AdmissionDetails(): string {
        return AppContants.BASE_URL + "AdmissionDetails/";
    }

    public static POST_UploadFile(studentId:any): string {
        return AppContants.BASE_URL + "AdmissionDetails/Student/"+studentId+"/Upload";
    };
    public static POST_UploadDocuments(studentId:any): string {
        return AppContants.BASE_URL + "AdmissionDetails/Student/"+studentId+"/UploadedDocument";
    };
    public static GET_Admissions(): string {
        return AppContants.BASE_URL + "AdmissionDetails/All";
    };



   
   
   
    
}