import { ValueObject } from "src/domain/primitives/value_objects";

export class Password extends ValueObject
{
   private password: string;
   constructor(password: string) 
   {
        super();
        this.password = password;
   } 

   public get getPassword() : string
   {
        return this.password;
   }
}