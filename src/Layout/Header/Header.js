import React, { useState,useRef,useEffect } from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Container,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Input,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Divider,
  Grid,
  GridItem,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Card,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import "../layout.css"
import { RiMenu2Fill } from "react-icons/ri"
import { useSelector } from 'react-redux';
import { increaseQuantity,decreaseQuantity, removeFromCart, addToCart } from '../../Component/Utils/Actions/Cart';
import { useDispatch } from 'react-redux';
import { data } from '../../Component/Data/data';
export const Header = () => {
  const {cartItems} = useSelector((state)=>state.Cart)
  const drawerRef = useRef()
  const { isOpen,onOpen,onClose, onToggle } = useDisclosure();
  const dispatch = useDispatch()
  const Subtotal = cartItems?.reduce((total, item) => {
    return total + item.price * item.productQuantity
}, 0)
  const NAV_ITEMS = [
    {
      label: 'Home',

    },
    {
      label: 'Shop',

    },
    {
      label: 'About',
      href: '#',
    },
    {
      label: 'Blog',
      href: '#',
    },
    {
      label: 'Contact',
      href: '#',
    },
  ];

  const children = [
    {
      label: 'Computer & Accessories',
      href: '#',
      image: require("../../Component/assets/icons & shapes/mouse.png")
    },
    {
      label: 'Cameras, Audio & Video',
      href: '#',
      image: require("../../Component/assets/icons & shapes/dwewed.png")
    },
    {
      label: 'Smartphones And Phones',
      href: '#',
      image: require("../../Component/assets/icons & shapes/efff.png")
    },
    {
      label: 'Laptops And Tablets',
      href: '#',
      image: require("../../Component/assets/icons & shapes/cfef.png")
    },
    {
      label: 'TV and Display',
      href: '#',
      image: require("../../Component/assets/icons & shapes/dfer.png")
    },
    {
      label: 'Smart Home',
      href: '#',
      image: require("../../Component/assets/icons & shapes/sdwswe.png")
    },
    {
      label: 'Watches & Eyewear',
      href: '#',
      image: require("../../Component/assets/icons & shapes/edwewew.png")
    },
    {
      label: 'Headphones & Speakers',
      href: '#',
      image: require("../../Component/assets/icons & shapes/sdsddw.png")
    },
    {
      label: 'Car Motorbike & Industrials',
      href: '#',
      image: require("../../Component/assets/icons & shapes/sdsdsd.png")
    },
    {
      label: 'Accessories',
      href: '#',
      image: require("../../Component/assets/icons & shapes/sdsdsd.png")
    },
  ]

  const [searchOpen, setSearchOpen] = useState(false)
  useEffect(()=>{
    data.slice(0,3).map((item)=>{
      const items = {...item,productQuantity:1}
     return dispatch(addToCart(items))})
  },[])
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
   
    return (
      <Stack direction={'row'} spacing={{ lg: 4, md: 3 }}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>


            <Link
              p={2}
              href={navItem.href ?? '#'}
              fontSize={'sm'}
              fontWeight={500}
              color={"gray.500"}
              _hover={{
                textDecoration: 'none',
                color: "gray.300",
              }}>
              {navItem.label}
            </Link>




          </Box>
        ))}
      </Stack>
    );
  };

  const DesktopSubNav = ({ label, href, subLabel, image }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'flex'}
        borderBottom={'solid 2px #7a7a7b'}
        h={"50px"}
        p={2}
        justifyContent={"space-between"}

        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'} justify="space-between" >
          <Stack direction="row" align={'center'} spacing={6} >
            <Box>
              <Image width='20px' src={image} />
            </Box>
            <Box>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'pink.400' }}
                fontWeight={500}
                color="gray.600"
                fontSize={12}
              >

                {label}
              </Text>
            </Box>

          </Stack>

        </Stack>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={1}
          _groupHover={{ color: "pink.400", opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Link>
    );
  };
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>

        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };



  return (
    <> 
 <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={drawerRef}
        size={'lg'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <Container maxW={'6xl'} >
              {cartItems.length===0?
             <Text fontSize={30} color={'#ff0036'} textAlign={'center'} >Cart is empty go to shop for shoping</Text>
             : 
            <Grid templateColumns={{base:'repeat(1,1fr)',md:'repeat(4,1fr)',lg:'repeat(4,1fr)'}} gap={5} >
              {cartItems.map((item)=>(
                <>
            <GridItem colSpan={{lg:1,md:4}} >
              <Card shadow={0} justify={'center'} align={'center'} border={'solid 1px gray'}  >
              <Image w="120px" h={'120px'} src={item.image} objectFit={'contain'} />
              </Card>
            </GridItem>
            <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'} >
              <Text color={'gray.500'} fontSize={12} >{item.name}</Text>
            </GridItem>
            <GridItem display={'flex'} justifyContent={'center'} >
              <Flex align={'center'} gap={2} >
                <Button borderRadius={0} size={'xs'} onClick={()=>dispatch(decreaseQuantity(item.id))} >-</Button>
                <Box border="solid 1px #00cabc" w='70px' textAlign={'center'}>{item.productQuantity}</Box>
                <Button size={'xs'} onClick={()=>{dispatch(increaseQuantity(item.id))}} borderRadius={0} >+</Button>
              </Flex>
            </GridItem>
            <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'} >
              <Flex alignItems={'center'} gap={10} >
              <Text> $ {item.price}</Text>
              <Link onClick={()=>dispatch(removeFromCart(item.id))} >
              <DeleteIcon color={'red'} />
              </Link>
              </Flex>
            </GridItem>
          
            </>
            ))}
            </Grid>
            }
            </Container>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Checkout ${Subtotal}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
     <Box bg="#2d2d39" borderBottomRadius={30} as="nav" position="fixed" w="full" zIndex={999} >

      <Flex
        bg="#242426"
        color={useColorModeValue('gray.600', 'white')}



        borderBottom={"1px"}
        borderBottomRadius={20}
        borderStyle={"outset"}
        className='header-container'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Container maxW="8xl" alignItems="center" display="flex" >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} color="gray.500" /> : <HamburgerIcon w={5} h={5} color="gray.500" />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 5 }} justify={{ base: 'center', md: 'start' }} align="center" >
            <Image src={require("../../Component/assets/logos/Group 24.png")} />

            <Flex display={{ base: 'none', md: 'flex' }} ml={{ lg: 10, md: 7 }}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            display={{ base: "none", md: "flex" }}
            justify={'flex-end'}
            direction={'row'}
            spacing={{ lg: 10, md: 2 }}
            align="center"
          >

            <Stack direction='row' >
              <Image src={require("../../Component/assets/icons & shapes/asasssq.png")} />
              <Link fontSize={{ lg: 12, md: 10 }} color="gray.500" _hover={{ color: "gray.300" }} >info@explorelogics.com</Link>
            </Stack>
            <Stack direction='row' >
              <Image src={require("../../Component/assets/icons & shapes/asasas.png")} />
              <Link fontSize={{ lg: 12, md: 10 }} color="gray.500" _hover={{ color: "gray.300" }} >+92 (505) 254 2589</Link>
            </Stack>
          </Stack>
          <Box display={{ base: "block", md: "none" }} >
            <Stack direction="row" spacing={{ lg: 5, md: 5, base: 2 }} align="center" >
              <Flex gap={2} align="center" >
                <Box   >
                  <Image w={{ base: "3" }} src={require("../../Component/assets/icons & shapes/user.png")} />
                </Box>
                <Box>
                  <Link fontSize={{ lg: 19, md: 19, base: 10 }} href='#' color="gray.500" _hover={{ color: "gray.400" }} >Login</Link>
                </Box>
                <Box color="gray.500" > / </Box>
                <Box>
                  <Link fontSize={{ lg: 19, md: 19, base: 10 }} href='#' color="gray.500" _hover={{ color: "gray.400" }} >Sign Up</Link>
                </Box>
              </Flex>
              <Box>
                <Divider h={27} orientation="vertical" borderColor="gray.500" borderWidth="1px" borderStyle="solid" />
              </Box>
              <Box position="relative" >
                <Link onClick={onOpen} ref={drawerRef} >
                  <Image src={require("../../Component/assets/icons & shapes/shopping-bag.png")} w="8" />
                  <Box bg="#00cfbc" display="flex" borderRadius={50} alignItems="center" justifyContent="center" color="#FFF" w={4} h={4} fontSize={12} position="absolute" right={0} top={3} >{cartItems.length}</Box>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Flex py={5} >
        <Container maxW="8xl" display="flex" justifyContent="space-between" alignItems="center" >
          <Popover trigger='hover' placement="bottom-start" >
            <PopoverTrigger>
              <Stack color="gray.500" _hover={{ cursor: "pointer", color: "gray.400" }} direction="row" >
                <RiMenu2Fill fontSize={19} />
                <Text fontWeight={600} >Shop by Category</Text>
              </Stack>
            </PopoverTrigger>
            <PopoverContent>
              {children.map((child) => (
                <DesktopSubNav key={child.label} {...child} />
              ))}
            </PopoverContent>
          </Popover>
          <Box>
            <InputGroup bg="#3d3e49" borderRadius={50} w={{ base: "100%", lg: "2xl", md: "80" }} display={{ base: "none", sm: "block" }} >
              <Input placeholder='Type hare' color="#FFF" borderRadius={50} border={0} />
              <InputRightElement w={97} right={1} >

                <Button rightIcon={<Image src={require("../../Component/assets/icons & shapes/magnifier.png")} />} bg="#00cabc" h={31} fontSize={17} color="#FFF" fontWeight={500} borderRadius={50} >Search</Button>


              </InputRightElement>
            </InputGroup>
            <Popover trigger="click" placement="bottom-end" onOpen={()=>setSearchOpen(true)} onClose={()=>setSearchOpen(false)} >
              <PopoverTrigger  >
                {searchOpen===false? 
                <Button  display={{ base: "flex", sm: "none" }} rightIcon={<Image src={require("../../Component/assets/icons & shapes/magnifier.png")} />} bg="#00cabc" h={31} fontSize={17} color="#FFF" fontWeight={500} borderRadius={50} >Search</Button>
                : <CloseIcon w={3} h={3} color="gray.500"  />}
                </PopoverTrigger>
              <PopoverContent borderRadius={50}  >


                <InputGroup alignItems="center" bg="#3d3e49" borderRadius={50} w={{ base: "100%", lg: "2xl", md: "80" }}  >
                  <Input placeholder='Type hare' color="#FFF" borderRadius={50} border={0} />
                  <InputRightElement w={97} right={1} >

                    <Button rightIcon={<Image src={require("../../Component/assets/icons & shapes/magnifier.png")} />} bg="#00cabc" h={31} fontSize={17} color="#FFF" fontWeight={500} borderRadius={50} >Search</Button>


                  </InputRightElement>
                </InputGroup>

              </PopoverContent>

            </Popover>
          </Box>
          <Box display={{ base: "none", md: "block" }} >
            <Stack direction="row" spacing={5} align="center" >
              <Flex gap={2} >
                <Box>
                  <Image src={require("../../Component/assets/icons & shapes/user.png")} />
                </Box>
                <Box>
                  <Link href='#' color="gray.500" _hover={{ color: "gray.400" }} >Login</Link>
                </Box>
                <Box color="gray.500" > / </Box>
                <Box>
                  <Link href='#' color="gray.500" _hover={{ color: "gray.400" }} >Sign Up</Link>
                </Box>
              </Flex>
              <Box>
                <Divider h={27} orientation="vertical" borderColor="gray.500" borderWidth="1px" borderStyle="solid" />
              </Box>
              <Box position="relative" >
                <Link onClick={onOpen} ref={drawerRef}  >
                  <Image src={require("../../Component/assets/icons & shapes/shopping-bag.png")} w="8" />
                  <Box bg="#00cfbc" display="flex" borderRadius={50} alignItems="center" justifyContent="center" color="#FFF" w={4} h={4} fontSize={12} position="absolute" right={0} top={3} >{cartItems.length}</Box>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Flex>
    </Box>
    </>
  )
}
