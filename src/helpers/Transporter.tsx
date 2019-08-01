class Transporter {
  data: {[id: string]: any};

  constructor() {
    this.data = {};
  }

  async get(id: string) {
    return this.data[id];
  }

  async add(id: string, value: string) {
    this.data[id] = value;
  }
}

export default Transporter;