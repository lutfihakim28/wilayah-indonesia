export class Subistrict {
  public code!: string;
  public name!: string;
  public district_code!: string;

  constructor(data: string) {
    const [code, name] = data.split(',');
    const [provinceCode, cityCode, districtCode,] = code.split('.')
    this.code = code;
    this.name = name;
    this.district_code = `${provinceCode}.${cityCode}.${districtCode}`
  }
}