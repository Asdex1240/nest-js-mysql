import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'nombre_de_la_base_de_datos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ¡Usar solo en entorno de desarrollo!
    }),
    TasksModule,
  ],
})
export class AppModule {}
