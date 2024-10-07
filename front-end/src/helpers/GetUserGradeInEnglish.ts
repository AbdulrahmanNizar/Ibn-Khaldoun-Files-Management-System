export const getUserGradeInEnglish = (userGrade: string) => {
  switch (userGrade != "") {
    case userGrade == "الاول ابتدائي":
      return "firstGrade";
      break;
    case userGrade == "الثاني ابتدائي":
      return "secondGrade";
      break;
    case userGrade == "الثالث ابتدائي":
      return "thirdGrade";
      break;
    case userGrade == "الرابع ابتدائي":
      return "forthGrade";
      break;
    case userGrade == "الخامس ابتدائي":
      return "fifthGrade";
      break;
    case userGrade == "السادس ابتدائي":
      return "sixthGrade";
      break;
    case userGrade == "الاول متوسط":
      return "seventhGrade";
      break;
    case userGrade == "الثاني متوسط":
      return "eighthGrade";
      break;
    case userGrade == "الثالث متوسط":
      return "ninethGrade";
      break;
    case userGrade == "الاول ثانوي":
      return "tenthGrade";
      break;
    case userGrade == "الثاني ثانوي":
      return "eleventhGrade";
      break;
    case userGrade == "الثالث ثانوي":
      return "twelfGrade";
      break;
  }
};
