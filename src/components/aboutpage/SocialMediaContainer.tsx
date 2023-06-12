import { FlexRowColStack } from '../FlexRowColStack';
import { TitleWithSpan } from '../TitleWithSpan';

export function SocialMediaContainer() {
  return (
    <FlexRowColStack>
      <div className="mt-12">
        <div className="w-44">
          <TitleWithSpan spanText="Acompanhe" text="nosso progresso" />
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="flex flex-col gap-4 w-full">
            <div className="text-icons text-xs md:text-lg flex flex-row hover:text-primary">
              <span className="font-bold mr-4 w-16 md:w-24">YouTube</span>
              <span>-</span>
              <span className="ml-4">
                <a
                  href="https://www.youtube.com/@oficialmetha"
                  className="decoration-transparent"
                >
                  https://www.youtube.com/@oficialmetha
                </a>
              </span>
            </div>
            <div className="text-icons text-xs md:text-lg flex flex-row hover:text-primary">
              <span className="font-bold mr-4 w-16 md:w-24">Facebook</span>
              <span>-</span>
              <span className="ml-4">
                <a href="https://www.facebook.com/oficialmetha">
                  https://www.facebook.com/methadigitaloficial
                </a>
              </span>
            </div>
            <div className="text-icons text-xs md:text-lg flex flex-row items-center hover:text-primary">
              <span className="font-bold mr-4 w-16 md:w-24">Instagram</span>
              <span>-</span>
              <span className="ml-4">
                <a href="https://www.instagram.com/oficialmetha">
                  https://www.instagram.com/oficialmetha
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </FlexRowColStack>
  );
}
