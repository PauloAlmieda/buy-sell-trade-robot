//import {ISession} from "@Domain/Users/Session/types";

export abstract class UseCase<RETURNING> {

    constructor() {

    }

    public abstract handle(...params: any): Promise<RETURNING>
}
