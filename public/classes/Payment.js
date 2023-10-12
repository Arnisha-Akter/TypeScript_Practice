export class Payment {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(receipient, details, amount) {
        this.receipient = receipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.receipient} is owed £${this.amount} for ${this.details}`;
    }
}
