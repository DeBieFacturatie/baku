import werkplaats from "../assets/werkplaats.png";

export default function Cta() {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            src={werkplaats}
            className="size-full object-cover"
            style={{
              filter: "brightness(0.6) contrast(0.95)",
            }}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-bakublue opacity-60"
        />

        <div className="relative mx-auto flex flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl max-w-5xl">
            Wat kunnen wij voor u betekenen?
          </h1>
          <p className="mt-4 text-xl text-white max-w-2xl">
            Neem contact op via <span className="font-bold">+31629425926</span>{" "}
            of <span className="font-bold">info@bakumetaal.nl</span> – we helpen
            u graag snel verder.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-lg border border-transparent bg-white px-8 py-3 text-base font-medium text-bakublue hover:bg-gray-100"
          >
            Shop New Arrivals
          </a>
        </div>
      </div>
    </div>
  );
}
