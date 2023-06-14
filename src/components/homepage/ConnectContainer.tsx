'use client';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import amTeam1 from '../../../public/images/am-team/am-team-1.jpg';
import amTeam2 from '../../../public/images/am-team/am-team-2.jpg';
import amTeam3 from '../../../public/images/am-team/am-team-3.jpg';
import amTeam4 from '../../../public/images/am-team/am-team-4.jpg';
import amTeam5 from '../../../public/images/am-team/am-team-5.jpg';
import amTeam6 from '../../../public/images/am-team/am-team-6.jpg';
import amTeam7 from '../../../public/images/am-team/am-team-7.jpg';
import amTeam11 from '../../../public/images/am-team/am-team-11.jpg';
import amTeam12 from '../../../public/images/am-team/am-team-12.jpg';
import amTeam13 from '../../../public/images/am-team/am-team-13.jpg';
import amTeam14 from '../../../public/images/am-team/am-team-14.jpg';
import amTeam15 from '../../../public/images/am-team/am-team-15.jpg';
import amTeam16 from '../../../public/images/am-team/am-team-16.jpg';
import amTeam17 from '../../../public/images/am-team/am-team-17.jpg';
import amTeam18 from '../../../public/images/am-team/am-team-18.jpg';
import amTeam19 from '../../../public/images/am-team/am-team-19.jpg';
import amTeam20 from '../../../public/images/am-team/am-team-20.jpg';
import Slider from '../Slider';

const amTeamImages = [
  amTeam1,
  amTeam2,
  amTeam3,
  amTeam4,
  amTeam5,
  amTeam6,
  amTeam7,
  amTeam11,
  amTeam12,
  amTeam13,
  amTeam14,
  amTeam15,
  amTeam16,
  amTeam17,
  amTeam18,
  amTeam19,
  amTeam20,
];

export function ConnectContainer() {
  return (
    <div
      id="connectSection"
      className="flex flex-col md:flex-row w-full py-20 justify-around"
    >
      <div className="w-2/4 px-4">
        <Slider items={amTeamImages} />
      </div>
      <div>
        <p className="text-lg md:text-5xl w-[40rem] text-icons">
          Venha viver uma experiência inesquecível com o camp da{' '}
          <span className="text-primary">AM Basketball</span>.
        </p>

        <p className="text-lg w-[40rem] mt-4 text-gray-400">
          O acampamento mediado pela AM Basketball é uma experiência única e
          transformadora para jovens jogadores de basquete. Com uma abordagem
          abrangente e especializada, a AM Basketball proporciona um ambiente
          dinâmico e envolvente, onde os participantes têm a oportunidade de
          aprimorar suas habilidades técnicas, aprofundar seu conhecimento
          tático e desenvolver uma mentalidade vencedora.
        </p>

        <div className="mt-4 flex items-center cursor-pointer gap-2 text-icons hover:text-primary">
          <a href="/about" className="flex flex-row gap-2">
            <ArrowRightCircleIcon className="h-6" />{' '}
            <span>Saiba mais sobre</span>
          </a>
        </div>
      </div>
    </div>
  );
}
