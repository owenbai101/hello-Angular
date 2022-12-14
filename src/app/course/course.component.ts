import { getLocaleCurrencyName, getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course ={
    title:" The Complete Angular Course",
    rating:4.9765,
    students: 30123,
    price:190.95,
    releaseDate: new Date(2016,3,1)
  }
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque. Porttitor rhoncus dolor purus non enim praesent. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Purus in massa tempor nec. Vitae turpis massa sed elementum. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Semper eget duis at tellus at urna condimentum mattis pellentesque. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Volutpat ac tincidunt vitae semper. In nibh mauris cursus mattis molestie a. A diam sollicitudin tempor id. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Mauris rhoncus aenean vel elit. Vitae turpis massa sed elementum tempus egestas sed sed risus. Quisque egestas diam in arcu cursus euismod quis."
}
