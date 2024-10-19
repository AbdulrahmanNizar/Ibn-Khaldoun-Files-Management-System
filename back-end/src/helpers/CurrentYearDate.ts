const currentYear: number = new Date().getFullYear();

const currentMonth: number = new Date().getMonth() + 1;

const today: number = new Date().getDate();

export const date = {
  Year: currentYear,
  Month: currentMonth,
  Today: today,
};
