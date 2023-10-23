/* eslint-disable react/prop-types */
import Input from "../Input/Input";

export default function Form({ onSubmit }) {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({name, email});
  };

  return (
    <form onSubmit={safeSubmit} className="flex flex-col gap-10 justify-center items-center h-full -mt-20 mx-5">
      <Input type="text" placeholder="Insira seu nome..." />
      <Input type="email" placeholder="Insira seu email..." />
      <button type="submit" className="w-full max-w-sm bg-alura-100 dark:bg-dark-200 rounded-full text-gray-200 py-1 px-5 uppercase outline-none">Enviar</button>
    </form>
  );
}
