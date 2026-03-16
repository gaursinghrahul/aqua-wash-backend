import { IsString, IsNotEmpty, IsDateString, IsPhoneNumber } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  carType: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  service: string;
}
