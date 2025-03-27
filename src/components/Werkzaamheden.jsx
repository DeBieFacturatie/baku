import draaien from "../assets/draaien.png";
import frezen from "../assets/frezen.png";
import boren from "../assets/boren.png";
import zagen from "../assets/zagen.png";
import brootsen from "../assets/brootsen.png";
import draad from "../assets/draad.png";

const werkzaamheden = [
  {
    naam: "Draaien",
    beschrijving:
      "Dankzij onze moderne CNC-draaibank kunnen wij een breed scala aan onderdelen produceren, van enkelstuks tot kleine series, met hoge precisie.",
  },
  {
    naam: "Frezen",
    beschrijving:
      "Met onze robuuste conventionele freesbank kunnen wij diverse bewerkingen uitvoeren, zoals het frezen van spiebanen en het nauwkeurig boren van gaten op steekmaten.",
  },
  {
    naam: "Boren",
    beschrijving:
      "Boren tot Ø40 mm is mogelijk met onze krachtige kolomboormachine. Daarnaast kunnen wij ook nauwkeurig boren met onze CNC-draaibank en freesbank.",
  },
  {
    naam: "Zagen",
    beschrijving:
      "Met onze lintzaag kunnen wij materialen zagen tot zeer grote afmetingen, met hoge nauwkeurigheid en efficiëntie.",
  },
  {
    naam: "Brootsen",
    beschrijving:
      "Wij brootsen met behulp van een hydraulische en elektrische pers, geschikt voor alle gangbare maten en toepassingen.",
  },
  {
    naam: "Draad tappen/snijden",
    beschrijving:
      "Draad tappen doen wij met een elektrische taparm tot M24. Daarnaast snijden wij zowel inwendige als uitwendige draad met onze CNC-draaibank.",
  },
];

export default function Werkzaamheden() {
  return (
    <section aria-labelledby="werkzaamheden-heading" id="werkzaamheden">
      <div className="relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 px-4 py-10 lg:py-28 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl text-left mb-8">
              <span className="relative whitespace-nowrap text-bakublue">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-400/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Onze werkzaamheden</span>
              </span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Wij zijn gespecialiseerd in het draaien en frezen van diverse
              materialen, zowel op conventionele machines als met onze moderne
              CNC-draaibank. Daarnaast voeren we ook zaag-, boor-, broots- en
              perswerk uit. Dankzij deze mix van technieken kunnen we flexibel
              en nauwkeurig inspelen op uiteenlopende opdrachten.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {werkzaamheden.map((werk) => (
                <div key={werk.naam} className="border-t border-gray-200 pt-4">
                  <dt className="font-semibold text-bakublue text-base">
                    {werk.naam}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">
                    {werk.beschrijving}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt="Draaien"
              src={draaien}
              className="rounded-lg bg-gray-100 opacity-90 shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Frezen"
              src={frezen}
              className="rounded-lg bg-gray-100 opacity-90 shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Boren"
              src={boren}
              className="rounded-lg bg-gray-100 opacity-90 shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Zagen"
              src={zagen}
              className="rounded-lg bg-gray-100 opacity-90 shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Brootsen"
              src={brootsen}
              className="rounded-lg bg-gray-100 opacity-90 shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Draad tappen/snijden"
              src={draad}
              className="rounded-lg bg-gray-100 opacity-90 shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
