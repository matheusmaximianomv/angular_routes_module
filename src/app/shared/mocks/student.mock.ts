import { IStudent } from 'src/app/shared';

import { BaseMock } from './base.mock';

export class StudentMock extends BaseMock<IStudent> {

  protected data: Array<IStudent> = [
    { id: 1, name: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, name: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, name: 'Aluno 03', email: 'aluno03@email.com' },
  ];

  constructor() {
    super();
  }

  public show(id: number): IStudent {
    return this.data.find(elementArray => elementArray.id === id);
  }

  public store(value: IStudent): void {
    this.data.push(value);
  }

  public update(id: number, value: IStudent): IStudent {
    const student = this.data.find(elementArray => elementArray.id === id);

    student.email = value.email;
    student.name = value.name;

    return student;
  }

  public destroy(id: number): void {
    this.data = this.data.filter(student => student.id !== id);
  }
}
