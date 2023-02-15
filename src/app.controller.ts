import { Body, Controller, Post } from '@nestjs/common'; 
import { HttpService } from '@nestjs/axios'; 
import { AppService } from './app.service'; 
import { Cron } from '@nestjs/schedule';
 
 
@Controller() 
export class AppController { 
  constructor( 
    private readonly appService: AppService, 
    private readonly httpService: HttpService, 
  ) {} 
 
 
  @Cron('10 * * * * *')
  @Post('/order') 
  createOrder(@Body() data) { 
    const createdOrder = this.appService.createOrder(data); 
 
 
    this.httpService 
      .post('https://webhook.site/f84f2f23-b53a-49b2-87ad-023a31d568ca', data) 
      .subscribe({ 
        complete: () => { 
          console.log('completed'); 
        }, 
        error: (err) => { 
        }, 
      }); 
 
 
    return createdOrder; 
  } 
}