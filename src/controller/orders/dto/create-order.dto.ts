export interface ICreateOrderDto {
  customer: string,
  items: [],
  total: number,
  status: string,
  notes: string;
  date: Date;
}

export interface ICreateOrderResultDto {
  status: string;
}
