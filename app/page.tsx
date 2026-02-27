"use client";

import { useState, FormEvent } from "react";

type Language = "uz" | "ru";

type CourseKey = "ielts" | "cefr" | "national" | "math";

interface Course {
  key: CourseKey;
  level: string;
  duration: string;
  schedule: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const content = {
  uz: {
    nav: {
      hero: "Bosh sahifa",
      courses: "Kurslar",
      why: "Nega biz?",
      results: "Natijalar",
      teachers: "O‘qituvchilar",
      trial: "Bepul dars",
      testimonials: "Sharhlar",
      faq: "Savollar",
      contact: "Aloqa"
    },
    hero: {
      badge: "IELTS 7.0+ ga tayyorlaning",
      title: "Zamonaviy markazda IELTS va imtihonlarga tayyorlaning",
      subtitle:
        "Toshkentdagi IELTS va CEFR markazi. Kichik guruhlar, kuchli o‘qituvchilar va amaliy speaking/writing darslari bilan qisqa muddatda natijaga chiqing.",
      ctaPrimary: "Bepul darsga yozilish",
      ctaSecondary: "Kurslar bilan tanishish"
    },
    languageToggle: {
      uz: "O‘zbek",
      ru: "Rus tili"
    },
    courses: {
      title: "Kurslarimiz",
      subtitle:
        "Sizning maqsadingizga qarab moslashtirilgan zamonaviy o‘quv dasturlari.",
      items: {
        ielts: {
          name: "IELTS tayyorlov kursi",
          description:
            "Target band 6.5–7.5+. Academic va General yo‘nalishlar, barcha bo‘limlar (Listening, Reading, Writing, Speaking) bo‘yicha chuqur tayyorgarlik.",
          level: "Intermediate (B1) va undan yuqori",
          duration: "3–6 oy intensiv",
          schedule: "Haftasiga 3–5 marotaba"
        },
        cefr: {
          name: "CEFR (A2–C1) kurslari",
          description:
            "Maktab, litsey va universitet talabalari uchun grammatikaga boy, lekin amaliyotga yo‘naltirilgan CEFR kurslari.",
          level: "Boshlang‘ichdan Advanced gacha",
          duration: "2–8 oy",
          schedule: "Haftasiga 3 marotaba"
        },
        national: {
          name: "Milliy sertifikatlar",
          description:
            "DTM, milliy imtihon va sertifikatlar uchun test strategiyalari, reading va listeningni kuchaytirish.",
          level: "B1 va undan yuqori",
          duration: "2–4 oy",
          schedule: "Haftasiga 3–4 marotaba"
        },
        math: {
          name: "Matematika (IELTS & grant)",
          description:
            "Ingliz tilida va o‘zbek tilida matematika. Grant, foundation va chet el universitetlariga tayyorlanish.",
          level: "9-sinfdan yuqori",
          duration: "3–9 oy",
          schedule: "Haftasiga 2–3 marotaba"
        }
      }
    },
    why: {
      title: "Nega aynan bizni tanlashadi?",
      subtitle:
        "Har bir talaba uchun individual yondashuv va haqiqiy natijaga yo‘naltirilgan tizim.",
      points: [
        {
          title: "Tajriba va natijalar",
          text: "Har oy o‘rtacha 6.5–7.5 band natija. Cheshi kitoblar emas, balki haqiqiy exam papers asosida darslar."
        },
        {
          title: "Kichik guruhlar",
          text: "Guruhlar 6–10 kishidan iborat. Har bir talabaga feedback va speaking amaliyoti beriladi."
        },
        {
          title: "Speaking & Writing club",
          text: "Har hafta bepul speaking va writing feedback sessiyalari, real exam kondisyonida mock testlar."
        },
        {
          title: "Qulay joylashuv",
          text: "Toshkent markazida, metro va jamoat transportiga yaqin, zamonaviy va qulay sinfxonalar."
        }
      ]
    },
    results: {
      title: "Talabalar natijalari",
      subtitle:
        "O‘quvchilarimiz real IELTS imtihonida olgan band ballari va grant yutuqlari.",
      stats: [
        { label: "O‘rtacha IELTS band", value: "7.0+" },
        { label: "6.5+ olganlar", value: "80% talaba" },
        { label: "Chet elga ketganlar", value: "50+ talaba" },
        { label: "Grant yutganlar", value: "30+ talaba" }
      ]
    },
    teachers: {
      title: "O‘qituvchilarimiz",
      subtitle:
        "IELTS 8.0+ band egasi, xalqaro sertifikatlarga ega va ko‘p yillik tajribaga ega mutaxassislar.",
      items: [
        {
          name: "Jahongir Akmalov",
          role: "Head IELTS Instructor",
          description:
            "IELTS 8.0 (L 8.5, R 8.5, W 7.0, S 7.5). 6+ yillik tajriba, yuzlab 7.0+ natijalar."
        },
        {
          name: "Malika Raximova",
          role: "CEFR & National Certificates",
          description:
            "C1 daraja, CEFR va milliy imtihonlar bo‘yicha kuchli grammatik baza va tushuntirish uslubi."
        },
        {
          name: "Timur Karimov",
          role: "Math & Logical Thinking",
          description:
            "10+ yillik tajribaga ega matematika ustoz. Grant va foundation dasturlariga tayyorlaydi."
        }
      ]
    },
    trial: {
      title: "Bepul sinov darsiga yoziling",
      subtitle:
        "Qiziqayotgan kursingizni tanlang, qisqa testdan o‘ting va darajangizga mos guruhni bepul sinab ko‘ring.",
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      course: "Kursni tanlang",
      submit: "Ariza yuborish",
      note: "Arizani yuborganingizdan so‘ng administratorimiz siz bilan Telegram yoki telefon orqali bog‘lanadi.",
      success: "Rahmat! Arizangiz yuborildi. Tez orada siz bilan bog‘lanamiz.",
      error: "Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring."
    },
    testimonials: {
      title: "Talabalar fikrlari",
      subtitle:
        "Biz haqimizdagi eng asosiy fikr – bu talabalarimizning natijalari va ularning sharhlari.",
      items: [
        {
          name: "Dilnoza, IELTS 7.5",
          text: "Speaking club va har haftalik mock testlar tufayli imtihonda o‘zimni juda xotirjam his qildim. Writing bo‘yicha bergan feedbacklar natijamni 6.0 dan 7.0 ga ko‘tardi."
        },
        {
          name: "Azizbek, IELTS 7.0",
          text: "Darslar juda tizimli va tushunarli. Har bir darsdan keyin uyga aniq vazifa va materiallar beriladi. Listening bo‘yicha strategiyalar juda foydali bo‘ldi."
        },
        {
          name: "Madina, CEFR C1",
          text: "CEFR kursi orqali nafaqat imtihonni topshirdim, balki kundalik speaking va writing ko‘nikmalarim ham ancha oshdi."
        }
      ]
    },
    faq: {
      title: "Ko‘p so‘raladigan savollar",
      subtitle:
        "Agar bu yerda savolingiz bo‘lmasa, bizga bemalol qo‘ng‘iroq qiling yoki Telegram yozing.",
      items: [
        {
          question: "Bepul sinov darsi qanday o‘tadi?",
          answer:
            "Avval darajangizni aniqlash uchun qisqa test o‘tkazamiz, so‘ngra sizni mos guruhga joylashtirib, 1 ta to‘liq darsni bepul kuzatishingiz mumkin bo‘ladi."
        },
        {
          question: "To‘lov qanday amalga oshiriladi?",
          answer:
            "To‘lovlar naqd, plastik karta yoki Click/Payme orqali amalga oshiriladi. Oylik yoki butun kurs uchun to‘lov qilish mumkin."
        },
        {
          question: "Guruhlar soni nechta?",
          answer:
            "Odatda bir guruhda 6–10 nafar talaba bo‘ladi. Bu har bir talabaga yetarli e’tibor berish imkonini yaratadi."
        },
        {
          question: "Onlayn darslar bormi?",
          answer:
            "Ha, chet elda yoki boshqa shaharda bo‘lgan talabalar uchun onlayn guruhlarimiz ham mavjud."
        }
      ] as FaqItem[]
    },
    contact: {
      title: "Biz bilan bog‘laning",
      subtitle:
        "Savollaringiz bormi? Hoziroq qo‘ng‘iroq qiling yoki Telegramda yozing.",
      phoneLabel: "Telefon",
      telegramLabel: "Telegramga yozish"
    }
  },
  ru: {
    nav: {
      hero: "Главная",
      courses: "Курсы",
      why: "Почему мы?",
      results: "Результаты",
      teachers: "Преподаватели",
      trial: "Пробный урок",
      testimonials: "Отзывы",
      faq: "FAQ",
      contact: "Контакты"
    },
    hero: {
      badge: "Подготовка к IELTS 7.0+",
      title: "Современный центр подготовки к IELTS и экзаменам",
      subtitle:
        "Центр подготовки к IELTS и CEFR в Ташкенте. Небольшие группы, сильные преподаватели и фокус на реальных экзаменационных заданиях.",
      ctaPrimary: "Записаться на пробный урок",
      ctaSecondary: "Посмотреть курсы"
    },
    languageToggle: {
      uz: "Узбекский",
      ru: "Русский"
    },
    courses: {
      title: "Наши курсы",
      subtitle:
        "Программы, адаптированные под ваши цели: учёба за рубежом, национальные экзамены или развитие языка.",
      items: {
        ielts: {
          name: "Курс подготовки к IELTS",
          description:
            "Цель – 6.5–7.5+ band. Academic и General, проработка всех секций экзамена с детальным разбором.",
          level: "Intermediate (B1) и выше",
          duration: "Интенсив 3–6 месяцев",
          schedule: "3–5 занятий в неделю"
        },
        cefr: {
          name: "Курсы CEFR (A2–C1)",
          description:
            "Сильная грамматика + живой разговорный язык. Подготовка школьников и студентов к международным и национальным экзаменам.",
          level: "С нуля до Advanced",
          duration: "2–8 месяцев",
          schedule: "3 занятия в неделю"
        },
        national: {
          name: "Национальные сертификаты",
          description:
            "Подготовка к ДТМ и другим национальным экзаменам: стратегия прохождения тестов, тренировка чтения и аудирования.",
          level: "От B1 и выше",
          duration: "2–4 месяца",
          schedule: "3–4 занятия в неделю"
        },
        math: {
          name: "Математика (IELTS & гранты)",
          description:
            "Подготовка по математике на узбекском и английском языках для грантов, foundation и зарубежных вузов.",
          level: "С 9 класса и выше",
          duration: "3–9 месяцев",
          schedule: "2–3 занятия в неделю"
        }
      }
    },
    why: {
      title: "Почему выбирают нас?",
      subtitle:
        "Никаких случайных результатов – только системная подготовка и прозрачная статистика.",
      points: [
        {
          title: "Реальные баллы студентов",
          text: "Средний результат – 7.0+. Работаем с официальными материалами, регулярно проводим пробные экзамены."
        },
        {
          title: "Небольшие группы",
          text: "Группы до 10 человек. Много speaking-практики, индивидуальный разбор writing и домашних заданий."
        },
        {
          title: "Клубы и дополнительные занятия",
          text: "Еженедельные speaking club, разбор сочинений и консультации по выбору университета или страны."
        },
        {
          title: "Удобное расположение",
          text: "Мы находимся в центре Ташкента, рядом с метро и остановками. Современные и комфортные аудитории."
        }
      ]
    },
    results: {
      title: "Результаты студентов",
      subtitle:
        "Мы фиксируем каждый официальный результат студентов и строим программу на основе этих данных.",
      stats: [
        { label: "Средний балл IELTS", value: "7.0+" },
        { label: "Студенты с 6.5+", value: "80% группы" },
        { label: "Поступили за рубеж", value: "50+ студентов" },
        { label: "Выиграли гранты", value: "30+ студентов" }
      ]
    },
    teachers: {
      title: "Наши преподаватели",
      subtitle:
        "Команда с высоким личным баллом IELTS, опытом работы и любовью к преподаванию.",
      items: [
        {
          name: "Жахонгир Акмалов",
          role: "Старший преподаватель IELTS",
          description:
            "IELTS 8.0. Специализируется на развитии speaking и writing, помогает студентам выйти на 7.0+."
        },
        {
          name: "Малика Рахимова",
          role: "CEFR и национальные экзамены",
          description:
            "Преподаёт CEFR, готовит к национальным экзаменам. Сильная грамматика плюс понятные объяснения."
        },
        {
          name: "Тимур Каримов",
          role: "Математика и логика",
          description:
            "Готовит школьников и студентов к грантам и вступительным экзаменам по математике."
        }
      ]
    },
    trial: {
      title: "Запишитесь на бесплатный пробный урок",
      subtitle:
        "Оставьте контакты, выберите курс – администратор свяжется с вами и подберёт подходящую группу.",
      name: "Ваше имя",
      phone: "Номер телефона",
      course: "Выберите курс",
      submit: "Отправить заявку",
      note: "После отправки заявки мы свяжемся с вами по телефону или в Telegram и ответим на все вопросы.",
      success:
        "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
      error: "Произошла ошибка. Пожалуйста, попробуйте еще раз."
    },
    testimonials: {
      title: "Отзывы студентов",
      subtitle:
        "Самый честный показатель нашей работы – истории и результаты наших студентов.",
      items: [
        {
          name: "Дилноза, IELTS 7.5",
          text: "Благодаря speaking club и постоянным mock exam я чувствовала себя уверенно на настоящем экзамене. Особенно помог разбор writing."
        },
        {
          name: "Азизбек, IELTS 7.0",
          text: "Уроки структурированные, много практики. Понравилось, что каждый урок есть чёткая цель и домашнее задание."
        },
        {
          name: "Мадина, CEFR C1",
          text: "Курс помог не только сдать экзамен, но и чувствовать себя свободно в разговоре и письме."
        }
      ]
    },
    faq: {
      title: "Вопросы и ответы",
      subtitle:
        "Если вы не нашли ответ на свой вопрос, просто позвоните нам или напишите в Telegram.",
      items: [
        {
          question: "Как проходит бесплатный пробный урок?",
          answer:
            "Сначала мы определяем ваш уровень, затем вы посещаете одно полное занятие в подходящей группе и знакомитесь с форматом обучения."
        },
        {
          question: "Как можно оплатить курс?",
          answer:
            "Оплата возможна наличными, банковской картой или через Click/Payme. Можно оплатить помесячно или за весь курс."
        },
        {
          question: "Сколько человек в группе?",
          answer:
            "Обычно 6–10 студентов. Это позволяет уделить внимание каждому и дать достаточно speaking-практики."
        },
        {
          question: "Есть ли онлайн-формат?",
          answer:
            "Да, для студентов из других городов и стран мы проводим занятия онлайн."
        }
      ] as FaqItem[]
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle:
        "Задайте любой вопрос по телефону или напишите нам в Telegram.",
      phoneLabel: "Позвонить",
      telegramLabel: "Написать в Telegram"
    }
  }
} as const;

const courseOptions: { key: CourseKey; uz: string; ru: string }[] = [
  { key: "ielts", uz: "IELTS tayyorlov kursi", ru: "Курс подготовки к IELTS" },
  { key: "cefr", uz: "CEFR kursi", ru: "Курсы CEFR" },
  {
    key: "national",
    uz: "Milliy sertifikatlar",
    ru: "Национальные сертификаты"
  },
  { key: "math", uz: "Matematika", ru: "Математика" }
];

const PHONE_NUMBER_DISPLAY = "+998 90 123 45 67";
const PHONE_NUMBER_LINK = "+998901234567";
const TELEGRAM_LINK = "https://t.me/your_center_username";

export default function HomePage() {
  const [language, setLanguage] = useState<Language>("uz");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const t = content[language];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const course = String(formData.get("course") ?? "").trim();

    setSubmitted(false);
    setSubmitError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone, course })
      });

      if (!response.ok) {
        setSubmitError(true);
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/75 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-2.5 md:py-3.5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 text-xs font-bold shadow-lg shadow-primary-500/40">
              IELTS
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold md:text-base">
                7.0+ Center
              </span>
              <span className="text-[11px] text-slate-400 md:text-xs">
                IELTS • CEFR • Math
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-4 text-[11px] text-slate-300 md:flex md:text-xs">
            <a
              href="#hero"
              className="rounded-full px-2 py-1 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {t.nav.hero}
            </a>
            <a
              href="#courses"
              className="rounded-full px-2 py-1 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {t.nav.courses}
            </a>
            <a
              href="#why"
              className="rounded-full px-2 py-1 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {t.nav.why}
            </a>
            <a
              href="#results"
              className="rounded-full px-2 py-1 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {t.nav.results}
            </a>
            <a
              href="#contact"
              className="rounded-full px-2 py-1 hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="inline-flex rounded-full border border-slate-700 bg-slate-900/60 p-1 text-[11px] shadow-sm md:text-xs">
              <button
                type="button"
                onClick={() => setLanguage("uz")}
                className={`rounded-full px-2 py-1 md:px-3 ${
                  language === "uz"
                    ? "bg-primary-500 text-white shadow shadow-primary-500/40"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t.languageToggle.uz}
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ru")}
                className={`rounded-full px-2 py-1 md:px-3 ${
                  language === "ru"
                    ? "bg-primary-500 text-white shadow shadow-primary-500/40"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t.languageToggle.ru}
              </button>
            </div>
            <a
              href={`tel:${PHONE_NUMBER_LINK}`}
              className="hidden whitespace-nowrap rounded-full bg-gradient-to-r from-primary-500 to-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-primary-500/40 hover:from-primary-400 hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:inline-flex md:text-sm"
            >
              {PHONE_NUMBER_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <section
          id="hero"
          className="section relative overflow-hidden border-b border-slate-800/60"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-[-8rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.32),_transparent_60%)] blur-3xl" />
            <div className="absolute right-[-4rem] top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.25),_transparent_60%)] blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_transparent_60%)] opacity-40 mix-blend-soft-light" />
          </div>

          <div className="container relative grid gap-10 md:grid-cols-[3fr,2.2fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-[11px] font-medium text-primary-200 shadow-md shadow-primary-500/30 md:text-xs">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {t.hero.badge}
              </div>
              <h1 className="mt-5 bg-gradient-to-r from-slate-50 via-sky-300 to-primary-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent md:text-4xl lg:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
                {t.hero.subtitle}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#trial"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-primary-500/50 hover:from-primary-400 hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:px-7 md:py-3.5 md:text-base"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-4 py-2.5 text-xs font-semibold text-slate-100 hover:border-primary-400 hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:px-5 md:text-sm"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-xl shadow-primary-500/30">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live overview
                </span>
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-200">
                  IELTS • CEFR • Math
                </span>
              </div>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex items-center justify-between rounded-2xl bg-slate-800/80 px-4 py-3">
                  <div>
                    <p className="font-semibold text-slate-50">
                      IELTS Intensive group
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Upper-Intermediate • Speaking & Writing focus
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                    7.0+ target
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-100">
                      Speaking & Writing club
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Weekly feedback sessions in exam format
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Sat • 17:00
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-100">
                      CEFR & national exams
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Grammar, reading & listening strategies
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    A2–C1 levels
                  </span>
                </div>
                <div className="mt-2 rounded-2xl border border-dashed border-primary-500/50 bg-primary-500/5 px-4 py-3 text-[11px] text-primary-100">
                  1-haftalik sinov darslari va konsultatsiyalar orqali sizga
                  mos guruhni tanlashga yordam beramiz.
                </div>
                <div className="mt-1 flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-[11px] text-slate-300">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-100">
                      Bugungi dars
                    </span>
                    <span>IELTS Reading & Listening</span>
                  </div>
                  <div className="text-right text-[11px]">
                    <p className="font-semibold text-primary-200">
                      18:30–20:00
                    </p>
                    <p className="text-slate-500">Markaziy filial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="container relative mt-10">
            <div className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-lg shadow-black/20 md:grid-cols-4">
              <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 px-3 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/15 text-primary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12l2-2 4 4 10-10 2 2-12 12-6-6z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-200">
                    7.0+
                  </div>
                  <p className="text-[11px] text-slate-300">
                    O‘rtacha IELTS band
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 px-3 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/15 text-primary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M7 22h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-200">
                    80%
                  </div>
                  <p className="text-[11px] text-slate-300">
                    6.5+ olgan talabalar
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 px-3 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/15 text-primary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6l3 1 3-1 3 1 3-1 3 1" />
                    <path d="M4 6v10a2 2 0 0 0 2 2h12" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-200">
                    50+
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Chet elda o‘qiyotganlar
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-slate-900/80 px-3 py-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/15 text-primary-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3 7h7l-5.5 4.3L18 21l-6-3.8L6 21l1.5-7.7L2 9h7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-200">
                    30+
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Grant va stipendiyalar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section
          id="courses"
          className="section border-b border-slate-800/60 bg-slate-950/40"
        >
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="section-title">{t.courses.title}</h2>
              <p className="section-subtitle">{t.courses.subtitle}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {(
                Object.entries(t.courses.items) as [
                  CourseKey,
                  (typeof t)["courses"]["items"][CourseKey]
                ][]
              ).map(([key, course]) => (
                <div
                  key={key}
                  className="group rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950/80 p-[1px] shadow-sm shadow-black/40 transition hover:-translate-y-0.5 hover:from-primary-500/30 hover:via-slate-900 hover:to-slate-950 hover:shadow-xl hover:shadow-primary-500/30"
                >
                  <article className="flex h-full flex-col justify-between rounded-[1rem] bg-slate-950/90 p-5">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-50">
                        {course.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {course.description}
                      </p>
                    </div>
                    <dl className="mt-5 grid grid-cols-1 gap-3 text-xs text-slate-300 sm:grid-cols-3">
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-slate-500">
                          Level
                        </dt>
                        <dd className="mt-1">{course.level}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-slate-500">
                          Duration
                        </dt>
                        <dd className="mt-1">{course.duration}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wide text-slate-500">
                          Schedule
                        </dt>
                        <dd className="mt-1">{course.schedule}</dd>
                      </div>
                    </dl>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section
          id="why"
          className="section border-b border-slate-800/60 bg-slate-950"
        >
          <div className="container grid gap-8 md:grid-cols-[3fr,2fr] md:items-start">
            <div>
              <h2 className="section-title">{t.why.title}</h2>
              <p className="section-subtitle">{t.why.subtitle}</p>
              <div className="mt-6 space-y-4">
                {t.why.points.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950/80 p-[1px] shadow-sm shadow-black/40"
                  >
                    <div className="rounded-[1rem] bg-slate-950/90 p-4">
                      <h3 className="text-sm font-semibold md:text-base">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-300 md:text-sm">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-primary-500/40 bg-gradient-to-br from-primary-500/20 via-slate-900 to-slate-950 p-5 text-xs text-primary-50 shadow-lg shadow-primary-500/30 md:text-sm">
              <p className="font-semibold">
                &ldquo;Biz uchun eng muhim narsa – talaba natijasi.&rdquo;
              </p>
              <p className="text-primary-100/90">
                Har oy barcha talabalar uchun progress report tayyorlaymiz,
                writinglarni band descriptor bo‘yicha tahlil qilamiz va
                individual tavsiyalar beramiz. Shuning uchun ham ko‘pchilik
                talabalarimiz birinchi marta imtihonga kirganida ham kerakli
                natijasini oladi.
              </p>
            </div>
          </div>
        </section>

        {/* Student results */}
        <section
          id="results"
          className="section border-b border-slate-800/60 bg-slate-950/40"
        >
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="section-title">{t.results.title}</h2>
              <p className="section-subtitle">{t.results.subtitle}</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {t.results.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950/80 p-[1px] text-center shadow-sm shadow-black/40"
                >
                  <div className="rounded-[1rem] bg-slate-950/90 p-4">
                    <div className="text-xl font-semibold text-primary-200 md:text-2xl">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs text-slate-300 md:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teachers */}
        <section
          id="teachers"
          className="section border-b border-slate-800/60 bg-slate-950"
        >
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="section-title">{t.teachers.title}</h2>
              <p className="section-subtitle">{t.teachers.subtitle}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {t.teachers.items.map((teacher) => (
                <div
                  key={teacher.name}
                  className="rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950/80 p-[1px] text-center shadow-sm shadow-black/40"
                >
                  <article className="rounded-[1rem] bg-slate-950/90 p-5">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500/20 text-sm font-semibold text-primary-100">
                      {teacher.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <h3 className="text-sm font-semibold md:text-base">
                      {teacher.name}
                    </h3>
                    <p className="mt-1 text-xs text-primary-200 md:text-sm">
                      {teacher.role}
                    </p>
                    <p className="mt-2 text-xs text-slate-300 md:text-sm">
                      {teacher.description}
                    </p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free trial lesson form */}
        <section
          id="trial"
          className="section border-b border-slate-800/60 bg-slate-950/40"
        >
          <div className="container grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="section-title">{t.trial.title}</h2>
              <p className="section-subtitle">{t.trial.subtitle}</p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-black/40"
              >
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-slate-200 md:text-sm"
                  >
                    {t.trial.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/60"
                    placeholder={
                      language === "uz" ? "Ismingizni kiriting" : "Введите имя"
                    }
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-slate-200 md:text-sm"
                  >
                    {t.trial.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/60"
                    placeholder={
                      language === "uz"
                        ? "+998 90 123 45 67"
                        : "+998 90 123 45 67"
                    }
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="course"
                    className="block text-xs font-medium text-slate-200 md:text-sm"
                  >
                    {t.trial.course}
                  </label>
                  <select
                    id="course"
                    name="course"
                    required
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-50 outline-none ring-primary-500/40 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/60"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {language === "uz"
                        ? "Kursni tanlang"
                        : "Выберите направление"}
                    </option>
                    {courseOptions.map((course) => (
                      <option key={course.key} value={course.key}>
                        {language === "uz" ? course.uz : course.ru}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting
                    ? language === "uz"
                      ? "Yuborilmoqda..."
                      : "Отправка..."
                    : t.trial.submit}
                </button>
                <p className="text-xs text-slate-400">{t.trial.note}</p>
                {submitted && (
                  <p className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
                    {t.trial.success}
                  </p>
                )}
                {submitError && (
                  <p className="rounded-lg border border-rose-500/50 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
                    {t.trial.error}
                  </p>
                )}
              </form>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300 shadow-sm shadow-black/40 md:text-sm">
              <h3 className="text-sm font-semibold text-slate-50 md:text-base">
                IELTS yo‘nalishida qanday yordam beramiz?
              </h3>
              <ul className="mt-2 space-y-2 list-disc pl-4">
                <li>Darajangizga mos guruh va o‘qituvchini tanlab beramiz.</li>
                <li>Hafta davomida speaking va writing uchun qo‘shimcha topshiriqlar.</li>
                <li>Real exam sharoitida muntazam mock testlar tashkil qilamiz.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="section border-b border-slate-800/60 bg-slate-950"
        >
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="section-title">{t.testimonials.title}</h2>
              <p className="section-subtitle">{t.testimonials.subtitle}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {t.testimonials.items.map((item) => (
                <figure
                  key={item.name}
                  className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-slate-800/80 via-slate-900 to-slate-950/80 p-[1px] text-sm text-slate-300 shadow-sm shadow-black/40"
                >
                  <div className="flex h-full flex-col rounded-[1rem] bg-slate-950/90 p-5">
                    <p className="flex-1 text-xs leading-relaxed md:text-sm">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <figcaption className="mt-4 text-xs font-semibold text-slate-100 md:text-sm">
                      {item.name}
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="section border-b border-slate-800/60 bg-slate-950/40"
        >
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="section-title">{t.faq.title}</h2>
              <p className="section-subtitle">{t.faq.subtitle}</p>
            </div>
            <div className="mt-6 space-y-3">
              {t.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-medium text-slate-100 md:text-sm">
                    <span>{item.question}</span>
                    <span className="text-slate-500 group-open:hidden">+</span>
                    <span className="hidden text-slate-500 group-open:block">
                      −
                    </span>
                  </summary>
                  <p className="mt-2 text-xs md:text-sm">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section bg-slate-950">
          <div className="container grid gap-8 md:grid-cols-[3fr,2fr] md:items-center">
            <div>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-subtitle">{t.contact.subtitle}</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${PHONE_NUMBER_LINK}`}
                  className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {t.contact.phoneLabel}: {PHONE_NUMBER_DISPLAY}
                </a>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-primary-500/60 hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {t.contact.telegramLabel}
                </a>
              </div>
            </div>
            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-300 shadow-sm shadow-black/40 md:text-sm">
              <p>
                Ish vaqti: Dushanba–Yakshanba, 10:00–21:00. Darslar jadvali
                guruh va darajaga qarab shakllanadi.
              </p>
              <p>
                Manzil: Toshkent shahri, markaziy hudud (aniq manzilni
                administratorimiz sizga yuboradi).
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60 bg-slate-950/80 py-4 text-center text-[11px] text-slate-500 md:text-xs">
        <div className="container flex flex-col items-center justify-between gap-2 md:flex-row">
          <span>© {new Date().getFullYear()} IELTS 7.0+ Center.</span>
          <span>Made with Next.js 14 & Tailwind CSS.</span>
        </div>
      </footer>

      {/* Mobile bottom CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-lg md:hidden">
        <div className="container flex items-center justify-between gap-3 py-3">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("trial");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="flex-1 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 hover:from-primary-400 hover:to-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {t.hero.ctaPrimary}
          </button>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_NUMBER_LINK}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-primary-500/60 hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label={t.contact.phoneLabel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 5.5C4.5 15 9 19.5 18.5 19.5C19.328 19.5 20 18.828 20 18V15.75C20 15.3358 19.6642 15 19.25 15L16.75 15C16.421 15 16.1375 15.214 16.047 15.53L15.572 17.214C13.8 16.7 11.8 14.8 11.286 13.028L12.97 12.553C13.286 12.4625 13.5 12.179 13.5 11.85L13.5 9.35C13.5 8.93579 13.1642 8.6 12.75 8.6H10.5C9.67157 8.6 9 9.27157 9 10.1V10.1" />
              </svg>
            </a>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 hover:border-primary-500/60 hover:text-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              aria-label={t.contact.telegramLabel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M9.036 14.47 8.77 17.727c.37 0 .53-.159.72-.35l1.732-1.658 3.594 2.634c.658.363 1.124.172 1.303-.61l2.359-11.066.001-.001c.21-.98-.356-1.363-1.002-1.125L4.52 9.39c-.956.371-.942.905-.163 1.146l3.35 1.043 7.777-4.91c.366-.222.701-.103.426.119" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
