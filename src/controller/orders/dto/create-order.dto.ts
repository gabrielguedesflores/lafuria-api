export class CreateOrderDto {
  readonly number: string;
  readonly date: Date;
  readonly table: number;
  readonly status: string;
}
