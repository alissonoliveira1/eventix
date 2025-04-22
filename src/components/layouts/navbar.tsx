import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Button } from '../ui/Button';
import { Input } from '../ui/input';
import { StateNavbar } from '../modal/localStateNavbar';
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  backdrop-blur p-4 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <div className=" w-[124px] h-[40px] "><LazyLoadImage className="w-[124px] h-[40px] object-cover" src="public/logoEventix.svg"/></div>
        <div>
            <Input className=' w-2xs outline-none  placeholder:text-lg' placeholder='Pesquisar eventos, shows, teatro, cursos'/>
        </div>
        <StateNavbar/>
        <ul className="flex items-center gap-2 justify-between">
          <li><Button className='bg-white text-gray-700 shadow-md'>Sign in</Button></li>
           <li><Button className='bg-indigo-500 text-white shadow-md'>Sign up</Button></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;