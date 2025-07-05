"use strict";
//
// UTILITIES (3)
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueByLoans = void 0;
exports.getLatestCollectById = getLatestCollectById;
exports.uniqueNames = uniqueNames;
exports.getUniqueByKey = getUniqueByKey;
// 5. Method to Make IDs
function getLatestCollectById(collections) {
    const uniqueCollectionsMap = collections.reduce((acc, current) => {
        const existing = acc.get(current.loanidx);
        if (!existing || existing.receivedz < current.receivedz) {
            acc.set(current.loanidx, current);
        }
        return acc;
    }, new Map());
    return Array.from(uniqueCollectionsMap.values());
}
// 6. Method to Make IDs
function uniqueNames(names) {
    return [...new Set(names)];
}
// 7. Method to Make IDs
function getUniqueByKey(items, key) {
    const seen = new Set();
    return items.filter((item) => {
        const value = item[key];
        if (!seen.has(value)) {
            seen.add(value);
            return true;
        }
        return false;
    });
}
const getUniqueByLoans = (key, data) => {
    return Array.from(data
        .reduce((map, loan) => {
        const normalizedKey = String(loan[key]).toLowerCase();
        const existingLoan = map.get(normalizedKey);
        // If the loan doesn't exist in the map or the current loan has a higher balancex, update the map
        if (!existingLoan || loan.balancex > existingLoan.balancex) {
            map.set(normalizedKey, loan);
        }
        return map;
    }, new Map())
        .values());
};
exports.getUniqueByLoans = getUniqueByLoans;
// ==============================|TWELVE|========================================
