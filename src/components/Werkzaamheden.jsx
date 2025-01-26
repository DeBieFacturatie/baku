import { CheckIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Draaien",
    description:
      "Draaien is een verspaningstechniek waarbij metaal op een conventionele draaibank wordt bewerkt tot ronde vormen, zoals cilindrische en conische assen. Wij werken met staal, RVS, aluminium, messing, koper en kunststof.",
    icon: CheckIcon,
  },
  {
    name: "Frezen",
    description:
      "Frezen is een techniek waarbij materiaal wordt verwijderd met een roterende frees. Onze conventionele Tos FGS 40t Plus is geschikt voor diverse uitvoeringen, zoals ruwfrezen en spiebaanfrezen. Metaal wordt gekoeld met vloeistof, kunststof vaak met perslucht.",
    icon: CheckIcon,
  },
  {
    name: "Boren",
    description:
      "Met onze WMW kolomboormachine kunnen we gaten boren tot 40 mm dik in RVS, ijzer, aluminium, messing, koper en brons. Instelbaar toerental en smering garanderen betrouwbaarheid.",
    icon: CheckIcon,
  },
  {
    name: "Zagen",
    description:
      "Metaal zagen is een techniek waarbij met een lintzaag precieze snedes worden gemaakt. We zagen diverse metalen in buizen, kokers, profielen en platen, inclusief verstekzagen.",
    icon: CheckIcon,
  },
  {
    name: "Brootsen",
    description:
      "Wij bieden brootsen en spiebanen aan met afmetingen van 2 mm tot 14 mm. Deze bewerking maakt het mogelijk om nauwkeurige spiebaanafmetingen te produceren.",
    icon: CheckIcon,
  },
  {
    name: "Draad tappen/snijden",
    description:
      "Draad tappen creëert inwendig schroefdraad in metaal, bijvoorbeeld om schroeven of bouten te plaatsen.",
    icon: CheckIcon,
  },
];

export default function Werkzaamheden() {
  return (
    <div className="bg-white py-0 pb-16 sm:py-32" id="werkzaamheden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-bakublue">
            Van alle markten thuis
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Meester in metaalbewerking.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Van draaien en frezen tot boren, zagen, brootsen en draad tappen –
            bij ons krijgt u vakkundige en veelzijdige metaalbewerking voor elk
            project.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-bakublue">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
