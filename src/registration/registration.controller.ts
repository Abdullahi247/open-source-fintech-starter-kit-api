import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { CreateCustomerDto } from './dto/new-customer.dto';
import { ApiBody } from '@nestjs/swagger';
@Controller('signup')
export class RegistrationController {
  @Get('/quick-setup/:id')
  quickSetup(@Req() req: Request, @Param('id') id: string): string {
    // console.log(req.body);
    console.log(id);
    return 'Registration successful';
  }

  @Post('register-user')
  @ApiBody({ type: CreateCustomerDto })
  registerUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CreateCustomerDto,
  ) {
    console.log(body);
    const { name, email, firstname, lastname } = body;
    // Perform registration logic here (e.g., save to database)
    const user = { name, email, firstname, lastname };

    console.log('User registered:', user);
    res.status(HttpStatus.CREATED).send('Usee Registered');
  }
}
