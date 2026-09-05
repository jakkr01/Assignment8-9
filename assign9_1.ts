interface Taxable {
  applyTax(amount: number): number;
}

abstract class Worker {
  public id: string;
  public name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  abstract calculatePay(): number;

  getDetails(): string {
    return `Name: ${this.name}`;
  }
}

class HourlyWorker extends Worker {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(id: string, name: string, hourlyRate: number, hoursWorked: number) {
    super(id, name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

class SalariedWorker extends Worker implements Taxable {
  private monthlySalary: number;

  constructor(id: string, name: string, monthlySalary: number) {
    super(id, name);
    this.monthlySalary = monthlySalary;
  }

  calculatePay(): number {
    return this.monthlySalary;
  }

  applyTax(amount: number): number {
    return amount * 0.90;
  }
}

const worker1 = new HourlyWorker("H001", "Alice", 200, 40);
const worker2 = new SalariedWorker("S001", "Bob", 50000);

console.log(worker1.getDetails());
console.log(`Pay: ${worker1.calculatePay()}`);

console.log(worker2.getDetails());
const grossPay = worker2.calculatePay();
const netPay = worker2.applyTax(grossPay);
console.log(`Gross Pay: ${grossPay}, Net Pay: ${netPay}`);