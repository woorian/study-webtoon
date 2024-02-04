import { IsString, IsNumber } from 'class-validator';

export class CreatewebtoonDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly url: string;

  @IsString()
  readonly image_url: string;

  @IsString()
  readonly update_days: string;
}
