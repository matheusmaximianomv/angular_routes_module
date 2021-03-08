import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { StudentsService } from 'src/app/core';

interface IRouteParams {
  id: number;
}

enum Mode {
  edit,
  create,
}

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.less']
})
export class StudentsFormComponent
  implements OnInit, OnDestroy {

  public id!: number;
  public nameInput!: string;
  public emailInput!: string;

  public mode!: Mode;

  private subscriptions: Array<Subscription> = [];

  constructor(
    private readonly studentsService: StudentsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  public get completedForm(): boolean {
    if (this.nameInput && this.emailInput) {
      return !!this.nameInput.length && !!this.emailInput.length;
    }

    return false;
  }

  private getStudentById(id: number): void {
    this.studentsService
      .show(+id)
      .pipe(take(1))
      .subscribe(
        (response) => {
          if (
            response &&
            response.id &&
            response.email &&
            response.name
          ) {
            const { email, name } = response;

            this.id = id;
            this.emailInput = email;
            this.nameInput = name;
          } else {
            this.router.navigate(['students']);
          }
        }
      );
  }

  private getParams(): void {
    const subscription = this.route.params.subscribe(
      (params: IRouteParams) => {
        const { id } = params;

        if (id) {
          this.id = id;
          this.mode = Mode.edit;

          this.getStudentById(this.id);
        } else {
          this.mode = Mode.create;
        }
      }
    );

    this.subscriptions.push(subscription);
  }

  public onNavigateToViewStudent(): void {
    this.router.navigate(['students', this.id]);
  }

  public onCreateStudent(): void {
    if (this.nameInput && this.emailInput) {
      this.studentsService
        .store(this.nameInput, this.emailInput)
        .pipe(take(1))
        .subscribe(
          () => {
            this.router.navigate(['students']);
          }
        );
    }
  }

  public onUpdateStudent(): void {
    if (this.nameInput && this.emailInput) {
      this.studentsService
        .update(+this.id, this.nameInput, this.emailInput)
        .pipe(take(1))
        .subscribe(
          (response) => {
            if (
              response &&
              response.email &&
              response.name
            ) {
              this.router.navigate(['students', this.id]);
            }
          }
        );
    }
  }

  public ngOnInit(): void {
    this.getParams();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
