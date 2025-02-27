import { Globe } from 'lucide-react'

const Logo = () => {
   return (
      <div className="flex items-center gap-2 text-2xl font-bold">
         <Globe size={32} className="stroke-blue-500" />
         <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text leading-none whitespace-nowrap">
            Happy World
         </span>
      </div>
   )
}

export default Logo
