import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller({
  path: '/api',
})
export class AppController {
constructor(private AppService: AppService) {}

  @Get('/users')
  getUsers() {
    return this.AppService.getUsers()
  }
}
