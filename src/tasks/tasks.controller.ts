import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
     getTasks(): string {
        return 'Retrieving tasks';
  }
  @Post()
      createTask(): string {
        return 'Creating a task';
      }
  @Put()
      updateTask(): string {
        return 'Updating a task'
      }
  @Delete()
      deleteTask(): string {
        return 'Deleting a task'
      }
  }
