import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { auth } from '@/firebase'

export function LoginButton () {
  const handleSignIn = async (
    provider: GoogleAuthProvider | GithubAuthProvider,
  ) => {
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      toast.error('There has been an error while login. Please try again.')

      console.error(error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Sign In</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Login</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-2'>
          <Button
            onClick={async () => handleSignIn(new GoogleAuthProvider())}
            variant='outline'
          >
            Login with google
          </Button>
          <Button
            onClick={async () => handleSignIn(new GithubAuthProvider())}
            variant='outline'
          >
            Login with github
          </Button>
        </div>
        <DialogFooter className='flex-row justify-end gap-2'>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
