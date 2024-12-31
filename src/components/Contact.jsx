export default function Contact() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Altijd binnen handbereik
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          We staan klaar om uw vragen, ideeën of verzoeken te beantwoorden. Laat
          van u horen!
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-bakublue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-6 text-white"
              viewBox="0 0 256 256"
            >
              <path d="M144.27,45.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,208,112a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,144.27,45.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,176,120a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,168,232C88.6,232,24,167.4,24,88A56.26,56.26,0,0,1,72.92,32.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,109.39,104c-.18.27-.37.52-.57.77L88,129.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,223.88,183.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L96,95.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,40,88,128.14,128.14,0,0,0,168,216,40.21,40.21,0,0,0,208,181.07Z"></path>
            </svg>
          </div>

          <div>
            <h3 className="text-base/7 font-semibold text-gray-900">
              Telefoon
            </h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Bel ons gerust voor een direct antwoord op je vragen. We luisteren
              graag en helpen je verder!
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="tel:+31629425926" className="text-bakublue">
                Bel ons <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-bakublue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-6 text-white"
              viewBox="0 0 256 256"
            >
              <path d="M120,128a32,32,0,1,0-32,32A32,32,0,0,0,120,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm152-24H208V40a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V112A8,8,0,0,0,224,104Zm-58.34,60L216,127.65v72.7ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,80h96v77.9c0,.12,0,.24,0,.36V176H40ZM88,192h48a16,16,0,0,0,16-16v-2.13L199.26,208H88Z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Stuur ons een mailtje en we nemen zo snel mogelijk contact met je
              op.
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a href="mailto:info@bakumetaal.nl" className="text-bakublue">
                Stuur een mail <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-bakublue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-6 text-white"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900">
              Facebook
            </h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Stuur ons een berichtje op Facebook. We staan klaar om je te
              helpen en reageren snel!
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a
                href="https://www.facebook.com/bakumetaalbewerking/"
                className="text-bakublue"
              >
                Stuur een bericht <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-x-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-bakublue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-6 text-white"
              viewBox="0 0 256 256"
            >
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-base/7 font-semibold text-gray-900">
              Instagram
            </h3>
            <p className="mt-2 text-base/7 text-gray-600">
              Volg ons op Instagram en stuur een DM. We horen graag van je!
            </p>
            <p className="mt-4 text-sm/6 font-semibold">
              <a
                href="https://www.instagram.com/bakumetaalbewerking/"
                className="text-bakublue"
              >
                Stuur een DM <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
