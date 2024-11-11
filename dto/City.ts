export class City {
  public code!: string;
  public name!: string;
  public province_code!: string;

  constructor(data: string) {
    const [code, name] = data.split(',');
    const [provinceCode, ..._] = code.split('.')
    this.code = code;
    this.name = name;
    this.province_code = provinceCode
  }
}