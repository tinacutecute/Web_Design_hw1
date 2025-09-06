import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { HealthController } from './health.controller';

@Module({
  imports: [
    // 載入 .env 設定
    ConfigModule.forRoot({ isGlobal: true }),

    // TypeORM 資料庫連線
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '3306', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,   // 自動載入 entity
      synchronize: true,        // ⚠️ 開發環境用，正式環境請關閉

      // 顯示 TypeORM log，方便你確認是否真的連上
      logger: 'advanced-console',
      logging: ['log', 'info', 'warn', 'error', 'schema'], // 想看 SQL 可加 'query'
    }),
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
