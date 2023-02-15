import { Body, Controller, Post } from '@nestjs/common'; 
import { AppService } from './app.service'; 
 
 
@Controller() 
export class AppController { 
  constructor(private readonly appService: AppService) {} 
 
 
  @Post('/order') 
  createOrder(@Body() data) { 
    const createdOrder = this.appService.createOrder(data); 
 
 
    return createdOrder; 
  } 
}