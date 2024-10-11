const currentYear: number = new Date().getFullYear();

const currentMonth: number = new Date().getMonth() + 1;

const today: number = new Date().getDate();

export const date: string = `${currentMonth}-${today}-${currentYear}`;
