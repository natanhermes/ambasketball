import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { FlexRowColStack } from '../FlexRowColStack';

export function ConnectContainer() {
  return (
    <FlexRowColStack>
      <div className="pt-16 pb-10">
        <p className="text-xl md:text-2xl w-80 text-icons">
          <span className="text-primary">Conecte-se</span> ao digital e
          transforme seu futuro.
        </p>

        <div className="mt-2 flex items-center cursor-pointer gap-2 text-icons hover:text-primary">
          <ArrowRightCircleIcon className="h-6" /> <span>Saiba mais sobre</span>
        </div>
      </div>

      <div className="w-full flex md:justify-center">
        <img className="md:max-w-xs" alt="" src="/images/ilstr-homepage.svg" />
      </div>
    </FlexRowColStack>
  );
}
