import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx';
import { useContext } from 'react';

import ButtonBase from '@/components/buttons/Button';

import { ThemeContext } from '@/context/ThemeContext';

const Search = () => {
  const { mode } = useContext(ThemeContext);
  return (
    <ButtonBase
      variant='outline'
      className={clsx(
        mode === 'dark' ? 'text-white' : 'text-black',
        'shadow-none hover:bg-transparent focus:bg-transparent focus:shadow-none'
      )}
    >
      <SearchIcon fontSize='large' className='cursor-pointer' />
    </ButtonBase>
  );
};

export default Search;
