import frezen from "../assets/frezen.png";
import bart from "../assets/bart.png";
import werkplaats from "../assets/werkplaats.png";
import draaien from "../assets/draaien.png";
import draad from "../assets/draad.png";
import mainAchtergrond from "../assets/main-achtergrond.png";

export default function Hetbedrijf() {
  return (
    <>
      <div className="relative bg-white py-16">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
        />
        <div className="mx-auto max-w-7xl bg-bakublue lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              />
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                <img
                  alt=""
                  src={frezen}
                  className="relative aspect-[10/6] w-full rounded-3xl object-cover shadow-2xl sm:aspect-[2/1] lg:aspect-square"
                />
              </div>
            </div>

            <div className="relative bg-bakublue lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={mainAchtergrond}
                    alt=""
                    className="h-full w-full object-cover object-center"
                    style={{
                      filter: "brightness(0) invert(1) opacity(0.1)",
                      mixBlendMode: "overlay",
                    }}
                  />
                </div>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <h2
                  id="join-heading"
                  className="text-3xl font-bold tracking-tight text-white"
                >
                  Wat kunnen wij voor u betekenen?
                </h2>
                <p className="text-lg text-white">
                  Neem contact op via{" "}
                  <span className="font-bold">+31629425926</span> of{" "}
                  <span className="font-bold">info@bakumetaal.nl</span> – we
                  helpen u graag snel verder.
                </p>
                <a
                  href="#"
                  className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-bakublue shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                >
                  Bel nu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-16 sm:py-32" id="hetbedrijf">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Het bedrijf.
              </h2>
              {/* <p className="mt-6 text-xl/8 text-gray-600">
                Wie of wat is BaKu metaalbewerking?
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                BaKu Metaalbewerking, opgericht op 1 januari 2022, combineert
                een levenslange passie voor metaalbewerking met vakmanschap en
                ervaring. We bewerken materialen zoals staal, rvs, aluminium,
                brons en diverse kunststoffen met behulp van frees- en
                draaibanken en hebben inmiddels honderden producten op maat
                geleverd. Klantgerichtheid en snelle levering staan centraal in
                ons werk.
              </p> */}
              <p className="mt-6 text-xl/8 text-gray-600">
                Even voorstellen, Bart van Kuijk, eigenaar van BaKu
                metaalbewerking
              </p>
              <p className="mt-6 text-base/7 text-gray-600">
                Sinds mijn jeugd heb ik een passie voor techniek. Na de
                middelbare school rondde ik in 2014 de opleidingen Verspaner en
                Constructiewerker aan het Koning Willem I College in twee jaar
                af. Daarna behaalde ik bij het SOMA College de diploma’s
                Allround Monteur en Technicus Mobiele Werktuigen. Met deze
                kennis startte ik mijn eigen onderneming, BaKu Metaalbewerking,
                en maakte ik van mijn passie mijn beroep.
              </p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  alt=""
                  src={draaien}
                  className="aspect-[7/5] w-[37rem] max-w-none rounded bg-gray-50 object-cover shadow-lg"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    alt=""
                    src={bart}
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded bg-gray-50 object-cover shadow-lg"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src={werkplaats}
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded bg-gray-50 object-cover shadow-lg"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src={draad}
                    className="aspect-[4/3] w-[24rem] max-w-none rounded bg-gray-50 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
