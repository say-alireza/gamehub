import { Button, Menu , MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import UsePlatforms from '../hooks/UsePlatforms'
const PlatformSelector = () => {
  const {data} = UsePlatforms();
  return (
    <>
    <Menu>
    <MenuButton 
        as={Button} 
        rightIcon={<BsChevronDown />}
        mb={3}
      >
        Platforms
      </MenuButton>   
      <MenuList>
        {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
       </Menu>
    </>
  )
}

export default PlatformSelector