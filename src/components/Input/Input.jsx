export default function Input(props) {

  return (
    <input {...props} className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 dark:text-gray-200 rounded-full outline-none placeholder:text-gray-400 placeholder:text-sx placeholder:uppercase placeholder:font-bold focus:border-2 focus:border-alura-200 focus:dark:border-alura-100 invalid:focus:border-2 invalid:focus:dark:border-2 invalid:focus:border-red-500 invalid:focus:dark:border-red-500 caret-alura-200 dark:caret-alura-100"></input>
  );
}
