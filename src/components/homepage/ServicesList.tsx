import { ServicesItem } from './ServicesItem';

export function ServicesList() {
  return (
    <>
      <ul className="flex gap-8 overflow-y-auto mt-8">
        <ServicesItem label="Todos" />
        <ServicesItem label="Desenvolvimento" />
        <ServicesItem label="Design" />
        <ServicesItem label="Marketing" />
      </ul>
      <div className="mt-8 gap-4 flex flex-col sm:flex-row justify-around items-center ">
        <div className="w-full h-60 bg-icons opacity-70"></div>
        <div className="w-full h-60 bg-icons opacity-70"></div>
        <div className="w-full h-60 bg-icons opacity-70"></div>
      </div>
    </>
  );
}
