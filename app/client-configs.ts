export type ClientCourse = {
  title: string;
  desc: string;
  level: string;
  duration: string;
  schedule: string;
};

export type ClientConfig = {
  slug: string;
  centerName: string;
  tagline: string;
  phoneDisplay: string;
  phoneE164: string;
  telegramLink: string;
  city: string;
  courses: ClientCourse[];
};

export const CLIENTS: Record<string, ClientConfig> = {
  default: {
    slug: "default",
    centerName: "7.0+ Center",
    tagline: "IELTS • CEFR • Math",
    phoneDisplay: "+998 90 123 45 67",
    phoneE164: "+998901234567",
    telegramLink: "https://t.me/your_center_username",
    city: "Toshkent",
    courses: [
      {
        title: "IELTS tayyorlov kursi",
        desc: "Target band 6.5–7.5+. Academic va General yo‘nalishlar, barcha bo‘limlar (Listening, Reading, Writing, Speaking) bo‘yicha chuqur tayyorgarlik.",
        level: "Intermediate (B1) va undan yuqori",
        duration: "3–6 oy intensiv",
        schedule: "Haftasiga 3–5 marotaba"
      },
      {
        title: "CEFR (A2–C1) kurslari",
        desc: "Maktab, litsey va universitet talabalari uchun grammatikaga boy, lekin amaliyotga yo‘naltirilgan CEFR kurslari.",
        level: "Boshlang‘ichdan Advanced gacha",
        duration: "2–8 oy",
        schedule: "Haftasiga 3 marotaba"
      },
      {
        title: "Milliy sertifikatlar",
        desc: "DTM, milliy imtihon va sertifikatlar uchun test strategiyalari, reading va listeningni kuchaytirish.",
        level: "B1 va undan yuqori",
        duration: "2–4 oy",
        schedule: "Haftasiga 3–4 marotaba"
      },
      {
        title: "Matematika (IELTS & grant)",
        desc: "Ingliz tilida va o‘zbek tilida matematika. Grant, foundation va chet el universitetlariga tayyorlanish.",
        level: "9-sinfdan yuqori",
        duration: "3–9 oy",
        schedule: "Haftasiga 2–3 marotaba"
      }
    ]
  },
  iteacher: {
    slug: "iteacher",
    centerName: "iTeacher Learning Center",
    tagline: "IELTS • CEFR • Math",
    phoneDisplay: "+998 90 777 00 11",
    phoneE164: "+998907770011",
    telegramLink: "https://t.me/iteacher_center",
    city: "Toshkent",
    courses: [
      {
        title: "IELTS tayyorlov kursi",
        desc: "Target band 6.5–7.5+. Academic va General yo‘nalishlar, barcha bo‘limlar (Listening, Reading, Writing, Speaking) bo‘yicha chuqur tayyorgarlik.",
        level: "Intermediate (B1) va undan yuqori",
        duration: "3–6 oy intensiv",
        schedule: "Haftasiga 3–5 marotaba"
      },
      {
        title: "CEFR (A2–C1) kurslari",
        desc: "Maktab, litsey va universitet talabalari uchun grammatikaga boy, lekin amaliyotga yo‘naltirilgan CEFR kurslari.",
        level: "Boshlang‘ichdan Advanced gacha",
        duration: "2–8 oy",
        schedule: "Haftasiga 3 marotaba"
      },
      {
        title: "Milliy sertifikatlar",
        desc: "DTM, milliy imtihon va sertifikatlar uchun test strategiyalari, reading va listeningni kuchaytirish.",
        level: "B1 va undan yuqori",
        duration: "2–4 oy",
        schedule: "Haftasiga 3–4 marotaba"
      },
      {
        title: "Matematika (IELTS & grant)",
        desc: "Ingliz tilida va o‘zbek tilida matematika. Grant, foundation va chet el universitetlariga tayyorlanish.",
        level: "9-sinfdan yuqori",
        duration: "3–9 oy",
        schedule: "Haftasiga 2–3 marotaba"
      }
    ]
  }
};
