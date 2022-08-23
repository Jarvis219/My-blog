import { clsx } from 'clsx';

import { ETheme } from '@/context/ThemeContext';
import { MoonIcon, SunIcon } from '@/svg/Icon';

export default function CustomizedSwitches({
  mode,
  setMode,
}: {
  mode: ETheme;
  setMode: () => void;
}) {
  return (
    <div
      onClick={() => setMode()}
      className={clsx(
        mode === ETheme.dark && 'border-gray-600 text-white',
        'cursor-pointer rounded-md border  p-2 text-lg hover:border-primary-300 hover:text-primary-300 focus:outline-none focus-visible:border-primary-300 focus-visible:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 md:p-2.5 md:text-xl'
      )}
    >
      {mode === ETheme.dark ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}
