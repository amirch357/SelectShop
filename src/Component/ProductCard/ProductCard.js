import React from 'react'
import { Card,Box,Image,Text,Flex,Button, requiredChakraThemeKeys } from '@chakra-ui/react'
import ReactStars from "react-rating-stars-component";
import {motion} from "framer-motion"
export const ProductCard = ({image,title,sale,price,desc,salePrice,onClick,rating,border,...props}) => {
  return (
  <Box>
    <Card className='card'  sx={{...props}} border={border}  shadow={0} >
        {sale?
        <Box display="flex" justifyContent="end" mt={5} mr={5}   >
            <Box bg="#00cabc" borderRadius={50} h={'14'} w="14" display="flex" justifyContent={'center'} alignItems={'center'}  boxShadow={'xl'} >
                <Text fontSize={13} color="#FFF" fontWeight={900} >SALE</Text>
            </Box>
        </Box>
        :""}
        <motion.div initial={{scale:1}} whileHover={{scale:1.1}} transition={{duration:0.8}} >
        <Box mt={5} display={'flex'} justifyContent={'center'} >
    <Image w={270} src={image} />
    </Box>
    </motion.div>
    <Text fontSize={15} noOfLines={1} textAlign={sale?'center':'left'} px={10} pt={5} fontWeight={600} >{title}</Text>
    <Text pt={2} fontSize={13} textAlign={sale?'center':"left"} px={10} color="gray.500" >{desc}</Text>
    <Flex justify={sale?'center':"left"} pt={5} gap={2} align={'center'} >
        {sale?
        <>
        <Text fontSize={17} color={'gray.500'} textDecoration={'line-through'} >${price}</Text>
        <Text fontSize={26} color={'#00cabc'} fontWeight={600} >${salePrice}</Text>
        </>
    :<Text px={10} fontSize={26} color={'#00cabc'} fontWeight={600} >${price}</Text>}
    </Flex>
    <Flex px={10} justify={sale?'center':"left"} >
        <ReactStars
        count={5}
        edit={false}
        size={24}
        activeColor={'#ff6317'}
        
        value={rating}
        
        />
    </Flex>
    <Flex justify={sale?'center':"right"} mt={5} mb={10} mx={5} >
        <Button pr={0} pl={5} backgroundSize={' 200% 100%'} onClick={onClick} backgroundPosition={'left bottom'} transition={' all .5s ease-out'} background="linear-gradient(to right, #f7fdfd 50%, #00cabc 50%)" _hover={{backgroundPosition:"right bottom",color:"#FFF"}}  rightIcon={<Box  bg="#00cabc"  borderRadius={100} h={38} w={38} display={'flex'} justifyContent={'center'} alignItems={'center'} ><Image src={require("../assets/icons & shapes/shopping-bag.png")} /></Box>} borderRadius={50} >Add to Cart</Button>
    </Flex>
    </Card>
  </Box>
  )
}
