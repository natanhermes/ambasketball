import Image from 'next/image';
import iamtudao from '../../../public/images/am-team/am-team-8.jpg';

export function AboutContainer() {
  return (
    <>
      <div
        className="flex flex-col md:flex-row w-full py-4 items-center justify-around"
        id="aboutSection"
      >
        <div>
          <p className="text-lg md:text-2xl md:leading-[3.5rem] w-[40rem] text-icons">
            Mais inforamções sobre o camp{' '}
            <span className="text-primary">AM Basketball</span>.
          </p>

          <p className="text-lg md:text-sm w-[40rem] text-gray-400">
            O acampamento é uma experiência única e transformadora para jovens
            jogadores de basquete. Com uma abordagem abrangente e especializada,
            a AM Basketball proporciona um ambiente dinâmico e envolvente, onde
            os participantes têm a oportunidade de aprimorar suas habilidades
            técnicas, aprofundar seu conhecimento tático e desenvolver uma
            mentalidade vencedora.
          </p>

          <p className="text-lg md:text-sm w-[40rem] mt-4 text-gray-400">
            O camp é cuidadosamente planejado e estruturado para fornecer uma
            combinação equilibrada de treinamento intensivo, jogos competitivos
            e atividades educacionais. Os participantes são orientados pelo{' '}
            <a
              href="https://www.instagram.com/iamtudao"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-primary cursor-pointer">
                Arthur de Melo
              </span>
            </a>
            , técnico de basquete e especilista em Treinameto Desportivo.
          </p>

          <p className="text-lg md:text-sm w-[40rem] mt-4 text-gray-400">
            Durante o acampamento, os jogadores são expostos a uma variedade de
            exercícios e treinamentos que visam aprimorar suas habilidades
            individuais, como dribles, arremessos, passes, defesa e movimentação
            sem a bola. Além disso, são oferecidas sessões de treinamento em
            grupo, onde os participantes aprendem a importância do trabalho em
            equipe, comunicação eficaz e estratégias de jogo.
          </p>

          <p className="text-lg md:text-sm w-[40rem] mt-4 text-gray-400">
            Durante o acampamento, os jogadores são expostos a uma variedade de
            exercícios e treinamentos que visam aprimorar suas habilidades
            individuais, como dribles, arremessos, passes, defesa e movimentação
            sem a bola. Além disso, são oferecidas sessões de treinamento em
            grupo, onde os participantes aprendem a importância do trabalho em
            equipe, comunicação eficaz e estratégias de jogo.
          </p>

          <p className="text-lg md:text-sm w-[40rem] mt-4 text-gray-400">
            A AM Basketball também enfatiza o desenvolvimento da mentalidade e
            mentalidade vencedora dos jogadores. São realizadas sessões de
            treinamento mental, palestras inspiradoras e discussões em grupo
            para ajudar os participantes a superar desafios, desenvolver
            resiliência e construir confiança em si mesmos.
          </p>
        </div>

        <div className="w-2/4 px-4">
          <div className="aspect-w-4 aspect-h-4">
            <Image
              src={iamtudao}
              priority
              width={500}
              height={500}
              alt="AM Team"
            />
          </div>
        </div>
      </div>
    </>
  );
}
