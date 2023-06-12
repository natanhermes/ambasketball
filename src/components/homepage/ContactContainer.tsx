import { RedirectButton } from '../RedirectButton';

export function ContactContainer() {
  return (
    <div className="mt-16 mb-32 md:my-32 flex flex-col items-center justify-center">
      <img
        src="/images/logotipo.svg"
        className="md:cursor-pointer h-9 mb-16"
        alt="Logotipo que possui uma imagem em forma de M e a palavra metha"
      />

      <p className="text-sm md:text-base w-[18rem] sm:w-[26rem] text-center">
        Venha fazer parte da nossa comunidade de sucesso online e crie uma
        presença digital de destaque.
      </p>

      <div className="mt-16">
        <RedirectButton path="/contact" />
      </div>
    </div>
  );
}
