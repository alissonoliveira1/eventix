import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Button } from '../ui/Button';
import { Input } from '../ui/input';
import { StateNavbar } from '../modal/localStateNavbar';
import CreateUserModal from '../modal/create-user';
import { Search } from 'lucide-react';
//import LoginUserModal from '../modal/login-user';
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-md   p-4 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <div className=" w-[124px] h-[40px] "><LazyLoadImage className="w-[124px] h-[40px] object-cover" src="public/logoEventix.svg" /></div>
        <div className='flex min-w-2xs bg-white shadow-md border p-0.5 z-11  items-center rounded-2xl'>
          <StateNavbar />
          <div className='border-l-1 border-t-0 border-b-0 border-r-0   flex items-center  '>
            <Search className=' ml-2 text-zinc-500 size-5.5' />
            <Input className=' m-0 p-1.5 border-none w-xs rounded-tl-none rounded-bl-none  shadow-none dark: bg-white outline-none  placeholder:text-base  ' placeholder='Pesquisar eventos, shows, teatro, cursos' />
          </div>
        </div>

        <ul className="flex items-center gap-2 justify-between">

          <li><CreateUserModal /></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;