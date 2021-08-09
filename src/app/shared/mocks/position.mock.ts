import { IPosition } from 'src/app/shared';

import { BaseMock } from './base.mock';

export class PositionMock extends BaseMock<IPosition>{
  protected data: Array<IPosition> = [
    { id: '0', name: 'Development',  level: 'Junior', description: 'Development Junior' },
    { id: '1', name: 'Development', level: 'Plen', description: 'Development Plen' },
    { id: '2', name: 'Development', level: 'Senior', description: 'Development Senior' },
  ];

  constructor() {
    super();
  }

  public index(): Array<IPosition> {
    return this.data;
  }

  public show(id: string): IPosition {
    return this.data.find(elementArray => elementArray.id === id);
  }

  public store(value: IPosition): void {
    this.data.push(value);
  }

  public update(id: string, value: IPosition): IPosition {
    const position = this.data.find(elementArray => elementArray.id === id);

    position.name = value.name;
    position.level = value.level;
    position.description = value.description;

    return position;
  }

  public destroy(id: string): void {
    this.data = this.data.filter(position => position.id !== id);
  }

}
