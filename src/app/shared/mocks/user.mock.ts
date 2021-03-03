import { IUser } from 'src/app/shared';

import { BaseMock } from './base.mock';

export class UserMock extends BaseMock<IUser> {

    protected data: Array<IUser> = [
        { email: 'user@email.com', password: '123456789' }
    ];

    constructor() {
        super();
    }

    public show(email: string): IUser {
        return this.data.find(elementArray => elementArray.email === email);
    }

    public store(value: IUser): void {
        this.data.push(value);
    }

    public update(email: string, value: IUser): IUser {
        const user = this.data.find(elementArray => elementArray.email === email);

        user.email = value.email;
        user.password = value.password;

        return user;
    }

    public destroy(email: string): void {
        this.data = this.data.filter(elementArray => elementArray.email !== email);
    }

}
