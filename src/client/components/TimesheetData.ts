// TimesheetData.ts

export interface TimesheetDay {
    day: number;
    weekday: string;
    checkIn: string;
    checkOut: string;
    totalHours: string;
  }
  
  export interface TimesheetWeekData {
    [key: string]: TimesheetDay[];
  }
  
  export const weekRanges = ['22-26', '29-02', '05-09', '12-16', '19-23'];
  
  export const timesheetData: TimesheetWeekData = {
    '22-26': [
      { day: 22, weekday: 'Mon', checkIn: '12:00', checkOut: '19:00', totalHours: '9:00' },
      { day: 23, weekday: 'Tue', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 24, weekday: 'Wed', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 25, weekday: 'Thu', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 26, weekday: 'Fri', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
    ],
    '29-02': [
      { day: 29, weekday: 'Mon', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 30, weekday: 'Tue', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 31, weekday: 'Wed', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 1, weekday: 'Thu', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 2, weekday: 'Fri', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
    ],
    '05-09': [
      { day: 5, weekday: 'Mon', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 6, weekday: 'Tue', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 7, weekday: 'Wed', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 8, weekday: 'Thu', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 9, weekday: 'Fri', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
    ],
    '12-16': [
      { day: 12, weekday: 'Mon', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 13, weekday: 'Tue', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 14, weekday: 'Wed', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 15, weekday: 'Thu', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 16, weekday: 'Fri', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
    ],
    '19-23': [
      { day: 19, weekday: 'Mon', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 20, weekday: 'Tue', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 21, weekday: 'Wed', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 22, weekday: 'Thu', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
      { day: 23, weekday: 'Fri', checkIn: '08:00', checkOut: '17:00', totalHours: '9:00' },
    ],
  };