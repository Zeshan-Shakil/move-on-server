/* eslint-disable @typescript-eslint/no-namespace */
import { Field, ObjectType } from '@nestjs/graphql';

export namespace UserOutputDto {
  @ObjectType()
  export class AuthTokenOutput {
    @Field(() => String)
    token: string;
  }
}
