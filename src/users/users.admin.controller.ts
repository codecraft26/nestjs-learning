import { Controller, Get, Param } from "@nestjs/common";
import { users,User } from "./entity/users.entity";
import { UserService } from "./users.service";
@Controller('users')
export class AdminController{

    constructor(private UserService:UserService){



    }
@Get(':id/application')
approveUser(@Param('id') id:number){
   return this.UserService.updateUser(id,{ isApproved:true})

}


}