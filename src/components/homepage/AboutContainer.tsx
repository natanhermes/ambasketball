import Image from 'next/image';
import iamtudao from '../../../public/images/am-team/am-team-8.jpg';
import Link from 'next/link';

export function AboutContainer() {
  return (
    <>
      <div
        id="aboutSection"
        className="flex flex-col lg:flex-row w-full py-4 gap-4 justify-around"
      >
        <div className="flex flex-col gap-4">
          <p className="text-xl md:text-2xl lg:max-w-[30rem] text-icons flex flex-col">
            Mais informações sobre o camp
            <span>
              <span className="text-primary">
                <b>AM Basketball</b>
              </span>
              .
            </span>
          </p>
          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            O Camp AM Basketball é planejado e estruturado para fornecer uma
            combinação equilibrada de treinamento da técnica individual, tomada
            de decisão, conhecimento tático, desenvolvimento da autoconfiança e
            jogos competitivos.
          </p>

          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            Os participantes serão orientados pelo Coach{' '}
            <a
              href="https://www.instagram.com/iamtudao"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-primary cursor-pointer">
                <b>Arthur de Melo</b>
              </span>
            </a>
            , Personal Trainer de Basquete e Técnico do Desportivo Rio Grande.
          </p>

          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            Durante o final de semana, esses serão os conteúdos abordados:
            <br />
            <span className="text-primary">1° dia:</span> Controle de bola,
            finalização e passo zero.
            <br />
            <span className="text-primary">2° dia:</span> Leitura de
            Pick-and-Roll, finalização e passes.
          </p>

          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            Estamos torcendo para ter a sua presença no Camp.
          </p>
          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            <Link href="/form">
              <span className="text-primary">Clique aqui</span>
            </Link>{' '}
            para ir para a aba de inscrição.
          </p>
          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            Nos vemos em breve!
          </p>
        </div>

        <div className="w-4/4 pt-8">
          <div className="aspect-w-4 aspect-h-4">
            <Image
              src={iamtudao}
              priority
              width={500}
              height={500}
              alt="AM Team"
            />
          </div>
          <div className="flex flex-col items-center pt-4">
            <a
              href="https://www.instagram.com/iamtudao"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-primary cursor-pointer">
                <b>Arthur de Melo</b>
              </span>
            </a>
            <span className="text-gray-400 cursor-pointer text-center text-xs">
              Técnico de basquete pelo Desportivo Rio Grande e especilista em
              Treinameto Desportivo.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
