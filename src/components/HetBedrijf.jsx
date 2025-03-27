import bart from "../assets/bart.png";
import werkplaats from "../assets/werkplaats.png";
import draaien from "../assets/draaien.png";
import draad from "../assets/draad.png";
import frezenzw from "../assets/frezen-zw.png";
import bartzw from "../assets/bart-zw.png";
import werkplaatszw from "../assets/werkplaats-zw.png";

export default function Hetbedrijf() {
  return (
    <>
      <div className="relative overflow-hidden mt-16 lg:mt-8">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
            <img
              alt=""
              src={werkplaats}
              className="size-full object-cover xl:rounded-lg bg-gray-100 rounded-lg opacity-90 shadow-xl outline outline-1 -outline-offset-1 outline-black/10"
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
              className="text-3xl font-bold tracking-tight text-bakublue sm:text-4xl lg:text-5xl"
            >
              Wat kunnen wij voor u betekenen?
            </h2>
            <p className="mx-auto mt-4 text-base text-gray-900">
              Neem contact op via{" "}
              <span className="font-bold">+31629425926</span> of{" "}
              <span className="font-bold">info@bakumetaal.nl</span> – we helpen
              u graag snel verder.
            </p>
            <a
              href="tel:+31629425926"
              className="mt-6 inline-block w-full rounded-lg border border-transparent bg-bakublue px-8 py-3 font-medium text-white hover:bg-bakubluehover sm:w-auto"
            >
              Bel nu
            </a>
          </div>
        </section>
      </div>
      <div
        className="mx-auto max-w-7xl pt-16 pb-24 py-12 lg:py-48"
        id="hetbedrijf"
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
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
                  <span className="relative">Het bedrijf</span>
                </span>
              </h2>
              <h2 className="text-bakublue my-3 text-lg font-medium tracking-tight">
                Wie of wat is BaKu metaalbewerking?
              </h2>
              <p className="my-3 text-base text-gray-900 font-light">
                BaKu Metaalbewerking, opgericht op 1 januari 2022, combineert
                een levenslange passie voor metaalbewerking met vakmanschap en
                ervaring. We bewerken materialen zoals staal, rvs, aluminium,
                brons en diverse kunststoffen met behulp van frees- en
                draaibanken en hebben inmiddels honderden producten op maat
                geleverd. Klantgerichtheid en snelle levering staan centraal in
                ons werk.
              </p>
              <h2 className="text-bakublue my-3 text-lg font-medium tracking-tight">
                Even voorstellen, Bart van Kuijk, eigenaar van BaKu
                metaalbewerking
              </h2>
              <p className="my-3 text-base text-gray-900 font-light">
                Sinds mijn jeugd heb ik een passie voor techniek. Na de
                middelbare school rondde ik in 2014 de opleidingen Verspaner en
                Constructiewerker aan het Koning Willem I College in twee jaar
                af. Daarna behaalde ik bij het SOMA College de diploma’s
                Allround Monteur en Technicus Mobiele Werktuigen. Met deze
                kennis startte ik mijn eigen onderneming, BaKu Metaalbewerking,
                en maakte ik van mijn passie mijn beroep.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <img
                alt=""
                src={bartzw}
                className="aspect-[3/2] w-full object-cover transition-all duration-300 ease-in-out filter grayscale hover:grayscale-0"
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
