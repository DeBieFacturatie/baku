import frezen from "../assets/frezen.png";
import bart from "../assets/bart.png";
import werkplaats from "../assets/werkplaats.png";
import draaien from "../assets/draaien.png";
import draad from "../assets/draad.png";

export default function Hetbedrijf() {
  return (
    <>
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden bg-bakublue md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img alt="" src={frezen} className="size-full object-cover" />
          <svg
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#065495" />
                <stop offset={1} stopColor="#48759c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base/7 font-semibold text-bakublue">
              Wij staan voor u klaar
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Wat kunnen wij voor u betekenen?
            </p>
            <p className="mt-6 text-base/7 text-gray-300">
              Bij BaKu Metaalbewerking specialiseren we ons in het draaien en
              frezen van diverse materialen op conventionele machines. Ook
              zagen, boren, en het brootsen of persen van bussen en assen met
              onze hydraulische pers behoren tot de mogelijkheden. Voor meer
              informatie kunt u contact opnemen via{" "}
              <span className="font-semibold">+31629425926</span> of{" "}
              <span className="font-semibold">info@bakumetaal.nl</span> – we
              staan klaar om u snel te helpen.
            </p>
            <div className="mt-8">
              <a
                href="tel:+31629425926"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Bel ons meteen
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-32" id="hetbedrijf">
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
                Van jongs af aan heb ik een passie voor techniek. Na de
                middelbare school volgde ik in 2014 de opleidingen Verspaner en
                Constructiewerker aan het Koning Willem I College in
                &apos;s-Hertogenbosch, die ik binnen twee jaar afrondde.
                Vervolgens voltooide ik bij het SOMA College in Harderwijk de
                opleidingen Allround Monteur Mobiele Werktuigen en Technicus
                Mobiele Werktuigen. Met deze diploma&apos;s op zak richtte ik
                mij volledig op mijn eigen onderneming, BaKu Metaalbewerking,
                waarmee ik van mijn passie mijn werk heb gemaakt.
              </p>
              {/* <div className="mt-10 flex">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Join our team <span aria-hidden="true">&rarr;</span>
                </a>
              </div> */}
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <img
                  alt=""
                  src={draaien}
                  className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover shadow-lg"
                />
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <img
                    alt=""
                    src={bart}
                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover shadow-lg"
                  />
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src={werkplaats}
                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover shadow-lg"
                  />
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <img
                    alt=""
                    src={draad}
                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover shadow-lg"
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
