import { Injectable } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Manager } from '../manager/entities/manager.entity';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  /* async validate(credentials: UserDtos.LoginDto): Promise<User> {
    try {
      const { email, password } = credentials;
      const user = (await this.userService.getUserByEmail(email)) as unknown as User;
      if (!user) throw new UnauthorizedException(`User ${email} not Exist Please Sign Up to your account`);

      const passwordsMatch = password === user.password;
      if (!passwordsMatch) throw new UnauthorizedException(`User ${user.email} is not authorized`);

      return user;
    } catch (error) {
      throw new Error(error);
    }
  } */

  signToken(user: User | Manager): string {
    const tokenUser = {
      email: user.email,
      ID: user.ID,
    };
    const token = this.jwtService.sign(tokenUser);
    return token;
  }

  decodeToken(token: string): TokenUserType {
    const tokenUser = this.jwtService.decode(token);
    return tokenUser as TokenUserType;
  }
}
