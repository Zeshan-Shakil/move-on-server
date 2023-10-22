/* eslint-disable @typescript-eslint/no-namespace */
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEnum, IsMimeType, IsNumber, IsString, Max, Min, isNumber } from 'class-validator';

export namespace MovieDto {
  @InputType()
  export class UploadVideoInput {
    // for Detect Video or a short
    @Field(() => Number)
    @IsNumber()
    width: number;

    // for Detect Video or a short
    @Field(() => Number)
    @IsNumber()
    height: number;
  }

  export class GetVideoInput {
    // Extension
    @Field(() => String)
    @IsString()
    extension: string;
  }
}
