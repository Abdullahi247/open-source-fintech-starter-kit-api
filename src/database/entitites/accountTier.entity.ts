import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('accountTier')
export class AccountTier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ type: 'enum', enum: ['standard', 'premium', 'vip'] })
  tier: 'standard' | 'premium' | 'vip';

  @Column()
  accountLimit: number;

  @Column()
  nin: number;

  @Column()
  bvn: number;

  @Column({
    type: 'enum',
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending',
  })
  kycStatus: 'pending' | 'verified' | 'rejected';

  @OneToOne(() => Customer, (customer) => customer.accountTier)
  customer: Customer;
}
