import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme() {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark').matches;
  const pagesClasses = document.documentElement.classList;

  useEffect(() => {
    systemPreference && pagesClasses.add('dark');
  })
  const toggle = () => {
    pagesClasses.toggle('dark')
  }
  
  return <div className="hidden sm:block">
    <MoonIcon className="h-8 text-gray-100 cursor-pointer block dark:hidden" onClick={toggle}/>
    <SunIcon className="h-8 text-gray-100 cursor-pointer hidden dark:block" onClick={toggle}/>
  </div>
}
