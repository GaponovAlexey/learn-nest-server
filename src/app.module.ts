import { ProductsService } from './products/products.service'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsController } from './products/products.controller'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mysql://mt0qovvlqiei:pscale_pw_CjfljBwyfHvuQtMRyeIYLSTI7LdTSG2THGdtE5toRCA@av51do8uu7vi.us-east-1.psdb.cloud/dbtest?ssl={"rejectUnauthorized":true}'
    ),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
