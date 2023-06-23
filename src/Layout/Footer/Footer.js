import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image,
    Divider,
    InputGroup,
    InputRightElement,
    Button,
    Grid,
    GridItem
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
 
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box bg="#00cabc" >
        <Container maxW={'6xl'} py={5} >
      <Grid gap={10} templateColumns={{base:"repeat(1,1fr)",lg:'repeat(2,1fr)'}} >
        <GridItem textAlign={'center'} >
        <Text fontSize={15} color={'#FFF'} textTransform={'uppercase'}  >Handcrafted with integrity</Text>
        <Text fontSize={40} color={'#FFF'} fontStyle={'italic'} >Join Our Newsletter</Text>
        <Text fontSize={12} color={'#FFF'} >In a professional context it often happens that private or corporate</Text>
        </GridItem>
        <GridItem display={'flex'} flexDirection={'column'} justifyContent={'center'} >
          <Stack direction={'row'} >
          <Input placeholder='Your Email Address' bg={'#FFF'} borderRadius={0}   />
          <Button bg={'#009287'} color={'#FFF'} borderRadius={0}  >Subscribe</Button>
          </Stack>
        </GridItem>
      </Grid>
        </Container>
      <Box
        bg={useColorModeValue('#3d3e49', '#3d3e49')}
        color={useColorModeValue('#FFF', '#FFF')}
        borderTopRadius={50}
        >
        <Container  maxW={'8xl'} py={10}>
          <SimpleGrid
            templateColumns={{  sm: ' 1fr', md: '2fr 1fr 1fr 2fr',lg:'2fr 1fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
               <Image src={require("../../Component/assets/logos/Group 24.png")} />
              </Box>
              <Text fontSize={'sm'}>
               Customer reviews are essential in creating social proof. This marketing terms basically means that we as consumers are swayed by the opinions of others.
              </Text>
            
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontSize={19} fontWeight={600} >Meet</Text>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>About</Link>
              <Link href={'#'}>Features</Link>
              <Link href={'#'}>Team</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Our Ecosystem</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontSize={19} fontWeight={600} >Quick Link</Text>
              <Link href={'#'}>News</Link>
              <Link href={'#'}>Article</Link>
              <Link href={'#'}>Help center</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>License</Link>
              <Link href={'#'}>Freebies</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Text fontSize={19} fontWeight={600} >Category Link</Text>
              <Link href={'#'}>Graphics</Link>
              <Link href={'#'}>Video</Link>
              <Link href={'#'}>Presentations</Link>
              <Link href={'#'}>Photos</Link>
              <Link href={'#'}>Font</Link>
            </Stack>
            <Stack align={'flex-start'} w="full" >
              <Text fontSize={19} fontWeight={600}  >Follow Us</Text>
              <Divider mt={2} opacity={1} borderColor={'#FFF'} />
              <Text fontSize={18} fontWeight={600} mt={2} >Subscribe</Text>
              <Text fontSize={17} >Send me tips, trends, freebies, update & offers.</Text>
              <Stack >
             
              <InputGroup alignItems="center" bg="#3d3e49" borderRadius={50} w={{md:'96',base:'auto'}}  >
              <Input
                  placeholder={'Email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  borderRadius={50}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}

                />
                  <InputRightElement w={'auto'} right={1} >

                  <Button  bg="#00cabc" h={31} fontSize={17} color="#FFF" fontWeight={600} borderRadius={50} >Subscribe</Button>


                  </InputRightElement>
                </InputGroup>
             
               
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      </Box>
    );
  }