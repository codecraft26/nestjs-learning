import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [userModule, PostsModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
