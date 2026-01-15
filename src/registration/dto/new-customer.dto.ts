import { ApiProperty } from '@nestjs/swagger';

export class CreateCustomerDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
}
