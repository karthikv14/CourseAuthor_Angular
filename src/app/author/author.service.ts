import { Author } from './author';
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class AuthorService{
    URL:string = 'http://localhost:8080/authors';
    private authors: Array<Author> = [

    ];
    constructor(private http:Http){

    }

    public deleteAuthors(authorId:string){
        return this.http.delete(this.URL+"/"+authorId);
    }

    getAuthor(authorId:string){
   
        return this.http.get(this.URL+"/"+authorId);
    }  
    public getAuthors(){
        return this.http.get(this.URL);
    }

    saveAuthor(author:Author){
        let rheaders = new Headers();
        rheaders.set("content-type", "application/json");
       
        if(author === undefined){
            console.log('here');
            return this.http.post(this.URL, JSON.stringify(author),{headers: rheaders});
        }else{
            return this.http.put(this.URL, JSON.stringify(author),{headers: rheaders});
        }

    }
}