import { ICourse } from 'src/app/shared';

import { BaseMock } from './base.mock';

export class CourseMock extends BaseMock<ICourse>{
  protected data: Array<ICourse> = [
    { id: '0', name: 'Angular' },
    { id: '1', name: 'React Native' },
    { id: '2', name: 'ReactJS' },
    { id: '3', name: 'NodeJS' },
    { id: '4', name: 'Flutter' },
    { id: '5', name: 'Go' },
    { id: '6', name: 'IA'}
  ];

  constructor() {
    super();
  }

  public show(id: string): ICourse {
    return this.data.find(elementArray => elementArray.id === id);
  }

  public store(value: ICourse): void {
    this.data.push(value);
  }

  public update(id: string, value: ICourse): ICourse {
    const course = this.data.find(elementArray => elementArray.id === id);

    course.name = value.name;

    return course;
  }

  public destroy(id: string): void {
    this.data = this.data.filter(course => course.id !== id);
  }

}
