import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// const start = async () => {
//   const PORT = process.env.PORT || 5000
//   const app = await NestFactory.create(AppModule)

//   await app.listen(PORT, () => console.log(`my server start ${PORT}`))
// }

// start()

const start = async () => {
  const PORT = 5000;
  const app = await NestFactory.create(AppModule)

  await app.listen(PORT, () => console.log(`start ${PORT}`))
}
start()