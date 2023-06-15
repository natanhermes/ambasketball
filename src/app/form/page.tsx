'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';
import { api } from '@/services/api';
import { useState } from 'react';

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
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    const res = await api.post('/mail', {
      to: 'arthur@ambasketball.com.br',
      subject: 'Inscrição - AM Basketball',
      text: `
      <p>Nome: ${data.name}</p>
      <p>E-mail: ${data.email}</p>
      <p>Contato: ${data.contactNumber}</p>
      <p>Idade: ${data.age}</p>
      <p>Há quanto tempo joga: ${data.howTimePlaying}</p>
      <p>Posição: ${data.whichPosition}</p>
      <p>Onde joga: ${data.whereDoYouPlay}</p>
      <p>Objetivo: ${data.objective}</p>
      `,
    });
    setLoading(false);
  };
  return (
    <div className="flex flex-col md:flex-row w-full justify-around">
      {loading ? (
        <div className="h-[100vh] w-full flex items-center justify-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xl md:text-2xl md:w-[40rem] text-icons md:flex flex-col">
            Preencha os dados para participar do camp{' '}
            <span>
              <span className="text-primary">
                <b>AM Basketball</b>
              </span>
              .
            </span>
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4 pt-4"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-icons text-sm">
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
              <label htmlFor="" className="text-icons text-sm">
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
                <label htmlFor="" className="text-icons text-sm">
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
                <label htmlFor="" className="text-icons text-sm">
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
              <label htmlFor="howTimePlaying" className="text-icons text-sm">
                Há quanto tempo joga basquete?
              </label>
              <select
                id="howTimePlaying"
                {...register('howTimePlaying')}
                className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
              >
                <option value="">Selecione uma opção</option>
                <option value="Menos de 1 ano">Menos de 1 ano</option>
                <option value="De 1 a 2 anos">De 1 a 2 anos</option>
                <option value="Mais de 2 anos">Mais de 2 anos</option>
              </select>
              {!!errors.howTimePlaying && (
                <span className="text-xs text-red-600">
                  {errors.howTimePlaying.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="whichPosition" className="text-icons text-sm">
                Qual posição você joga?
              </label>
              <select
                id="whichPosition"
                {...register('whichPosition')}
                className="h-full w-full rounded-[3rem] border-transparent border-[2px] bg-gray-600 text-icons opacity-80 p-2 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
              >
                <option value="">Selecione uma opção</option>
                <option value="Armador">Armador</option>
                <option value="Ala-Armador">Ala-Armador</option>
                <option value="Ala">Ala</option>
                <option value="Ala-Pivô">Ala-Pivô</option>
                <option value="Pivô">Pivô</option>
              </select>
              {!!errors.whichPosition && (
                <span className="text-xs text-red-600">
                  {errors.whichPosition.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-icons text-sm">
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
              <label htmlFor="" className="text-icons text-sm">
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
      )}
    </div>
  );
}
