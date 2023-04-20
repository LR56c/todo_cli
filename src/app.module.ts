import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {CommandModule} from 'nestjs-command';
import {PrismaModule, PrismaService} from 'nestjs-prisma';
import registerConfig from '../config';
import {CreateTodoCommand, TodoService} from "./app";

@Module({
    imports: [
        CommandModule,
        ConfigModule.forRoot({load: [registerConfig]}),
        PrismaModule.forRoot(),
    ],
    controllers: [],
    providers: [PrismaService, CreateTodoCommand, TodoService],
})
export class AppModule {
}
