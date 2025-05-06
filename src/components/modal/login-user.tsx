/*import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/Button";
import { useAuth } from "@/components/context/useAuth";
import * as Popover from '@radix-ui/react-popover';
import { Avatar } from "radix-ui";
function LoginUserModal() {

  const { login, user, logout } = useAuth()

  const [modal, setModal] = useState(false);
  console.log(user)
  if (!user) {
    return (
      <Dialog open={modal} onOpenChange={setModal}>

        <DialogTrigger asChild>
           <Button className='bg-white text-gray-700 shadow-md'>Sign in</Button>
        
        </DialogTrigger>

        <DialogContent className=" bg-white text-gray-900 border-amber-50 shadow-lg">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-center">Criar Conta</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="password"
                placeholder="Senha"
                className="border border-gray-300 rounded-md p-2"
              />
              <Button type="submit" className='bg-indigo-500 text-white shadow-md'>Criar Conta</Button>


            </form>
            <Button className='bg-indigo-500 text-white shadow-md' onClick={login} >Google</Button>
          </div>
        </DialogContent>
      </Dialog>
    )


  }




  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
          <Avatar.Image
            className="size-full rounded-[inherit] object-cover"
            src={user?.picture}
            alt="Colm Tuite"
          />
          <Avatar.Fallback
            className="leading-1 flex size-full items-center justify-center bg-gray-300 text-[15px] font-medium text-violet11"
            delayMs={600}
          >
            {user?.name?.charAt(0).toUpperCase()}
          </Avatar.Fallback>
        </Avatar.Root>
      </Popover.Trigger>
      <Popover.Portal >
        <Popover.Content sideOffset={5} className="w-[260px] rounded bg-gray-100 p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade z-50">
          <ul>
            <li>oi</li>
            <li>ii</li>
            <li>iiii</li>
            <li onClick={logout}>sair da conta</li>
          </ul>
          <Popover.Close
                    className="absolute right-[5px] top-[5px] inline-flex size-[25px] cursor-default items-center justify-center rounded-full text-violet11 outline-none hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                    aria-label="Close"
                >
            x
          </Popover.Close>
          <Popover.Arrow className="fill-red-700" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
export default LoginUserModal;
*/