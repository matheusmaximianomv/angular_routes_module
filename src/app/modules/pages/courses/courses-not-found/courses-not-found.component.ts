import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-not-found',
  template: "\
    <main>\
      <h1>Course Not Found</h1>\
    </main>"
  ,
  styleUrls: ['./courses-not-found.component.less']
})
export class CoursesNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
