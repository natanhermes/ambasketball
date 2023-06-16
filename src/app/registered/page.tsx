'use client';

import { useStudent } from '@/contexts/StudentContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const paymentFormSchema = z.object({
  payment: z.string().nonempty({ message: 'Selecione a opção de pagamento!' }),
});

type PaymentFormData = z.infer<typeof paymentFormSchema>;

const phoneNumber = '558491633003';

export default function Registered() {
  const { student } = useStudent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = (data: PaymentFormData) => {
    console.log(data);
    const message = `Olá, Arthur! Sou o ${student.name}\nEstou entrando em contato para confirmar a opção de pagamento do camp *AM Basketball*!\n*Forma de pagamento:* ${data.payment}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.location.href = whatsappLink;
  };

  return (
    <div className="h-full w-full flex flex-col items-center pt-8">
      <p className="text-3xl text-white">
        Olá, <span className="text-primary">Natã Hermes</span>.
      </p>

      <p className="text-2xl text-white text-center py-8">
        O valor da inscrição para o camp{' '}
        <span className="text-primary">AM Basketball</span> será de R$ 80,00.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="py-8">
          <label htmlFor="payment" className="text-icons text-sm">
            Forma de pagamento:
          </label>
          <select
            id="payment"
            {...register('payment')}
            className="w-full overflow-auto rounded-[3rem] p-2 border-transparent border-[2px] bg-gray-600 text-icons opacity-80 hover:outline-none hover:border-primary focus:outline-none focus:border-primary"
          >
            <option value="">Selecione uma opção</option>
            <option value="PIX">PIX</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Boleto">Boleto</option>
          </select>
          {!!errors.payment && (
            <span className="text-xs text-red-600">
              {errors.payment.message}
            </span>
          )}
        </div>
        <p className="w-full p-8 text-base lg:text-2xl text-white text-center">
          Por favor, me envie uma mensagem no whatsapp com a confirmação do
          método de pagamento. Basta clicar no botão e confirmar o envio da
          mensagem.
        </p>

        <button
          type="submit"
          className={
            'mt-8 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90 font-light'
          }
        >
          Confirmar
        </button>
      </form>
    </div>
  );
}
