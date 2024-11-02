import { Cone } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Header = () => {
    return (
        <header className="flex px-5 py-5 items-center justify-between">
            <div className='flex gap-2'> <Cone /> Data Analytics Dashboard Example</div>
            <div className='flex gap-2 items-center'>
                Alex
                <Avatar>
                    <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar> </div>

        </header>

    )
}

export default Header