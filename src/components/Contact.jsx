import DiagonalButton from "./ui/DiagonalButton";
import { Envelope, Phone } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <div className="relative bg-white max-w-7xl mx-auto" id="contact">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="py-16 lg:col-span-2 lg:py-24 xl:pr-12 px-6 sm:px-0">
          <div className="mx-auto max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Neem contact met ons op
            </h2>
            <p className="mt-3 text-base text-gray-900 font-light">
              Neem gerust contact met ons op via telefoon of e-mail. We staan
              klaar om al uw vragen te beantwoorden en u verder te helpen met uw
              project.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Adres</dt>
                <dd>
                  <p>Cromvoirtseweg 3</p>
                  <p>5268 LJ Helvoirt</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Telefoonnummer</dt>
                <dd className="flex">
                  <Phone size={24} className="shrink-0 text-gray-400" />
                  <span className="ml-3">+31 (0)6 29 42 59 26</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <Envelope size={24} className="shrink-0 text-gray-400" />
                  <span className="ml-3">info@bakumetaal.nl</span>
                </dd>
              </div>
            </dl>
            {/* <p className="mt-6 text-base text-gray-500">
                Looking for careers?{" "}
                <a href="#" className="font-medium text-gray-700 underline">
                  View all job openings
                </a>
                .
              </p> */}
          </div>
        </div>
        <div className="bg-white py-16 lg:col-span-3 lg:py-24 xl:pl-12 px-6 sm:px-0">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="naam" className="sr-only">
                  Naam
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  placeholder="Naam"
                  autoComplete="name"
                  className="block w-full border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="block w-full border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                />
              </div>
              <div>
                <label htmlFor="telefoon" className="sr-only">
                  Telefoonnummer
                </label>
                <input
                  id="telefoon"
                  name="telefoon"
                  type="text"
                  placeholder="Telefoonnummer"
                  autoComplete="tel"
                  className="block w-full border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                />
              </div>
              <div>
                <label htmlFor="bericht" className="sr-only">
                  Bericht
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  rows={4}
                  placeholder="Bericht"
                  className="block w-full border border-gray-300 px-4 py-3 placeholder-gray-900 shadow-sm focus:border-bakublue focus:ring-bakublue font-light"
                  defaultValue={""}
                />
              </div>
              <div>
                <DiagonalButton as="button" type="submit">
                  Verstuur
                </DiagonalButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
