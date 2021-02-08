export abstract class BaseMock<T> {
  protected abstract data: Array<T>;

  constructor() {}

  public setData(value: Array<T>): void {
    this.data = value;
  }

  public getData(): Array<T> {
    return this.data;
  }

  public abstract show(...args: any): T;

  public abstract store(value: T): void;

  public abstract update(identify: any, ...args: any): T;

  public abstract destroy(...args: any): void;

}
