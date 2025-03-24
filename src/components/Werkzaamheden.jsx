import draaien from "../assets/draaien.png";
import frezen from "../assets/frezen.png";
import boren from "../assets/boren.png";
import zagen from "../assets/zagen.png";
import brootsen from "../assets/brootsen.png";
import draad from "../assets/draad.png";

const collections = [
  {
    name: "Dankzij onze moderne CNC-draaibank kunnen wij een breed scala aan onderdelen produceren, van enkelstuks tot kleine series, met hoge precisie.",
    description: "Draaien",
    imageSrc: draaien,
    imageAlt: "Draaien",
  },
  {
    name: "Met onze robuuste conventionele freesbank kunnen wij diverse bewerkingen uitvoeren, zoals het frezen van spiebanen en het nauwkeurig boren van gaten op steekmaten.",
    description: "Frezen",
    imageSrc: frezen,
    imageAlt: "Frezen",
  },
  {
    name: "Boren tot Ø40 mm is mogelijk met onze krachtige kolomboormachine. Daarnaast kunnen wij ook nauwkeurig boren met onze CNC-draaibank en freesbank.",
    description: "Boren",
    imageSrc: boren,
    imageAlt: "Boren",
  },
  {
    name: "Met onze lintzaag kunnen wij materialen zagen tot zeer grote afmetingen, met hoge nauwkeurigheid en efficiëntie.",
    description: "Zagen",
    imageSrc: zagen,
    imageAlt: "Zagen",
  },
  {
    name: "Wij brootsen met behulp van een hydraulische en elektrische pers, geschikt voor alle gangbare maten en toepassingen.",
    description: "Brootsen",
    imageSrc: brootsen,
    imageAlt: "Brootsen",
  },
  {
    name: "Draad tappen doen wij met een elektrische taparm tot M24. Daarnaast snijden wij zowel inwendige als uitwendige draad met onze CNC-draaibank.",
    description: "Draad tappen/snijden",
    imageSrc: draad,
    imageAlt: "Draad tappen/snijden",
  },
];

export default function Werkzaamheden() {
  return (
    <section aria-labelledby="werkzaamheden-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2
            id="werkzaamheden-heading"
            className="text-2xl font-bold text-bakublue"
          >
            Onze werkzaamheden
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0 lg:gap-y-12">
            {collections.map((collection) => (
              <div key={collection.name} className="group relative">
                <img
                  alt={collection.imageAlt}
                  src={collection.imageSrc}
                  className="w-full rounded-lg bg-white object-cover max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                />
                <h3 className="text-base font-semibold text-bakublue mt-5">
                  {collection.description}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{collection.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
