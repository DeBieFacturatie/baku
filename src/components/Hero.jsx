import { useState } from "react";
import frezen from "../assets/frezen.png";
import mainachtergrond from "../assets/main-achtergrond.png";
import headerimage from "../assets/header-image.png";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = {
  pages: [
    { naam: "Werkzaamheden", href: "#werkzaamheden" },
    { naam: "Het bedrijf", href: "#hetbedrijf" },
    { naam: "Contact", href: "#contact" },
  ],
};

const usps = [
  {
    naam: "Korte lijntjes",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-shipping-simple.svg",
    beschrijving:
      "We zijn een klein bedrijf, dus je hebt altijd direct contact met de mensen die aan jouw opdracht werken.",
  },
  {
    naam: "Kwaliteit",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-warranty-simple.svg",
    beschrijving:
      "We werken met de grootste zorg aan jouw opdracht, zodat je altijd verzekerd bent van topkwaliteit.",
  },
  {
    naam: "Flexibiliteit",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-exchange-simple.svg",
    beschrijving:
      "We denken graag met je mee en passen ons aanbod aan op jouw wensen en behoeften.",
  },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.naam} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.naam}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative z-10">
        <nav aria-label="Top">
          <div className="bg-bakublue">
            <div className="mx-auto flex py-2 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Nieuw: CNC Draaibank Style 510! Meer precisie, meer capaciteit –
                we kunnen nu nog meer werk aan.
              </p>
            </div>
          </div>

          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">BaKu metaalbewerking</span>
                      <img alt="" src={headerimage} className="h-8 w-auto" />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    <PopoverGroup className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.pages.map((page) => (
                          <a
                            key={page.naam}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.naam}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                  </div>

                  <a href="#" className="lg:hidden">
                    <span className="sr-only">BaKu metaalbewerking</span>
                    <img alt="" src={headerimage} className="h-8 w-auto" />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-2 lg:space-x-4">
                        <div className="flex">
                          <a
                            href="https://www.facebook.com/bakumetaalbewerking/"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Facebook</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              fill="currentColor"
                              className="inline-block size-6"
                              aria-hidden="true"
                            >
                              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                            </svg>
                          </a>
                        </div>

                        <span
                          aria-hidden="true"
                          className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                        />

                        <div className="flex">
                          <a
                            href="https://www.instagram.com/bakumetaalbewerking/"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Instagram</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              fill="currentColor"
                              className="inline-block size-6"
                              aria-hidden="true"
                            >
                              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div
          aria-hidden="true"
          className="absolute h-[90%] w-full"
          style={{
            backgroundImage: `linear-gradient(to bottom, 
                rgba(255,255,255,0) 50%, 
                rgba(255,255,255,1) 100%), 
                  url(${mainachtergrond})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="relative">
          <div className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                <div>
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl text-left">
                    <span className="relative whitespace-nowrap text-bakublue">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 418 42"
                        className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-400/70"
                        preserveAspectRatio="none"
                      >
                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                      </svg>
                      <span className="relative">Maatwerk</span>
                    </span>{" "}
                    in draaien en frezen van metaal.
                  </h1>
                  <p className="mt-4 text-base text-gray-600">
                    Met onze Style 510 CNC-draaibank leveren we precisiewerk van
                    hoog niveau. Daarnaast zijn we gespecialiseerd in
                    conventioneel draaien, frezen, zagen, boren, brootsen en
                    persen van diverse materialen. Geen uitdaging is ons te
                    groot.
                  </p>
                </div>
                <img
                  alt=""
                  src={frezen}
                  className="aspect-[3/2] w-full rounded-lg bg-gray-100 object-cover shadow-sm opacity-90"
                  style={{
                    filter: "brightness(0.95) contrast(0.95)",
                    maxHeight: "400px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
              <div className="mt-32 grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-3">
                {usps.map((usp) => (
                  <div key={usp.naam} className="sm:flex lg:block">
                    <div className="sm:shrink-0">
                      <img alt="" src={usp.imageSrc} className="size-16" />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-900">
                        {usp.naam}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {usp.beschrijving}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
