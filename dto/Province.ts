export class Province {
  public code!: string;
  public name!: string;

  constructor(data: string) {
    const [code, name] = data.split(',');
    this.code = code;
    this.name = name;
  }
}