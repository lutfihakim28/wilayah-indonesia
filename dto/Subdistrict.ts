export class Subistrict {
  public code!: number;
  public full_code!: string;
  public name!: string;
  public district_code!: number;

  constructor(data: string) {
    const [fullCode, name] = data.split(',');
    const [, , district_code, code] = fullCode.split('.')
    this.code = Number(code);
    this.full_code = fullCode;
    this.name = name;
    this.district_code = Number(district_code)
  }
}