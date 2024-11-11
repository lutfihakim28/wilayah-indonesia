export class District {
  public code!: string;
  public name!: string;
  public city_code!: string;

  constructor(data: string) {
    const [code, name] = data.split(',');
    const [provinceCode, cityCode,] = code.split('.')
    this.code = code;
    this.name = name;
    this.city_code = `${provinceCode}.${cityCode}`
  }
}