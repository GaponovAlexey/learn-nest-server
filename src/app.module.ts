import { Module } from '@nestjs/common'
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ProductsController } from './products/products.controller';

@Module({
  controllers: [UsersController, ProductsController],
  providers: [UsersService],
})
export class AppModule {}
