import { Body, Controller,Delete,Get, Param, Post, Put } from "@nestjs/common";

import { UserService } from "./users.service";
@Controller('users')
export class UserController{
constructor(private usersService:UserService){

}
  

    @Post()
    createUser(@Body() data:any){
          
           return this.usersService.createUser(data)

    }

    @Get('/:id')
    getUserById(@Param('id') id:number){
        return this.usersService.getUserById(id)

    }

    @Put('/:id')
    updateUser(@Param('id') id:number,@Body() data:any){

       
          return this.usersService.updateUser(id,data)
        

    }

    @Delete('/:id')
    deleteUser(@Param('id') id:number){
        return this.usersService.deleteUser(id)
    }

    

   

}

