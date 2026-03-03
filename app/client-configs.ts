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
  heroTitle?: string;
  heroSubtitle?: string;
  ctaPrimaryText?: string;
  ctaSecondaryText?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
  coursesTitle?: string;
  coursesSubtitle?: string;
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
    centerName: "iTeacher Academy",
    tagline: "Ingliz tili noldan IELTSgacha",
    heroTitle: "iTeacher Academy",
    heroSubtitle:
      "Ingliz tili noldan IELTSgacha. General, CEFR va Kids kurslari — tajribali ustozlar bilan natijaga yo‘l.",
    ctaPrimaryText: "Kursga yozilish",
    ctaSecondaryText: "Savol berish",
    ctaPrimaryHref: "#trial",
    ctaSecondaryHref: "#trial",
    coursesTitle: "Kurslar",
    coursesSubtitle:
      "Darajangiz va maqsadingizga mos yo‘nalishni tanlang — General, CEFR yoki Kids.",
    phoneDisplay: "(+998-97-582-02-00)",
    phoneE164: "+998975820200",
    telegramLink: "https://t.me/iTeacher_Academy",
    city: "Toshkent",
    courses: [
      {
        title: "General kurslar",
        desc: "Ingliz tilini bosqichma-bosqich mustahkamlash: grammar, speaking, listening va vocabulary amaliyoti.",
        level: "A1, A2, B1, B1+, B2, C1",
        duration: "Har bir bosqichga mos dastur",
        schedule: "Haftasiga 3 marotaba"
      },
      {
        title: "CEFR gruppalari",
        desc: "CEFR talablari asosida barcha ko‘nikmalar bo‘yicha tizimli tayyorlov.",
        level: "Darajaga qarab guruhlar",
        duration: "Bosqichma-bosqich",
        schedule: "Haftasiga 3 marotaba"
      },
      {
        title: "CEFR + General kurslar",
        desc: "CEFR tizimi va General yo‘nalishini birlashtirgan intensiv format.",
        level: "Individual darajaga mos",
        duration: "Maqsadga qarab",
        schedule: "Haftasiga 3–4 marotaba"
      },
      {
        title: "Kids kurslari",
        desc: "Bolalar uchun qiziqarli va samarali ingliz tili darslari.",
        level: "Kids 0, Kids 1, Kids 2, Kids 3, Kids 4, Kids 5, Kids 6",
        duration: "Yosh va darajaga mos",
        schedule: "Haftasiga 2–3 marotaba"
      }
    ]
  }
};
