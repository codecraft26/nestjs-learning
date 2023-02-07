import { Module } from "@nestjs/common";
import { AdminController } from "./users.admin.controller";
import { UserController } from "./users.controller";
import { UserService } from "./users.service";
@Module({
controllers:[UserController,AdminController],providers:[UserService]
})

export class userModule{};
