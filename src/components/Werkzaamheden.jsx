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
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 px-4 py-28 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-bakublue sm:text-4xl">
              Onze werkzaamheden
            </h2>
            <p className="mt-4 text-gray-500">
              Wij zijn gespecialiseerd in het draaien en frezen van diverse
              materialen, zowel op conventionele machines als met onze moderne
              CNC-draaibank. Daarnaast voeren we ook zaag-, boor-, broots- en
              perswerk uit. Dankzij deze mix van technieken kunnen we flexibel
              en nauwkeurig inspelen op uiteenlopende opdrachten.
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {werkzaamheden.map((werk) => (
                <div key={werk.naam} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-bakublue">{werk.naam}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
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
              className="rounded-lg bg-gray-100 shadow-sm opacity-90"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Frezen"
              src={frezen}
              className="rounded-lg bg-gray-100 shadow-sm opacity-90"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Boren"
              src={boren}
              className="rounded-lg bg-gray-100 shadow-sm opacity-90"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Zagen"
              src={zagen}
              className="rounded-lg bg-gray-100 shadow-sm opacity-90"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Brootsen"
              src={brootsen}
              className="rounded-lg bg-gray-100 shadow-sm opacity-90"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
            <img
              alt="Draad tappen/snijden"
              src={draad}
              className="rounded-lg bg-gray-100 shadow-sm opacity-90"
              style={{ filter: "brightness(0.95) contrast(0.95)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
