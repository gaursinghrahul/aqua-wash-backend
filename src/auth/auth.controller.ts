import { Body, Controller, Post, HttpCode, HttpStatus, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CreateUserDto } from '../_shared/user/dto/create-user.dto';
import { UserService } from '../_shared/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Post('register')
  register(@Body() createDto: CreateUserDto) {
      return this.userService.create(createDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}

