import React from 'react'
import { Box, Container, Flex, Divider, Button, Text, Grid, GridItem } from '@chakra-ui/react'
import { data } from '../../Component/Data/data'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Component/Utils/Actions/Cart'
import { ProductCard } from '../../Component/ProductCard/ProductCard'
export const FeaturedProduct = () => {

    const product = data.filter((item) => item.sale === false)
    const dispatch = useDispatch()


    return (
        <Box mt={10} mb={10} >
            <Container maxW={'8xl'} >
                <Flex align={'center'} justify={'space-between'} >
                    <Box w={'72'} >
                        <Text fontSize={20} color='gray.800' fontWeight={600}  >Featured Product</Text>
                    </Box>
                    <Box w="full" mx={2} >
                        <Divider w='full' opacity={1} />
                    </Box>
                    <Flex gap={10} direction={{ base: 'column', md: 'row' }} >
                        <Button variant={'link'} _hover={{ textDecoration: "none" }} color={'gray.600'} borderRadius={40} fontSize={15} >All</Button>
                        <Button variant={'link'} _hover={{ textDecoration: "none" }} color={'gray.500'} borderRadius={40} fontSize={15} >Watch & Eyewear</Button>
                        <Button variant={'link'} _hover={{ textDecoration: "none" }} color={'gray.500'} borderRadius={40} fontSize={15} >White Tablet</Button>
                    </Flex>
                </Flex>
                <Box mt={10} >
                    <Grid templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }} gap={6} >
                        {
                            product.slice(0, 4).map((item) => (
                                <GridItem key={item.id} >
                                    <ProductCard
                                        image={item.image}
                                        title={item.name}
                                        desc={item.description}
                                        price={item.price}
                                        rating={item.rating}
                                        borderRight={'solid 1px #a9a9a9'}
                                        borderRadius={0}
                                        onClick={() => { dispatch(addToCart(item)) }}
                                    />

                                </GridItem>
                            ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}
