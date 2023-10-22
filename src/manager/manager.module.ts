import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerResolver } from './manager.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ManagerRepository } from './manager.repository';
import { Manager } from './entities/manager.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ManagerRepository, Manager])],
  providers: [ManagerResolver, ManagerService, ManagerRepository],
})
export class ManagerModule {}
