import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

const SearchBar = () => {
   return (
      <div className="flex items-center   p-2 shadow-sm">
         <Input
            type="text"
            placeholder="Search products..."
            className="w-full"
         />
         <Button size="icon" variant="outline">
            <Search size={18} />
         </Button>
      </div>
   )
}

export default SearchBar
