import frezen from "../assets/frezen.png";
import bart from "../assets/bart.png";
import werkplaats from "../assets/werkplaats.png";
import draaien from "../assets/draaien.png";
import draad from "../assets/draad.png";
import mainAchtergrond from "../assets/main-achtergrond.png";

export default function Hetbedrijf() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
            <img
              alt=""
              src={werkplaats}
              className="size-full object-cover xl:rounded-lg bg-gray-100 shadow-sm"
            />
          </div>
          <div className="absolute inset-0 bg-white/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25" />
        </div>

        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="sale-heading"
              className="text-4xl font-bold tracking-tight text-bakublue sm:text-5xl lg:text-6xl"
            >
              Wat kunnen wij voor u betekenen?
            </h2>
            <p className="mx-auto mt-4 text-base text-gray-600">
              Neem contact op via +31629425926 of info@bakumetaal.nl – we helpen
              u graag snel verder.
            </p>
            <a
              href="#"
              className="mt-6 inline-block w-full rounded-md border border-transparent bg-bakublue px-8 py-3 font-medium text-white hover:bg-bakubluehover sm:w-auto"
            >
              Bel nu
            </a>
          </div>
        </section>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-bakublue sm:text-4xl">
              Het bedrijf
            </h2>
            {/* <p className="mt-4 text-gray-500">
              Wij zijn gespecialiseerd in het draaien en frezen van diverse
              materialen, zowel op conventionele machines als met onze moderne
              CNC-draaibank. Daarnaast voeren we ook zaag-, boor-, broots- en
              perswerk uit. Dankzij deze mix van technieken kunnen we flexibel
              en nauwkeurig inspelen op uiteenlopende opdrachten.
            </p> */}
          </div>
          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            <div className="lg:pr-8">
              <h2 className="text-2xl font-semibold text-bakublue my-3">
                Wie of wat is BaKu metaalbewerking?
              </h2>
              <p className="text-gray-500 my-3">
                BaKu Metaalbewerking, opgericht op 1 januari 2022, combineert
                een levenslange passie voor metaalbewerking met vakmanschap en
                ervaring. We bewerken materialen zoals staal, rvs, aluminium,
                brons en diverse kunststoffen met behulp van frees- en
                draaibanken en hebben inmiddels honderden producten op maat
                geleverd. Klantgerichtheid en snelle levering staan centraal in
                ons werk.
              </p>
              <h2 className="text-2xl font-semibold text-bakublue my-3">
                Even voorstellen, Bart van Kuijk, eigenaar van BaKu
                metaalbewerking
              </h2>
              <p className="my-3 text-gray-500">
                Sinds mijn jeugd heb ik een passie voor techniek. Na de
                middelbare school rondde ik in 2014 de opleidingen Verspaner en
                Constructiewerker aan het Koning Willem I College in twee jaar
                af. Daarna behaalde ik bij het SOMA College de diploma’s
                Allround Monteur en Technicus Mobiele Werktuigen. Met deze
                kennis startte ik mijn eigen onderneming, BaKu Metaalbewerking,
                en maakte ik van mijn passie mijn beroep.
              </p>
            </div>
            <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src={draaien}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src={bart}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src={werkplaats}
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                  <img
                    alt=""
                    src={draad}
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
