import { BaseMock } from './base.mock';

export class TechnologiesMock extends BaseMock<string>{
  protected data: Array<string> = [
    'HTML',
    'CSS',
    'JavaScript',
    'NodeJs',
    'ReactJs',
    'Typescript'
  ];

  constructor() {
    super();
  }

  public index(): Array<string> {
    return this.data;
  }

  public show(fragment: string): string {
    return this.data.find(elementArray => elementArray.includes(fragment));
  }

  public store(value: string): void {
    this.data.push(value);
  }

  public update(id: string, value: string): string {
    this.destroy(id);
    this.store(value);

    return value;
  }

  public destroy(id: string): void {
    this.data = this.data.filter(technology => technology !== id);
  }

}
