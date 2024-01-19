import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform,{ Platform } from '../hooks/usePlatform'

interface PropType{
  onSelectPlatform: (platform: Platform) => void
  selectPlatformId?: number
}
const PlatformSelector = ({selectPlatformId,onSelectPlatform}: PropType) => {
    const {data,error} = usePlatform();
    const selectedPlatform = data?.results.find(p => p.id === selectPlatformId)
    if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}  
        </MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector