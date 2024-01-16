import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/useGame'

interface PropType{
  onSelectPlatform: (platform: Platform) => void
  selectPlatform: Platform | null
}
const PlatformSelector = ({selectPlatform,onSelectPlatform}: PropType) => {
    const {data,error} = usePlatform();
    if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectPlatform?.name || "Platforms"}  
        </MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector