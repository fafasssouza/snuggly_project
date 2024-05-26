import { ValueObject } from "src/domain/primitives/value_objects";
import { pbkdf2Sync } from "crypto";

export class Password extends ValueObject
{
   private password: string;
   constructor(password: string) 
   {
        super();
        this.password = this.cryptorPassword(password);
   } 

   public get getPassword() : string
   {
        return this.password;
   }

   private cryptorPassword(password: string) : string
   {
        try
        {
            const hash = pbkdf2Sync(password, 'gay', 1000, 64, 'sha512')
                .toString('hex');
            return hash;
        }
        catch(e)
        {
            throw new Error("Encryption Error: " + e);
        }
   }

   public comparePassword(password: string) : boolean 
   {
        const hash = pbkdf2Sync(password, 'gay', 1000, 64, 'sha512')
                .toString('hex');

        return hash === this.password;
   }
}