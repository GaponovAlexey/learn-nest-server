import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'

@Controller('products')
export class ProductsController {
  @Get()
  getAll() {
    return 'getAll'
  }

  @Get(':id')
  getOne(@Param('id') id) {
    return 'getOne' + id.id
  }

  @Post()
  create(@Body() CreateProductDto: CreateProductDto) {
    return `title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`
  }
}
