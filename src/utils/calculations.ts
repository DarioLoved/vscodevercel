export const calculateCostPerKWh = (totalCost: number, totalKWh: number): number => {
    if (totalKWh === 0) return 0;
    return totalCost / totalKWh;
};

export const splitBillAmongPersons = (totalBill: number, numberOfPersons: number): number => {
    if (numberOfPersons === 0) return 0;
    return totalBill / numberOfPersons;
};

export const calculateTotalBill = (bills: number[]): number => {
    return bills.reduce((total, bill) => total + bill, 0);
};

export const calculateAverageConsumption = (consumptions: number[]): number => {
    if (consumptions.length === 0) return 0;
    const totalConsumption = consumptions.reduce((total, consumption) => total + consumption, 0);
    return totalConsumption / consumptions.length;
};