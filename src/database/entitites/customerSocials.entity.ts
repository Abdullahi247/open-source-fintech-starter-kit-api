import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerProfile } from './customerProfile.entity';
import { SocialMedia } from 'src/enum/socialMedia';

@Entity('socials')
export class CustomerSocials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['facebook', 'twitter', 'linkedin', 'instagram'],
  })
  socialType: 'facebook' | 'twitter' | 'linkedin' | 'instagram';

  @Column()
  socialUsername: string;

  @Column()
  socialUrl: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => CustomerProfile, (profile) => profile.id)
  profile: CustomerProfile;
}
