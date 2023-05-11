import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {PrismaModule, PrismaService} from 'nestjs-prisma';
import registerConfig from '../config';
import {TodoModule} from "./app";

@Module({
  imports: [
    ConfigModule.forRoot({load: [registerConfig]}),
    PrismaModule.forRoot(),
    TodoModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
  ]
})
export class AppModule {
}
