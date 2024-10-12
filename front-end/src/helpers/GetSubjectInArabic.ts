export const getSubjectNameInArabic = (subjectName: string) => {
  switch (subjectName != "") {
    case subjectName == "math":
      return "رياضيات";
      break;
    case subjectName == "arabic":
      return "لغتي";
      break;
    case subjectName == "scince":
      return "علوم";
      break;
    case subjectName == "english":
      return "الانجليزية";
      break;
    case subjectName == "islamic":
      return "الاسلاميات";
      break;
    case subjectName == "social studies":
      return "الاجتماعيات";
      break;
    case subjectName == "computer skills":
      return "الرقمية";
      break;
    case subjectName == "critical thinking":
      return "التفكير";
      break;
    case subjectName == "art":
      return "الفنية";
      break;
    case subjectName == "life skills":
      return "الحياتية";
      break;
  }
};
