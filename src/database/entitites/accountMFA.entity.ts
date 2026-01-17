import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('mfa')
export class AccountMFA {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['sms', 'authenticator_app', 'email'] })
  method: 'sms' | 'authenticator_app' | 'email';

  @Column()
  isEnabled: boolean;

  @Column()
  secretKey: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => Customer, (customer) => customer.mfas)
  customer: Customer;
}
