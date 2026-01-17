import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerSocials } from './customerSocials.entity';
import { ThemeColor } from 'src/enum/themeColor';
import { Customer } from './customer.entity';

@Entity('profile')
export class CustomerProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bio: string;

  @Column()
  avarterUrl: string;

  @Column({ type: 'enum', enum: ['light', 'dark'] })
  themeColor: 'light' | 'dark';

  @Column({ type: 'enum', enum: ['serif', 'sans-serif', 'monospace'] })
  fontType: 'serif' | 'sans-serif' | 'monospace';

  @Column({ type: 'enum', enum: ['small', 'medium', 'large'] })
  fontSize: 'small' | 'medium' | 'large';

  @Column()
  location: string;

  @OneToMany(() => CustomerSocials, (social) => social.profile)
  socials: CustomerSocials[];

  @OneToOne(() => Customer, (customer) => customer.profile)
  customer: Customer;
}
