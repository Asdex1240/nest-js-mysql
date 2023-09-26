import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Asegúrate de importar TypeOrmModule si no lo has hecho ya
import { TasksController } from './tasks.controller';
import { TaskService } from './task.service'; // Asegúrate de importar TaskService
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Importa las entidades necesarias si estás usando TypeORM
  controllers: [TasksController],
  providers: [TaskService], // Registra TaskService como un proveedor
})
export class TasksModule {}
