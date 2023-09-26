import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.taskService.remove(id);
  }
}
