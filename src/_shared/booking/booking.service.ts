import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  create(createBookingDto: CreateBookingDto) {
    return this.prisma.booking.create({
      data: {
        ...createBookingDto,
        date: new Date(createBookingDto.date),
      },
    });
  }

  findAll() {
    return this.prisma.booking.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  findOne(id: number) {
    return this.prisma.booking.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    const data: any = { ...updateBookingDto };
    if (data.date) {
      data.date = new Date(data.date);
    }
    return this.prisma.booking.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}
