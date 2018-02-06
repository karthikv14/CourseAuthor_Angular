import { Course } from './course';

import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class CourseService{
    URL:string = 'http://localhost:8080/courses';

    private courses: Array<Course> = [

    ];

    constructor(private http:Http){

    }

    public getCourses(){
        return this.http.get(this.URL);
    }

    public deleteCourses(courseId:string){
        return this.http.delete(this.URL+"/"+courseId);
    }

    getCourse(courseId:string){
   
        return this.http.get(this.URL+"/"+courseId);
    }

    // deleteCourse(courseId:String){
    //     let indexToDelete;
    //     for(let i =0; i<this.courses.length; i++){
    //         if(this.courses[i].id == courseId){
    //             indexToDelete = i;
    //             break;
    //         }
    //     }
    //         this.courses.splice(indexToDelete,1)
    // }

    saveCourse(course: Course){
        let rheaders = new Headers();
        rheaders.set("content-type", "application/json");
        console.log(course.id);
        if(course.id === undefined){
            console.log('here');
            return this.http.post(this.URL, JSON.stringify(course),{headers: rheaders});
        }else{
            console.log('in put');
            return this.http.put(this.URL, JSON.stringify(course),{headers: rheaders});
        }

    }
}