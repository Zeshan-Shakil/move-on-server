import { BadRequestException, Injectable } from '@nestjs/common';
import { Manager } from './entities/manager.entity';
import { ManagerInputDto } from './dto/manager.input.dto';
import { ManagerRepository } from './manager.repository';
import { AccountStatusEnum } from './enum/manager.enum';
import { Transactional } from 'typeorm-transactional';

@Injectable()
export class ManagerService {
  constructor(private readonly managerRepository: ManagerRepository) {}

  @Transactional()
  async managerRegister(input: ManagerInputDto.ManagerRegisterInput): Promise<Manager> {
    try {
      const manager = new Manager();

      const managerExist = await this.managerRepository.findByEmail(input.email);
      if (managerExist) throw new BadRequestException('Email already registered');

      manager.email = input.email;
      manager.password = input.password;
      manager.accountStatus = AccountStatusEnum.ACTIVE;

      await this.managerRepository.save(manager);
      return manager;
    } catch (error) {}
  }
}
