import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import technischetekening from "../assets/technische-tekening.png";
import DiagonalButton from "./ui/DiagonalButton";

export default function Contact() {
  return (
    <div className="relative isolate bg-white" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `linear-gradient(to bottom, 
                                rgba(255,255,255,0) 50%, 
                                rgba(255,255,255,1) 100%), 
                                  url(${technischetekening})`,
                }}
              />
            </div>
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Altijd binnen handbereik
            </h2>
            <p className="mt-6 text-base text-gray-600">
              We staan klaar om uw vragen, ideeën of verzoeken te beantwoorden.
              Laat van u horen!
            </p>
            <dl className="mt-10 space-y-4 text-base text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  Cromvoirtseweg 3
                  <br />
                  5268 LJ Helvoirt
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a href="tel:+31629425926" className="hover:text-gray-900">
                    +31 (0)6 29 42 59 26
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-gray-400"
                  />
                </dt>
                <dd>
                  <a href="info@bakumetaal.nl" className="hover:text-gray-900">
                    info@bakumetaal.nl
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="naam"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Naam
                </label>
                <div className="mt-2.5">
                  <input
                    id="naam"
                    name="naam"
                    type="text"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bakublue"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bakublue"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="telefoonnummer"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Telefoonnummer
                </label>
                <div className="mt-2.5">
                  <input
                    id="telefoonnummer"
                    name="telefoonnummer"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bakublue"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="bericht"
                  className="block text-sm/6 font-semibold text-gray-900"
                >
                  Bericht
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-bakublue"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <DiagonalButton as="button" type="submit">
                Verstuur
              </DiagonalButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
