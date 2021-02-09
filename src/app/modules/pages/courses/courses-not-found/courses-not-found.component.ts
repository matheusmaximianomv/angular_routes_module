import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-not-found',
  template: `
    <main class="content-nf">
      <h1>Course Not Found</h1>
    </main>
  `,
  styles: [
    `
      .content-nf {
        width: 100%;
      }

      .content-nf h1 {
        text-align: center;
        color: #3F51B5;
        font-weight: bold;
        font-size: 54px;
      }
    `
  ],
})
export class CoursesNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
