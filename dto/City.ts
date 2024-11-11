export class City {
  public code!: number;
  public full_code!: string;
  public name!: string;
  public province_code!: number;

  constructor(data: string) {
    const [fullCode, name] = data.split(',');
    const [provinceCode, code] = fullCode.split('.')
    this.code = Number(code);
    this.full_code = fullCode;
    this.name = name;
    this.province_code = Number(provinceCode)
  }
}