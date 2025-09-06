import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller('health')
export class HealthController {
  constructor(private readonly dataSource: DataSource) {}

  @Get('db')
  async checkDb() {
    // 若連線成功，這行會回傳 [ [ { '1': 1 } ], ... ] 之類的結果
    await this.dataSource.query('SELECT 1');
    return { ok: true };
  }
}
