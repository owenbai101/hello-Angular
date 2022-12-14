import{Component, Inject} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`
    <h2>{{"Title:" + title + getTittle()}}</h2>
    <!-- <h2 [textContent ="title"]></h2> -->
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    <img src ="{{ imageUrl}}" />
    <img [src]="imageUrl">
    <br/><br/><br/>

    <button class ="btn btn-primary" [class.active]=isActive>Save</button>
    <br/><br/><br/>
    <button [style.backgroundColor] ="isActive?'blue':'green'">open</button>
    <br/><br/>
    <div (click)="onDivClicked()" >
    <button (click)="onSave($event)" >save2</button>
    </div>
    <br/><br/>
    <input (keyup.enter) ="onKeyUp()" />
    <input (keyup.enter) ="onKeyUp3($event)"/>
    <input #email (keyup.enter) ="onKeyUp2(email.value)"/>
    <br/> 
    <input [(ngModel)] = "result" (keyup.enter) ="onKeyUp4()" />
    `
})

export class CoursesComponent{
    title ="List of courses";
    imageUrl ="data:image/jpeg;base64,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"

    getTittle(){
        return this.title;
    }

    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    isActive =false;

    onSave($event: any){
        $event.stopPropagation();
        console.log("button was clicked",$event)
    }

    onDivClicked(){
        console.log("button on div was clicked")
    }

    onKeyUp()
    {
        console.log("ENTER was pressed");
    }

    onKeyUp2(email:any)
    {
        console.log(email);
    }
    onKeyUp3($event:any)
    {
        console.log($event.target.value)
    }
    result ="owen"
    onKeyUp4()
    {
        console.log(this.result);
    }
    // logic for calling HTTP EndPoint(will be tight caouple to the endpoint. and other place use this need to duplicate the code)
}