import draaien from "../assets/draaien.png";
import frezen from "../assets/frezen.png";
import boren from "../assets/boren.png";
import zagen from "../assets/zagen.png";
import brootsen from "../assets/brootsen.png";
import draad from "../assets/draad.png";
import UnderlinedHeading from "./ui/UnderlinedHeading";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";

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
    <>
      <section aria-labelledby="werkzaamheden-heading" id="werkzaamheden">
        <div className="relative">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 py-10 lg:py-28 lg:max-w-7xl lg:grid-cols-2">
            <div className="px-6 sm:px-0">
              <UnderlinedHeading>Werkzaamheden</UnderlinedHeading>
              <p className="mt-4 text-lg text-gray-900 font-light">
                Wij zijn gespecialiseerd in het draaien en frezen van diverse
                materialen, zowel op conventionele machines als met onze moderne
                CNC-draaibank. Daarnaast voeren we ook zaag-, boor-, broots- en
                perswerk uit. Dankzij deze mix van technieken kunnen we flexibel
                en nauwkeurig inspelen op uiteenlopende opdrachten.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {werkzaamheden.map((werk) => (
                  <div
                    key={werk.naam}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="text-bakublue text-lg font-medium tracking-tight">
                      {werk.naam}
                    </dt>
                    <dd className="mt-2 text-base text-gray-900 font-light">
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
                className="bg-gray-100 opacity-90 shadow-xl"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
              />
              <img
                alt="Frezen"
                src={frezen}
                className="bg-gray-100 opacity-90 shadow-xl"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
              />
              <img
                alt="Boren"
                src={boren}
                className="bg-gray-100 opacity-90 shadow-xl"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
              />
              <img
                alt="Zagen"
                src={zagen}
                className="bg-gray-100 opacity-90 shadow-xl"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
              />
              <img
                alt="Brootsen"
                src={brootsen}
                className="bg-gray-100 opacity-90 shadow-xl"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
              />
              <img
                alt="Draad tappen/snijden"
                src={draad}
                className="bg-gray-100 opacity-90 shadow-xl"
                style={{ filter: "brightness(0.95) contrast(0.95)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 lg:pt-12 lg:pb-28 overflow-hidden">
        <div className="mx-auto">
          <div className="relative w-full overflow-hidden">
            {/* First row that moves from right to left */}
            <div className="flex whitespace-nowrap animate-marquee">
              {[
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
                // Duplicate the same images to ensure a seamless loop
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
                // Duplicate the same images to ensure a seamless loop
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
                // Duplicate the same images to ensure a seamless loop
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
                // Duplicate the same images to ensure a seamless loop
                product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
              ].map((image, index) => (
                <div
                  key={index}
                  className="inline-block h-24 lg:h-48 flex-shrink-0"
                >
                  <img
                    src={image}
                    alt={`Product ${(index % 11) + 1}`}
                    className="h-full w-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
