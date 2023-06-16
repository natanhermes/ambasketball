export function Toast() {
  return (
    <div className="h-[calc(100vh-30rem)] w-full flex items-center justify-center">
      <div
        id="toast-success"
        className="flex items-center w-full max-w-xs p-4 mb-4 text-white bg-gray-800 rounded-lg shadow dark:text-white dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-primary rounded-lg dark:bg-primary dark:text-green-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          Formulário enviado com sucesso! Você será redirecionado para a próxima
          etapa.
        </div>
      </div>
    </div>
  );
}
