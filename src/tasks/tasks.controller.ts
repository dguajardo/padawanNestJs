import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get('/test')
  getTasks(): string {
    return 'Retrieving tasks';
  }
}
