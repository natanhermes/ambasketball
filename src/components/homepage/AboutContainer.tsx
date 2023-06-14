import Image from 'next/image';
import iamtudao from '../../../public/images/am-team/am-team-8.jpg';

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
            O acampamento é uma experiência única e transformadora para jovens
            jogadores de basquete. Com uma abordagem abrangente e especializada,
            a AM Basketball proporciona um ambiente dinâmico e envolvente, onde
            os participantes têm a oportunidade de aprimorar suas habilidades
            técnicas, aprofundar seu conhecimento tático e desenvolver uma
            mentalidade vencedora.
          </p>

          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            O camp é cuidadosamente planejado e estruturado para fornecer uma
            combinação equilibrada de treinamento intensivo, jogos competitivos
            e atividades educacionais. Os participantes são orientados pelo{' '}
            <a
              href="https://www.instagram.com/iamtudao"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-primary cursor-pointer">
                <b>Arthur de Melo</b>
              </span>
              .
            </a>
          </p>

          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            Durante o acampamento, os jogadores são expostos a uma variedade de
            exercícios e treinamentos que visam aprimorar suas habilidades
            individuais, como dribles, arremessos, passes, defesa e movimentação
            sem a bola. Além disso, são oferecidas sessões de treinamento em
            grupo, onde os participantes aprendem a importância do trabalho em
            equipe, comunicação eficaz e estratégias de jogo.
          </p>

          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            Durante o acampamento, os jogadores são expostos a uma variedade de
            exercícios e treinamentos que visam aprimorar suas habilidades
            individuais, como dribles, arremessos, passes, defesa e movimentação
            sem a bola. Além disso, são oferecidas sessões de treinamento em
            grupo, onde os participantes aprendem a importância do trabalho em
            equipe, comunicação eficaz e estratégias de jogo.
          </p>

          <p className="text-base md:text-sm lg:max-w-[30rem] text-gray-400">
            A AM Basketball também enfatiza o desenvolvimento da mentalidade e
            mentalidade vencedora dos jogadores. São realizadas sessões de
            treinamento mental, palestras inspiradoras e discussões em grupo
            para ajudar os participantes a superar desafios, desenvolver
            resiliência e construir confiança em si mesmos.
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
