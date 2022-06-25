import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('/api')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  getAll() {
    return this.UsersService.getAllUsers()
  }
}