'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import InputMask from 'react-input-mask';
import { api } from '@/services/api';
import { useState } from 'react';
import { Spinner } from '@/components/Spinner';
import { useRouter } from 'next/navigation';
import { Toast } from '@/components/Toast';
import { useStudent } from '@/contexts/StudentContext';

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
  const [registered, setRegistered] = useState(false);
  const router = useRouter();
  const { saveStudentName } = useStudent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const onSubmit = async (data: RegisterFormData) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

    if (res.data === 'OK') {
      saveStudentName(data.name);
      setRegistered(true);
      setLoading(false);

      setTimeout(() => {
        router.push('/registered');
        setRegistered(false);
      }, 2000);
    }
  };
  return (
    <div className="flex flex-col md:flex-row w-full justify-around">
      {loading ? (
        <Spinner />
      ) : true ? (
        <Toast />
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
