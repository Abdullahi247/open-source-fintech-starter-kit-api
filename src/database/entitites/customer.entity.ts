import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerProfile } from './customerProfile.entity';
import { AccountTier } from './accountTier.entity';
import { CustomerSession } from './customerSession.entity';
import { AccountMFA } from './accountMFA.entity';
import { AccountSecurity } from './accountSecurity.entity';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dob: Date;

  @Column({ unique: true })
  email: string;

  @Column()
  country: string;

  @Column({ unique: true })
  phoneNumber: string;

  @Column({ type: 'enum', enum: ['passport', 'driver_license', 'national_id'] })
  idType: 'passport' | 'driver_license' | 'national_id';

  @Column({ unique: true })
  idNumber: string;

  @Column({
    type: 'enum',
    enum: ['active', 'inactive', 'suspended'],
    default: 'active',
  })
  customerStatus: 'active' | 'inactive' | 'suspended';

  @Column({
    type: 'enum',
    enum: ['standard', 'premium', 'vip'],
    default: 'standard',
  })
  customerTier: 'standard' | 'premium' | 'vip';

  @Column({ unique: true })
  username: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToOne(() => CustomerProfile, (profile) => profile.customer, {
    cascade: true,
  })
  @JoinColumn()
  profile: CustomerProfile;

  @OneToOne(() => AccountTier, (accountTier) => accountTier.customer, {
    cascade: true,
  })
  @JoinColumn()
  accountTier: AccountTier;

  @OneToMany(() => CustomerSession, (session) => session.customer, {
    cascade: true,
  })
  sessions: CustomerSession[];

  @OneToMany(() => AccountMFA, (mfa) => mfa.customer, { cascade: true })
  mfas: AccountMFA[];

  @OneToMany(() => AccountSecurity, (security) => security.customer, {
    cascade: true,
  })
  securities: AccountSecurity[];
}
