export class District {
  public code!: number;
  public full_code!: string;
  public name!: string;
  public city_code!: number;

  constructor(data: string) {
    const [fullCode, name] = data.split(',');
    const [, city_code, code] = fullCode.split('.')
    this.code = Number(code);
    this.full_code = fullCode;
    this.name = name;
    this.city_code = Number(city_code)
  }
}