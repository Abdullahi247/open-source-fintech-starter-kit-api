import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('sessions')
export class CustomerSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deviceName: string;

  //   to have a unique identitfier make sure to generate a unique device id for each session like a username, date logged in plus the device used to login or a UUID
  @Column()
  deviceId: string;

  @Column()
  softwareVersion: string;

  @Column()
  ipAddress: string;

  @Column()
  location: string;

  @Column()
  engagementTime: number; // in minutes

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => Customer, (customer) => customer.sessions)
  customer: Customer;
}
