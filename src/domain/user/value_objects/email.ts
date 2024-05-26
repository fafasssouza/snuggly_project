import { ValueObject } from "src/domain/primitives/value_objects";

export class Email extends ValueObject
{
    private email_address: string;

    constructor(email: string) 
    {
        super();
        this.email_address = email;
    }

    public get getEmail() : string
    {
        return this.email_address;
    }

    public set setEmail(new_email: string)
    {
        this.email_address = new_email;
    }
}