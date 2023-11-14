import { Models } from "./models";
/**
 * DATABASE TYPES
 */
export interface HomeCard {
    title: string;
    body: string;
    image: string;
    category: string;
}
export type HomeCardProps = Models.Document & HomeCard;
export interface Profile {
    name: string;
    pid: string;
    avatar?: string;
    title?: string;
    mobile?: string;
}
export type ProfileProps = Models.Document & Profile;
export interface Neighborhood {
    name: string;
}
export type NeighborhoodProps = Models.Document & Neighborhood;
export interface Christmas {
    user: UserProps;
    pid: string;
}
export type ChristmasProps = Models.Document & Christmas;
export interface User {
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
}
export type UserProps = Models.Document & User;
export type UserTypeForm = Omit<User, "birthday" | "neighborhood"> & {
    birthday: Date;
    neighborhood?: string;
};
export interface Menu {
    key: string;
}
export type MenuProps = Models.Document & Menu;
export interface Lunch {
    profile: ProfileProps;
    start: string;
    end?: string;
    hours: number;
    minutes: number;
    isInRange: boolean;
    hoursExtended: number;
    minutesExtended: number;
}
export type LunchProps = Models.Document & Lunch;
export declare enum OvertimeTypes {
    TYPE_25 = "TYPE_25",
    TYPE_50 = "TYPE_50"
}
export interface Overtime {
    profile: ProfileProps;
    start: string;
    end?: string;
    hours: number;
    minutes: number;
    type: OvertimeTypes;
}
export type OvertimeProps = Models.Document & Overtime;
export interface Markin {
    profile: ProfileProps;
    profileId: string;
    workday: string;
    date: string;
    isComputed: boolean;
}
export type MarkinProps = Models.Document & Markin;
export interface Workday {
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
}
export type WorkdayProps = Models.Document & Workday;
export interface Holliday {
    name: string;
    date: string;
}
export type HollidayProps = Models.Document & Holliday;
export interface ClockMarkinOptionProps {
    isWorkingDay: boolean;
    isLeaveDay: boolean;
}
export type formatArgumentType = string | Date | number | boolean;
export interface WorkCount {
    profileId: string;
    type: string;
    date: string;
    hours: number;
    minutes: number;
}
export type WorkCountProps = Models.Document & WorkCount;
export interface Configuration {
    key: string;
    option: string;
}
export type ConfigurationProps = Models.Document & Configuration;
/**
 * PROYECT TYPES
 */
export interface FilterProps {
    column: SelectOptionProps;
    operator: SelectOptionProps;
    value: formatArgumentType;
    optional: formatArgumentType;
}
export interface FilterFormProps {
    column: string;
    operator: string;
    value: formatArgumentType;
    optional: formatArgumentType;
}
export interface TimeHoursMinutes {
    hours: number;
    minutes: number;
}
export interface SelectOptionProps {
    label: string;
    value: string;
}
export interface addMarkin {
    $id: string;
    date: string | Date;
    isClock: boolean;
}
export interface SchedulesProps {
    name: string;
    type: string;
    dayStart: number;
    dayEnd: number;
    time: {
        start: string;
        end: string;
    };
}
export interface HoursAndExtended {
    hours: number;
    minutes: number;
    hoursExtended: number;
    minutesExtended: number;
}
export interface Period {
    start: string;
    end: string;
}
export interface ServerSession {
    cookie: string;
    session: {
        account: Models.User<Models.Preferences> | null;
        menu: MenuProps[];
    };
}
export interface TimeObjectProps {
    hours: number;
    minutes: number;
    start: string;
    end: string;
}
export interface TimeToSubtract {
    hours: number;
    minutes: number;
}
