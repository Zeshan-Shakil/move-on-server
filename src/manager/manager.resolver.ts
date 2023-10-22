import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ManagerService } from './manager.service';
import { Manager } from './entities/manager.entity';
import { ManagerInputDto } from './dto/manager.input.dto';

@Resolver(() => Manager)
export class ManagerResolver {
  constructor(private readonly managerService: ManagerService) {}

  @Mutation(() => Manager)
  async managerRegister(@Args('Register') input: ManagerInputDto.ManagerRegisterInput): Promise<Manager> {
    return this.managerService.managerRegister(input);
  }
}
