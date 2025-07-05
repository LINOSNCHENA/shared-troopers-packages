//
// UTILITIES (3)
//

import { ICollection, ILoan } from "../Models.Loans";

// 5. Method to Make IDs
export function getLatestCollectById(collections: ICollection[]): ICollection[] {
  const uniqueCollectionsMap = collections.reduce((acc, current) => {
    const existing = acc.get(current.loanidx);
    if (!existing || existing.receivedz < current.receivedz) {
      acc.set(current.loanidx, current);
    }
    return acc;
  }, new Map<string, ICollection>());
  return Array.from(uniqueCollectionsMap.values());
}

// 6. Method to Make IDs
export function uniqueNames(names: string[]): string[] {
  return [...new Set(names)];
}


// 7. Method to Make IDs
export function getUniqueByKey<T>(items: T[], key: keyof T): T[] {
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

export const getUniqueByLoans = <K extends keyof ILoan>(key: K, data: ILoan[]): ILoan[] => {
  return Array.from(
    data
      .reduce((map: Map<string, ILoan>, loan) => {
        const normalizedKey = String(loan[key]).toLowerCase();
        const existingLoan = map.get(normalizedKey);

        // If the loan doesn't exist in the map or the current loan has a higher balancex, update the map
        if (!existingLoan || loan.balancex > existingLoan.balancex) {
          map.set(normalizedKey, loan);
        }

        return map;
      }, new Map())
      .values(),
  );
};



// ==============================|TWELVE|========================================


