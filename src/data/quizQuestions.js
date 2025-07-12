// const que = QUESTIONS[0].text;
// const ans = QUESTIONS[0].answers[0].text;
// const ansVal = QUESTIONS[0].answers[0].isCorrect;

const QUESTIONS = [
  {
    text: "Co oznacza skrót MMA?",
    answers: [
      { text: "Mixed Martial Arts", isCorrect: true },
      { text: "Maximum Martial Ability", isCorrect: false },
      { text: "Modern Martial Association", isCorrect: false },
      { text: "Main Martial Arena", isCorrect: false },
    ],
  },
  {
    text: "Które wydarzenie MMA przyciągnęło największą publiczność na stadionie?",
    answers: [
      { text: "UFC 129 w Toronto", isCorrect: false },
      { text: "KSW 39: Colosseum w Warszawie", isCorrect: false },
      {
        text: "PRIDE Shockwave 2002 w Tokyo National Stadium",
        isCorrect: true,
      },
      { text: "UFC 243 w Melbourne", isCorrect: false },
    ],
  },
  {
    text: "Kto jest uważany za pioniera MMA i zwycięzcę pierwszego turnieju UFC?",
    answers: [
      { text: "Mark Coleman", isCorrect: false },
      { text: "Royce Gracie", isCorrect: true },
      { text: "Jon Jones", isCorrect: false },
      { text: "Anderson Silva", isCorrect: false },
    ],
  },
  {
    text: "Kto był mistrzem UFC w kategorii półśredniej w latach 2006–2013 i uważany jest za kanadyjskiego dominatora tej dywizji?",
    answers: [
      { text: "Carlos Condit", isCorrect: false },
      { text: "Stephen Thompson", isCorrect: false },
      { text: "Georges St-Pierre", isCorrect: true },
      { text: "Rory MacDonald", isCorrect: false },
    ],
  },
  {
    text: "Który zawodnik MMA nosił przydomek 'Cro Cop'?",
    answers: [
      { text: "Mark Hunt", isCorrect: false },
      { text: "Mirko Filipović", isCorrect: true },
      { text: "Alistair Overeem", isCorrect: false },
      { text: "Fedor Emelianenko", isCorrect: false },
    ],
  },
  {
    text: "Która gala UFC jest rekordzistą pod względem liczby sprzedanych pay-per-view (PPV)?",
    answers: [
      { text: "UFC 193: Rousey vs. Holm", isCorrect: false },
      { text: "UFC 243: Whittaker vs. Adesanya", isCorrect: false },
      { text: "UFC 229: Khabib vs. McGregor", isCorrect: true },
      { text: "UFC 129: St-Pierre vs. Shields", isCorrect: false },
    ],
  },
  {
    text: "Jakie są główne style bazowe w MMA?",
    answers: [
      { text: "Karate, judo, sumo", isCorrect: false },
      { text: "Sambo, taekwondo, krav maga", isCorrect: false },
      { text: "Boks, zapasy, BJJ", isCorrect: true },
      { text: "Kickboxing, aikido, capoeira", isCorrect: false },
    ],
  },
  {
    text: "Która organizacja MMA pochodzi z Polski?",
    answers: [
      { text: "ONE Championship", isCorrect: false },
      { text: "Bellator", isCorrect: false },
      { text: "UFC", isCorrect: false },
      { text: "KSW", isCorrect: true },
    ],
  },
  {
    text: "Czym było PRIDE FC?",
    answers: [
      {
        text: "Japońską federacją MMA, znaną z walk w ringu i braku zakazu uderzeń nogą w głowę leżącego",
        isCorrect: true,
      },
      {
        text: "Organizacją promującą boks tajski w Azji Południowo-Wschodniej",
        isCorrect: false,
      },
      {
        text: "Międzynarodową federacją zapasów olimpijskich",
        isCorrect: false,
      },
      {
        text: "Amerykańskim programem reality-show o tematyce sportów walki",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Który polski zawodnik zdobył mistrzostwo zarówno w KSW, jak i w UFC?",
    answers: [
      { text: "Tomasz Drwal", isCorrect: false },
      { text: "Mamed Khalidov", isCorrect: false },
      { text: "Jan Błachowicz", isCorrect: true },
      { text: "Borys Mańkowski", isCorrect: false },
    ],
  },
];

export default QUESTIONS;
