import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  /** Public — anyone can create a booking */
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  /** Admin only — list all bookings */
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  /** Admin only — get a single booking */
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  /** Admin only — update booking (e.g. status) */
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  /** Admin only — delete a booking */
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
