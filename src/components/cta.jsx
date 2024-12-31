import logo from "../assets/logo-wit.svg";

export default function Cta() {
  return (
    <div className="bg-gray-900 px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <img src={logo} alt="logo" className="mx-auto size-80" />
      </div>
    </div>
  );
}
