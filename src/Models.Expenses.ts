//
// Total (7)
// ====================================================|1|
//

export interface IExpense {
  [key: string]: any;
  id?: string; // UUID
  enforcerx: string;
  amountx: number;
  created: string;
  updated: string;
  fotox: number;
  registrar: string;
  url: string;
  rank: number | null;
  approvedx: string; // Not Used
  futurex: string | null;
  purposex: string;
  descriptionx: string | null;
  categoryx: string; // default 'false'
}

// ====================================================|2|

export type ExpenseProgress = 'await' | 'allow' | 'rejected' | 'paid' | 'completed' | "pending";

// ====================================================|3|
export interface IExpenseV2 {
  id?: string;
  beneficiary: string;
  amount: number;
  updated: string;
  created: string;
  progress: ExpenseProgress;
  username: string,
  rank?: string;
  ranked?: number
  benefactor_sum?: number;
  purpose: string;
  narative: string;
}

//  ====================================================|4|

export interface IDeposit {
  [key: string]: any;
  id: any;
  enforcer: string;
  source: string | null;
  deposit_type: string | null;
  destination: string | null;
  status: string;
  month: number;
  year: number;
  created: string;
  updated: string;
  deadline: string | Date | null;
  rank: number;
  registrar: string;
  url: string; // default 'deposits'
  amount: number;
  amount_source: number;
  receipt_number: number;
  description: string | null;
  narative: string;
}

// ====================================================|5|
export interface IShopping {
  [key: string]: any;
  id?: number;
  admin: string;
  description: string;
  name: string;
  category: string; //5
  paymethod: string;
  status: string;
  amount: number;
  units: number;
  created: Date;
  updated: Date; //10
  registrar: string;
  rank: string | number;
  url: string; // default 'shoppings'
}

// ====================================================|6|

export interface IProperty {
  [key: string]: any;
  id?: number;
  description: string;
  residence: string;
  purpose: string;
  valued: number;
  caretaker: string;
  cost: number;
  units: number;
  totals: number;
  created: Date;
  updated: Date;
  registrar: string;
  url: string; // default 'expenses'
}

// ====================================================|7|

export interface IAnalytics {
  [key: string]: any;
  id?: number;
  created: Date;
  yearx?: number;
  monthx?: string;
  collectedx?: number;
  disbursedx?: number;
  updated?: Date;
  enforcerx?: string;
  leaderx?: string;
  fotox: number;
  requiredx?: number;
  profitx?: number;
  dealx?: number;
  periodx?: string;
  penaltyx?: number;
  balance_open?: number;
  balance_triad?: number;
  mProfited: number;
  mSalaries: number;
  success: number;
  url: string; // default 'analytics'
}
// ====================================================|8|

export interface IPenalty {
  [key: string]: any;
  indexpenalty: number; //2
  loaneex: string;
  enforcerx: string; //4
  statusx: string;
  baddays: number; //6
  loanidx: string;
  receivedx: number; //10
  requiredx: number;
  tenurenow: number; //12
  tenurefinal: number;
  principalx: number; //14
  chargeperday: number;
  debtpenalties: number; // 16
  debtmonthly: number;
  debttotal: number; //8
  updated: Date;
  datedeadlinex: Date;
  datesettlementx: Date; //20
  url: string; // default 'penalties'
}

// ====================================================|9|

