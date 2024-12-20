export interface Employee {
  id: string;
  firstName: String;
  lastName: String;
  designation: string;
  nearestCity: string;
  tier: EmployeeTier;
  status: EmployeeStatus;
}

export enum EmployeeTier {
  TIER_ONE = 'TIER_ONE',
  TIER_TWO = 'TIER_TWO',
  TIER_THREE = 'TIER_THREE',
  TIER_FOUR = 'TIER_FOUR',
  TIER_ZERO = 'TIER_FIVE',
}

export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  RESIGNED = 'RESIGNED',
}
