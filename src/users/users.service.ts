import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  async getAllUsers() {
    const user = [
      { id: 1, title: 'hi nestjs' },
      { id: 2, title: 'hi nextjs' },
      { id: 3, title: 'hi test' },
    ]
    return user
  }
}
