import { isatty } from "tty"

export class User{
  email:String
    password:String
    isApproved:false
    constructor(e:string,pass:string,isApprove=false){
        this.email=e
        this.password=pass
        

    

}
}

export const users=[new User('gaman0221@gmail.com','12345',false) ,new User('gupta109898@gmail.com','474747',false)];
