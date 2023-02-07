import { User, users } from './entity/users.entity';

import { Injectable } from '@nestjs/common';


@Injectable()
export class UserService {
  getUser() {
    return users;
  }

  createUser(data: any) {
    const newUser = new User(data.email, data.password);
    users.push(newUser);
    return newUser;
  }

  getUserById(id: number) {
    return users[id];
  }



  updateUserApprove(id:number,data){
    const user=users[id];
        const updateduser={...user,...data}
        users[id]=user;
        return updateduser;
  }
  updateUser(id: number, data: any) {
    const user = users[id];
    user.email = data.email;
    user.password = data.password;
    users[id] = user;
    return user;
  }

  deleteUser(id: number) {
    const user = users[id];
    users.splice(id, 1);
    return user;
  }
}
