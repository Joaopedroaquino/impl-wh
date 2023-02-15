import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import Data from './data';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  createOrder(data:Data) {
    return data;
  }
} 