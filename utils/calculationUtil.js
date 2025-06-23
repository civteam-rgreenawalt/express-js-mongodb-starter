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
    }

}

module.exports = invoiceCalculator;