import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.scss']
})
export class CourseTileComponent implements OnInit {

  @Input() course: Course

  constructor() {
    this.course = {
      _id: '',
      rating: 0,
      title: '',
      description: '',
      organization: '',
      level: '',
      price: 1,
      duration: 1
    }
  }

  ngOnInit(): void {
  }

}