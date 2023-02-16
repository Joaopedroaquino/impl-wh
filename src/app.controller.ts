import { Body, Controller, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AppService } from './app.service';
import { Cron } from '@nestjs/schedule';
import { Data } from './data';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) { }


  @Cron('* * * * * *')
  @Post('/order')
  async createOrder(@Body() data: {"data": {
    "productId": 2,
    "amount": 3,
    "deliveryAddress": "Any address test 2"
}}) {
    //const res =   this.appService.createOrder(data)
    this.httpService
      .post('https://webhook.site/f84f2f23-b53a-49b2-87ad-023a31d568ca', {"data": {
        "productId": 2,
        "amount": 3,
        "deliveryAddress": "Any address test 2"
    }})
      .subscribe({
        complete: () => {
          console.log(data)
          return data
        },
        error: (err) => {
        },
      });
    return data;
  }
}