import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { FlexRowColStack } from '../FlexRowColStack';
import { Paragraph } from '../Paragraph';

export function DescriptionContainer() {
  return (
    <FlexRowColStack>
      <div className="flex flex-col md:flex-row">
        <div className="w-4/4 md:w-2/4 py-12">
          <p className="text-xl md:text-2xl w-80 text-icons">
            <span className="text-primary">Sobre</span> nossa empresa
          </p>

          <div className="w-full flex flex-col gap-4 mt-8">
            <Paragraph>
              <span className="text-primary">
                Bem-vindo(a) à Metha Digital,
              </span>{' '}
              a agência que transforma a sua presença online. Oferecemos
              soluções inovadoras e eficazes em desenvolvimento de software e
              design gráfico para manter nossos clientes à frente no mundo
              digital.
            </Paragraph>
            <Paragraph>
              Nossa equipe de especialistas está pronta para ajudá-lo(a) a
              alcançar seus objetivos, com um novo site, aplicativo móvel ou
              campanha de marketing digital que impressione seus clientes e
              aumente suas vendas.
            </Paragraph>
            <Paragraph>
              Conte com a agilidade e inovação em desenvolvimento de software e
              design gráfico.
            </Paragraph>
          </div>
          <div className="mt-2 flex items-center cursor-pointer gap-2 text-icons hover:text-primary">
            <ArrowRightCircleIcon className="h-6" />{' '}
            <span className="text-sm">Entre em contato</span>
          </div>
        </div>
        <div className="w-4/4 md:w-2/4 flex justify-center">
          <img
            src="/images/ilstr-about.svg"
            className="w-3/4"
            alt="Imagem contendo 4 pessoas e seus notebooks, reunidas numa mesa redonda com um quadro atrás contendo informações."
          />
        </div>
      </div>
    </FlexRowColStack>
  );
}
