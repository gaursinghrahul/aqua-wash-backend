import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { BookingModule } from './_shared/booking/booking.module';
import { UserModule } from './_shared/user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, BookingModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
