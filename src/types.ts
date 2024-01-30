import { Models } from "./models";

/**
 * DATABASE TYPES
 */
export type HomeCard = {
  title: string;
  body: string;
  image: string;
  category: string;
};
export type HomeCardProps = Models.Document & HomeCard;

export type Profile = {
  name: string;
  pid: string;
  avatar?: string;
  title?: string;
  mobile?: string;
  departmentId?: string;
  department?: Department;
};
export type ProfileProps = Models.Document & Profile;

export type Department = {
  name: string;
  short_name: string;
  parentId?: string;
};
export type DepartmentProps = Models.Document & Department;

export type Neighborhood = {
  name: string;
};
export type NeighborhoodProps = Models.Document & Neighborhood;

export type Christmas = {
  user: UserProps;
  pid: string;
};
export type ChristmasProps = Models.Document & Christmas;

export type User = {
  name: string;
  firstname: string;
  lastname: string;
  gender: string;
  pid: string;
  birthday: string;
  region: string;
  city: string;
  neighborhood?: NeighborhoodProps;
  address: string;
  mobile?: string;
  email?: string;
  phone?: string;
  registeredBy?: string;
};
export type UserProps = Models.Document & User;
export type UserTypeForm = Omit<User, "birthday" | "neighborhood"> & {
  birthday: Date;
  neighborhood?: string;
};

export type Menu = {
  key: string;
};
export type MenuProps = Models.Document & Menu;

export type Lunch = {
  profile: ProfileProps;
  start: string;
  end?: string;
  hours: number;
  minutes: number;
  isInRange: boolean;
  hoursExtended: number;
  minutesExtended: number;
};
export type LunchProps = Models.Document & Lunch;

export enum OvertimeTypes {
  TYPE_25 = "TYPE_25",
  TYPE_50 = "TYPE_50",
}

export type Overtime = {
  profile: ProfileProps;
  start: string;
  end?: string;
  hours: number;
  minutes: number;
  type: OvertimeTypes;
};
export type OvertimeProps = Models.Document & Overtime;

export type Markin = {
  profile: ProfileProps;
  profileId: string;
  workday: string;
  date: string;
  isComputed: boolean;
};
export type MarkinProps = Models.Document & Markin;

export type Workday = {
  profile: ProfileProps;
  start: string;
  end?: string;
  hours: number;
  minutes: number;
  inTime: boolean;
  isWorkingDay: boolean;
  lunch?: LunchProps;
  overtime: OvertimeProps[];
  markin: MarkinProps[];
};
export type WorkdayProps = Models.Document & Workday;

export type Holliday = {
  name: string;
  date: string;
};
export type HollidayProps = Models.Document & Holliday;

export type ClockMarkinOptionProps = {
  isWorkingDay: boolean;
  isLeaveDay: boolean;
};
export type formatArgumentType = string | Date | number | boolean;

export type WorkCount = {
  profileId: string;
  type: string;
  date: string;
  hours: number;
  minutes: number;
};
export type WorkCountProps = Models.Document & WorkCount;

export type Configuration = {
  key: string;
  option: string;
};
export type ConfigurationProps = Models.Document & Configuration;

/**
 * PROYECT TYPES
 */
export type FilterProps = {
  column: SelectOptionProps;
  operator: SelectOptionProps;
  value: formatArgumentType;
  optional: formatArgumentType;
};

export type FilterFormProps = {
  column: string;
  operator: string;
  value: formatArgumentType;
  optional: formatArgumentType;
};

export type TimeHoursMinutes = {
  hours: number;
  minutes: number;
};

export type SelectOptionProps = {
  label: string;
  value: string;
};

export type addMarkin = {
  $id: string;
  date: string | Date;
  isClock: boolean;
};

export type SchedulesProps = {
  name: string;
  type: string;
  dayStart: number;
  dayEnd: number;
  time: {
    start: string;
    end: string;
  };
};

export type HoursAndExtended = {
  hours: number;
  minutes: number;
  hoursExtended: number;
  minutesExtended: number;
  totalHours: number;
  totalMinutes: number;
};

export type Period = {
  start: string;
  end: string;
};

export type ServerSession = {
  cookie: string;
  session: {
    account: Models.User<Models.Preferences> | null;
    menu: MenuProps[];
  };
};

export type TimeObjectProps = {
  hours: number;
  minutes: number;
  start: string;
  end: string;
};

export type TimeToSubtract = {
  hours: number;
  minutes: number;
};

/** FINANCE */

export type FinanceRequest = {
  requestId: string;
  departmentId: string;
  documentType: string;
  classification: string;
  content?: string;
  purchaseType?: string;
  managerId?: string;
  amount: number;
  publishingDate: string;
  awairdId: string;
  awardDate: string;
  supplierId: string;
  purchaseOrderId: string;
  purchaseOrderDate: string;
  purchaseOrderLink: string;
};

export type FinanceRequestProps = FinanceRequest & Models.Document;

export type FinanceTracking = {
  requestId: string;
  submit: string;
  departmentId: string;
  note: string;
};

export type FinanceTrackingProps = FinanceTracking & Models.Document;

export type FinanceTimeline = {
  profileId: string;
  eventName: string;
  additional: string;
};

export type FinanceTimelineProps = FinanceTimeline & Models.Document;

export type FinanceSupplier = {
  pid: string;
  name: string;
  mobile?: string;
  phone?: string;
  email?: string;
  accountNumber?: string;
  accountBank?: string;
  emailNotification?: string;
  emailSubjet?: string;
  legalRepresentativeName?: string;
  legalRepresentativePid?: string;
};

export type FinanceSupplierProps = FinanceSupplier & Models.Document;
