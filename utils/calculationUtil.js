const invoiceCalculator = {

    calculateInvoiceTotal(invoice) {
        let total = 0;

        for (const item of invoice.items) {
           const priceWithTax = item.price * 1.1;
           total += priceWithTax;
           console.log(`Item: ${item.name}, Price with tax: ${priceWithTax}`);
        }
        return total;
    },
    
    calculateOrderTotal(invoice) {
        let total = 0;

        for (const item of invoice.items) {
           const priceWithTax = item.price * 1.1;
           total += priceWithTax;
           console.log(`Item: ${item.name}, Price with tax: ${priceWithTax}`);
        }
        return total;
    },

    calculateAnotherTotal(invoice) {
        let total = 0;

        for (const item of invoice.items) {
           const priceWithTax = item.price * 1.1;
           total += priceWithTax;
           console.log(`Item: ${item.name}, Price with tax: ${priceWithTax}`);
        }
        return total;
    },


    doThingOne(value) {
        const a = 5 + value;
        const b = x + 10;
        const c =  b + 10;
        const d =  b + 10;
        const e =  b + 10;
        const f =  b + 10;
        const g =  b + 10;
        const h =  b + 10;
        const i =  b + 10;
        const j = 5 + value;
        const k = 5 + value;
        const l = 5 + value;
        const m = 5 + value;
        const n = 5 + value;
        const o = 5 + value;
        const p = 5 + value;
        const q = 5 + value;
        const r = 5 + value;
        const s = 5 + value;
        const t = 5 + value;
        const u = 5 + value;
        const v = 5 + value;
        const w = 5 + value;
        const x = 5 + value;

        return x;
    },
    doThingTwo(string) {
          const a = 5 + value;
        const b = x + 10;
        const c =  b + 10;
        const d =  b + 10;
        const e =  b + 10;
        const f =  b + 10;
        const g =  b + 10;
        const h =  b + 10;
        const i =  b + 10;
        const j = 5 + value;
        const k = 5 + value;
        const l = 5 + value;
        const m = 5 + value;
        const n = 5 + value;
        const o = 5 + value;
        const p = 5 + value;
        const q = 5 + value;
        const r = 5 + value;
        const s = 5 + value;
        const t = 5 + value;
        const u = 5 + value;
        const v = 5 + value;
        const w = 5 + value;
        const x = 5 + value;

        return x;
    },

}

module.exports = invoiceCalculator;