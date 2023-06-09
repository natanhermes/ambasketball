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
import Link from 'next/link';

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
      className="flex flex-col xl:flex-row w-full py-4 gap-4 justify-around"
    >
      <div className="w-4/4 xl:w-2/4">
        <Slider items={amTeamImages} />
      </div>
      <div className="pt-8">
        <p className="text-xl md:text-5xl md:w-[40rem] text-icons flex flex-col">
          Venha viver uma experiência inesquecível com o camp da
          <span className="text-primary">AM Basketball.</span>
        </p>

        <p className="text-base md:w-[40rem] mt-4 text-gray-400">
          O Camp é uma experiência única para jovens jogadores de basquete.
          Abordando alguns aspectos do jogo, a AM Basketball proporciona treinos
          dinâmicos, buscando a evolução do basquete de seus participantes.{' '}
        </p>

        <div className="mt-4 flex items-center cursor-pointer gap-2 text-icons hover:text-primary">
          <Link href="/about" className="flex flex-row gap-2">
            <ArrowRightCircleIcon className="h-6" />{' '}
            <span>Saiba mais sobre</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
