import{Component, Inject} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`
    <h2>{{"Title:" + title + getTittle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})

export class CoursesComponent{
    title ="List of courses";
    
    getTittle(){
        return this.title;
    }

    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    // logic for calling HTTP EndPoint(will be tight caouple to the endpoint. and other place use this need to duplicate the code)
}