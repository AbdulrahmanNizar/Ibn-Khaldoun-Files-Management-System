const currentYear: number = new Date().getFullYear() + 1;

const currentMonth: number = new Date().getMonth() + 1;

const today: number = new Date().getDate();

export const nextYearDate = {
  Year: currentYear,
  Month: currentMonth,
  Today: today,
};
