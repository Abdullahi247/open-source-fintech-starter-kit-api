import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: process.env.DB_SYNCHRONIZATION === 'true' ? true : false,
        logging: false,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });
      return await dataSource.initialize();
    },
  },
];
