import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly receipient: string, 
      private details: string, 
      public amount: number,
    ){}
  
    format() {
      return `${this.receipient} is owed £${this.amount} for ${this.details}`;
    }
  }
  
  