import React from 'react'
import { useNavigate } from 'react-router'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../components/ui/dropdown-menu"
  import { UserIcon } from 'lucide-react'

const Userprofile = () => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/collection')
  }
  return (
    <div>
      <DropdownMenu>
  <DropdownMenuTrigger className='  '><UserIcon/></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
 
    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default Userprofile
