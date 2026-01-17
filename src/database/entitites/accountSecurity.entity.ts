import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('security')
export class AccountSecurity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  passwordHash: string;

  @Column()
  passwordSalt: string;

  @Column()
  twoFactorEnabled: boolean;

  @Column()
  lastPasswordChange: Date;

  @Column()
  passwordResetToken: string;

  @Column()
  passwordResetTokenExpiry: Date;

  @Column()
  isUserLocked: boolean;

  @Column()
  failedLoginAttempts: number;

  @Column()
  isCurrentPassword: string;

  @OneToOne(() => Customer, (customer) => customer.securities)
  customer: Customer;
}
