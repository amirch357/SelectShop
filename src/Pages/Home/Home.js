import React from 'react'
import { Box, Container, Text, Grid, GridItem, Button, Card, Flex, Image } from '@chakra-ui/react'
import bg from "../../Component/assets/img/سدفوعفسد.jpg"
import { motion } from "framer-motion"
import { FaShippingFast, FaPhone } from "react-icons/fa"
import sale from "../../Component/assets/icons & shapes/sale.svg"
import discount from "../../Component/assets/icons & shapes/discount.svg"
import { ProductCard } from '../../Component/ProductCard/ProductCard'
import { data } from '../../Component/Data/data'
import bg1 from "../../Component/assets/img/Surface-Studio.png"
import bg2 from "../../Component/assets/img/drone_PNG204.png"
import bg3 from "../../Component/assets/img/Mask-Group-2.png"
import bg4 from "../../Component/assets/img/Group-7883-470x353.png"

export const Home = () => {

    const saleData = data.filter((item) => item.sale === true)


    return (
        <Box pt="36"  >
            <Grid templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(7, 1fr)", md: "repeat(2,1fr)" }} gap={{ lg: 10, md: 2 }} >
                <GridItem colSpan={{ base: 'auto', lg: 5, md: 'auto' }} >
                    <Box backgroundImage={`url(${bg})`} py={20} backgroundRepeat="no-repeat" backgroundSize='cover'  >
                        <Container maxW="5xl" pt={10} >
                            <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}  >
                                <Text fontSize={{ md: 50, base: 30 }} color="gray.500" lineHeight={1} >
                                    Upgrade
                                </Text>
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}  >
                                    <Text fontSize={{ md: 120, base: 50 }} color="#00cabc" fontWeight={600} lineHeight={1} >Your</Text>
                                </motion.div>
                                <Text fontSize={{ md: 50, base: 30 }} letterSpacing={{ md: 20, base: 10 }} lineHeight={1} color="gray.500" >Accessories</Text>
                                <Text fontSize={{ md: 70, base: 50 }} color="gray.500" fontWeight={900} lineHeight={1}  >Extra 50%</Text>
                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}   >
                                    <Button mt={2} color={'#00cabc'} borderWidth={1} borderStyle={'solid'} borderColor={'gray.500'} borderRadius={50} fontSize={12} >See Product</Button>
                                </motion.div>
                            </motion.div>
                        </Container>
                    </Box>
                    <Card py={5} bg="#f6fafa" shadow="none" mt={5} borderRadius={10} >
                        <Container maxW="5xl" >
                            <Grid justifyContent={'center'} templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)", md: "repeat(2,1fr)", sm: "repeat(2,1fr)" }} gap={2} >
                                <GridItem>
                                    <Flex gap={2} >
                                        <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }}  >
                                            <Box>
                                                <FaShippingFast color='#00cabc' fontSize={40} />
                                            </Box>
                                        </motion.div>
                                        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }} >
                                            <Box>
                                                <Text fontSize={17} color="gray.600" fontWeight={600} >Free Shipping</Text>
                                                <Text color="gray.500" >On All Order</Text>
                                            </Box>
                                        </motion.div>
                                    </Flex>
                                </GridItem>
                                <GridItem>
                                    <Flex gap={2} >
                                        <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }}  >
                                            <Box>
                                                <FaPhone color='#00cabc' fontSize={40} />
                                            </Box>
                                        </motion.div>
                                        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }} >
                                            <Box>
                                                <Text fontSize={17} color="gray.600" fontWeight={600} >Online Support</Text>
                                                <Text color="gray.500" >Technical 24/7</Text>
                                            </Box>
                                        </motion.div>
                                    </Flex>
                                </GridItem>
                                <GridItem>
                                    <Flex gap={2} >
                                        <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }}  >
                                            <Box>
                                                <Image w={47} src={sale} />
                                            </Box>
                                        </motion.div>
                                        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }} >
                                            <Box>
                                                <Text fontSize={17} color="gray.600" fontWeight={600} >Big Saving</Text>
                                                <Text color="gray.500" >Weekend Sales</Text>
                                            </Box>
                                        </motion.div>
                                    </Flex>
                                </GridItem>
                                <GridItem>
                                    <Flex gap={2} >
                                        <motion.div initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }}  >
                                            <Box>
                                                <Image w={47} src={discount} />
                                            </Box>
                                        </motion.div>
                                        <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }} >
                                            <Box>
                                                <Text fontSize={17} color="gray.600" fontWeight={600} >Big Discount</Text>
                                                <Text color="gray.500" >Seasons Discounts</Text>
                                            </Box>
                                        </motion.div>
                                    </Flex>
                                </GridItem>
                            </Grid>
                        </Container>
                    </Card>
                </GridItem>
                <GridItem colStart={{ base: 'auto', lg: 6, md: 'auto' }} colSpan={{ base: 'auto', lg: 2, md: 'auto' }} mx={{ lg: 5, base: 0 }}  >
                    <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} >
                        {saleData.map((item) => (
                            <ProductCard sale border={sale ? "solid 3px #00cabc" : ""}
                                image={item.image}
                                title={item.name}
                                salePrice={item.salePrice}
                                price={item.price}
                                desc={item.description}
                                rating={item.rating}
                            />
                        ))}
                    </motion.div>
                </GridItem>
            </Grid>
            <Box mt={5} mb={5} >
                <Container maxW={'8xl'} >
                    <Grid templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }} gap={10} >
                        <GridItem>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} viewport={{ once: true }} >
                                <Card borderRadius={30} pl={5} bg="#00cabc" backgroundImage={`url(${bg1})`} backgroundSize={'contain'} backgroundPosition={'right center'} backgroundRepeat={'no-repeat'} pt={5} >
                                    <Text color="#FFF" fontSize={30} >Apple</Text>
                                    <Text fontSize={40} fontWeight={600} color={'#FFF'}  >New Product</Text>
                                    <Button mb={5} borderRadius={50} bg={'transparent'} border={'solid 1px #FFF'} color={'#FFF'} width={'36'} _hover={{ background: "transparnet" }}  >Shop</Button>
                                </Card>
                            </motion.div>
                        </GridItem>
                        <GridItem>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 }} viewport={{ once: true }} >
                                <Card borderRadius={30} pl={5} bg="#242426" backgroundImage={`url(${bg2})`} backgroundSize={'contain'} backgroundPosition={'right center'} backgroundRepeat={'no-repeat'} pt={5} >
                                    <Text color="#FFF" fontSize={30} >Flying</Text>
                                    <Text fontSize={40} fontWeight={600} color={'#FFF'}  >QuardCopter</Text>
                                    <Button mb={5} borderRadius={50} bg={'transparent'} border={'solid 1px #FFF'} color={'#FFF'} width={'36'} _hover={{ background: "transparnet" }}  >Shop</Button>
                                </Card>
                            </motion.div>
                        </GridItem>
                        <GridItem>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }} viewport={{ once: true }} >
                                <Card borderRadius={30} pl={5} bg="#ff6317" backgroundImage={`url(${bg3})`} backgroundSize={'contain'} backgroundPosition={'right center'} backgroundRepeat={'no-repeat'} pt={5} >
                                    <Text color="#FFF" fontSize={30} >Clean</Text>
                                    <Text fontSize={40} fontWeight={600} color={'#FFF'}  >Your Home</Text>
                                    <Button mb={5} borderRadius={50} bg={'transparent'} border={'solid 1px #FFF'} color={'#FFF'} width={'36'} _hover={{ background: "transparnet" }}  >Shop</Button>
                                </Card>
                            </motion.div>
                        </GridItem>
                        <GridItem>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.5 }} viewport={{ once: true }} >
                                <Card borderRadius={30} pl={5} bg="#9335d3" backgroundImage={`url(${bg4})`} backgroundSize={'contain'} backgroundPosition={'right center'} backgroundRepeat={'no-repeat'} pt={5} >
                                    <Text color="#FFF" fontSize={30} >Drink</Text>
                                    <Text fontSize={40} fontWeight={600} color={'#FFF'}  >Coffee</Text>
                                    <Button mb={5} borderRadius={50} bg={'transparent'} border={'solid 1px #FFF'} color={'#FFF'} width={'36'} _hover={{ background: "transparnet" }}  >Shop</Button>
                                </Card>
                            </motion.div>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}
