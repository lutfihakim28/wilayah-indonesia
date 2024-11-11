export class Province {
  public code!: number;
  public full_code!: string;
  public name!: string;

  constructor(data: string) {
    const [code, name] = data.split(',');
    this.code = Number(code);
    this.full_code = code;
    this.name = name;
  }
}