'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';

const registerFormSchema = z.object({
  name: z.string().nonempty({ message: 'Informe seu nome!' }),
  email: z.string().email({ message: 'Insira um e-mail válido!' }),
  contactNumber: z
    .string()
    .nonempty({ message: 'Informe seu número para contato!' }),
  age: z
    .string({ invalid_type_error: 'Informe sua idade!' })
    .nonempty({ message: 'Informe sua idade!' }),
  howTimePlaying: z.string().nonempty({ message: 'Informe o tempo de jogo!' }),
  whichPosition: z.string().nonempty({ message: 'Informe sua posição!' }),
  whereDoYouPlay: z.string().nonempty({ message: 'Informe onde você joga!' }),
  objective: z.string().nonempty({ message: 'Informe seu objetivo!' }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const onSubmit = async (data: any) => console.log(data);
  return (
    <div className="flex flex-col md:flex-row w-full justify-around">
      <div>
        <p className="text-lg md:text-2xl md:leading-[3.5rem] w-[40rem] text-icons">
          Preencha os dados para participar do{' '}
          <span className="text-primary">Camp AM Basketball</span>.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="" className="text-icons">
              Nome:
            </label>
            <input
              type="text"
              placeholder="Luka Doncic"
              className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
              {...register('name')}
            />
            {!!errors.name && (
              <span className="text-xs text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-icons">
              E-mail:
            </label>
            <input
              type="email"
              placeholder="lukinha@gmail.com"
              className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
              {...register('email')}
            />
            {!!errors.email && (
              <span className="text-xs text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-row justify-between gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-icons">
                Idade:
              </label>
              <input
                type="number"
                placeholder="24"
                className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
                {...register('age')}
              />
              {!!errors.age && (
                <span className="text-xs text-red-600">
                  {errors.age.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-icons">
                WhatsApp:
              </label>
              <InputMask
                type="text"
                mask="(99) 99999-9999"
                className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
                placeholder="(__) _____-____"
                {...register('contactNumber')}
              />
              {!!errors.contactNumber && (
                <span className="text-xs text-red-600">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="howTimePlaying" className="text-icons">
              Há quanto tempo joga basquete?
            </label>
            <select
              id="howTimePlaying"
              {...register('howTimePlaying')}
              className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
            >
              <option value="">Selecione uma opção</option>
              <option value="lessThan1">Menos de 1 ano</option>
              <option value="between1and2">De 1 a 2 anos</option>
              <option value="moreThan2">Mais de 2 anos</option>
            </select>
            {!!errors.howTimePlaying && (
              <span className="text-xs text-red-600">
                {errors.howTimePlaying.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="whichPosition" className="text-icons">
              Qual posição você joga?
            </label>
            <select
              id="whichPosition"
              {...register('whichPosition')}
              className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
            >
              <option value="">Selecione uma opção</option>
              <option value="pointGuard">Armador</option>
              <option value="shootingGuard">Ala-Armador</option>
              <option value="smallForward">Ala</option>
              <option value="powerForward">Ala-Pivô</option>
              <option value="center">Pivô</option>
            </select>
            {!!errors.whichPosition && (
              <span className="text-xs text-red-600">
                {errors.whichPosition.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-icons">
              Onde você joga? (Clube/Escola/Rachão):
            </label>
            <input
              type="text"
              placeholder="Desportivo Rio Grande"
              className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
              {...register('whereDoYouPlay')}
            />
            {!!errors.whereDoYouPlay && (
              <span className="text-xs text-red-600">
                {errors.whereDoYouPlay.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-icons">
              Seu objetivo após finalizar o camp:
            </label>
            <textarea
              placeholder="Luka Doncic the real mvp. No more comments"
              className="resize-none p-2 rounded-md h-full w-full border-transparent border-[2px] bg-gray-600 text-icons opacity-80 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
              {...register('objective')}
            />
            {!!errors.objective && (
              <span className="text-xs text-red-600">
                {errors.objective.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-[3rem] hover:bg-opacity-90 font-light"
          >
            Enviar formulário
          </button>
        </form>
      </div>
    </div>
  );
}
