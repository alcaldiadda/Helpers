export class Identification {
  private id: string;

  constructor(rut: string) {
    this.id = rut;
  }

  isValid(incluyeCero?: boolean) {
    if (typeof this.id !== "string") {
      return false;
    }

    // si comienza con 0 retornamos false
    // un run como 00000000-0 no pasará
    if (/^0+/.test(this.id) && !incluyeCero) {
      return false;
    }

    if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(this.id)) {
      return false;
    }

    this.clean();

    let t = parseInt(this.id.slice(0, -1), 10);
    let m = 0;
    let s = 1;

    while (t > 0) {
      s = (s + (t % 10) * (9 - (m++ % 6))) % 11;
      t = Math.floor(t / 10);
    }

    const v = s > 0 ? "" + (s - 1) : "K";
    return v === this.id.slice(-1);
  }

  format(options = { dots: true }) {
    this.clean();

    let result;

    if (options.dots) {
      result =
        this.id.slice(-4, -1) + "-" + this.id.substring(this.id.length - 1);
      for (let i = 4; i < this.id.length; i += 3) {
        result = this.id.slice(-3 - i, -i) + "." + result;
      }
    } else {
      result =
        this.id.slice(0, -1) + "-" + this.id.substring(this.id.length - 1);
    }

    return result;
  }

  getCheckDigit() {
    this.clean();
    const rut = Array.from(this.id, Number);

    if (rut.length === 0 || rut.includes(NaN)) {
      throw new Error(`"${this.id}" as RUT is invalid`);
    }

    const modulus = 11;
    const initialValue = 0;
    const sumResult = rut
      .reverse()
      .reduce(
        (accumulator, currentValue, index) =>
          accumulator + currentValue * ((index % 6) + 2),
        initialValue
      );

    const checkDigit = modulus - (sumResult % modulus);

    if (checkDigit === 10) {
      return "K";
    } else if (checkDigit === 11) {
      return "0";
    } else {
      return checkDigit.toString();
    }
  }

  clean() {
    this.id = this.id.replace(/^0+|[^0-9kK]+/g, "").toUpperCase();
    return this.id;
  }
}
