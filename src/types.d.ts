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