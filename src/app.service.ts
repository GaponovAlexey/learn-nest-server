import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getUsers() {
    return [
      { id: 1, title: 'hi Nest' },
      { id: 2, title: 'hi Next' },
    ]
  }
}
