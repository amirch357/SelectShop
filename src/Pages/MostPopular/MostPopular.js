import React from 'react'
import { Box,Container,Flex,Divider,Button,Text, Grid, GridItem,Card,Image } from '@chakra-ui/react'
import { data } from '../../Component/Data/data'
import { ProductCard } from '../../Component/ProductCard/ProductCard'
import {motion} from "framer-motion"
import { addToCart } from '../../Component/Utils/Actions/Cart'
import { useDispatch,useSelector } from 'react-redux'
export const MostPopular = () => {

    const product = data.filter((item)=>item.sale===false)
const dispatch = useDispatch()
const {cartItems} = useSelector((state)=>state.Cart)
console.log(cartItems)
  return (
   <Box mt={5} >
    <Container maxW={'8xl'} >
    <Flex align={'center'} justify={'space-between'} >
        <Box w={40} >
        <Text fontSize={20} color='gray.800' fontWeight={600}  >Most Popular</Text>
        </Box>
        <Box w="full" mx={2} >
        <Divider w='full' opacity={1}  />
        </Box>
        <Button bg="#00cabc" borderRadius={40} color={'#FFF'} fontSize={12} >View All</Button>
    </Flex>
    <Box mb={10} >
        <Grid templateColumns={{base:'repeat(1,1fr)', lg:'repeat(4,1fr)'}} gap={6} >
    {
        product.slice(0,4).map((item)=>(
            <GridItem key={item.id} >
                <ProductCard 
                image={item.image}
                title={item.name}
                desc={item.description}
                price={item.price}
                rating={item.rating}
                borderRight={'solid 1px #a9a9a9'}
                borderRadius={0}
                onClick={()=>{dispatch(addToCart(item))}}
                />
               
            </GridItem>
        ))
    }
    </Grid>
    <Divider my={2} opacity={1} borderTop={'solid 1px #a9a9a9'} />
    <Grid templateColumns={{base:'repeat(1,1fr)', lg:'repeat(4,1fr)',md:'repeat(2,1fr)'}} gap={6} >
    {
        product.slice(4,8).map((item)=>(
            <GridItem key={item.id} >
                <ProductCard 
                image={item.image}
                title={item.name}
                desc={item.description}
                price={item.price}
                rating={item.rating}
                borderRight={'solid 1px #a9a9a9'}
                borderRadius={0}
                onClick={()=>{dispatch(addToCart(item))}}
                />
               
            </GridItem>
        ))
    }
    </Grid>
    </Box >
    <Grid gap={4}  mb={5} templateColumns={{base:"repeat(1,1fr)", md:'repeat(2,1fr)' ,lg:"repeat(4,1fr)"}} >
    <GridItem>
        <motion.div initial={{x:-20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}}  >
        <Card bg="#f1f1f1" >
            <Text pt={4} pl={4} fontSize={30} >Apple</Text>
            <Text pl={4} fontSize={45} fontWeight={600}  >Wrist Watch</Text>
            <Button ml={4} borderRadius={50} bg={'transparent'} border={'solid 1px gray'} w={40} >Shop</Button>
            <Image mt={5} mb={5} src={require("../../Component/assets/img/s8kfbpqm.png")} />
        </Card>
        </motion.div>
    </GridItem>
    <GridItem colSpan={2} >
        <motion.div initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}} >
        <Card bg={'#ff0036'} position={'relative'} overflow={'hidden'} >
            <Flex>
                <Box>
                    <Text fontSize={30} color={'#FFF'} pl={5} pt={5} >Headphones</Text>
                    <Text fontSize={45} fontWeight={600} color={'#FFF'} pl={5} >Moster Beat</Text>
                    <Button mb={5}  ml={5} color={'#FFF'} borderRadius={50} bg={'transparent'} border={'solid 1px white'} w={40} >Shop</Button>
                </Box>
                <Box position={'absolute'} top={-170} right={0} >
                    <Image src={require("../../Component/assets/img/2.png")} />
                </Box>
            </Flex>
        </Card>
        </motion.div>
        <motion.div initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}} >
        <Card bg={'#242426'} mt={5} position={'relative'} overflow={'hidden'} >
            <Flex>
                <Box>
                    <Text fontSize={30} color={'#FFF'} pl={5} pt={5} >Music Make</Text>
                    <Text fontSize={45} fontWeight={600} color={'#FFF'} pl={5} lineHeight={1}  >Feel Better</Text>

                    <Text fontSize={20} color={'#FFF'} pl={5} lineHeight={1} textDecor={'overline'} letterSpacing={25} >Buffers</Text>
                    <Button mb={5}  ml={5} mt={5} color={'#FFF'} borderRadius={50} bg={'transparent'} border={'solid 1px white'} w={40} >Shop</Button>
                </Box>
                <Box w='full' justifyContent={'end'} display={'flex'} >
                    <Image src={require("../../Component/assets/img/asqss.png")} />
                </Box>
            </Flex>
        </Card>
        </motion.div>
    </GridItem>
    <GridItem>
        <motion.div initial={{x:20,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5}} viewport={{once:true}} >
    <Card bg="#0073af" position={'relative'} overflow={'hidden'} >
    <Image mt={5} mb={5} src={require("../../Component/assets/img/Group-7879.png")} position={'absolute'} top={-70}  />
            <Text color={'#FFF'} pt={'72'} pl={4}  fontSize={30} >Nikkon Ultimate</Text>
            <Text color={'#FFF'} pl={4} fontSize={45} fontWeight={600}  >Zoom Picture</Text>
            <Button ml={4} mb={3} borderRadius={50} bg={'transparent'} color={'#FFF'} border={'solid 1px #FFF'} w={40} >Shop</Button>
            
        </Card>
        </motion.div>
    </GridItem>
    </Grid>
    </Container>
   </Box>
  )
}
