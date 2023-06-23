import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, Container, Flex, Image, Text, Divider, Grid, GridItem } from '@chakra-ui/react';
import Slider from 'react-slick';
import { BsQuote } from "react-icons/bs"
import { motion } from "framer-motion"
export const Customer = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };


    return (
        <Box mt={20} mb={20} >
            <Container maxW={'8xl'} >
                <Flex align={'center'} justify={'space-between'} >
                    <Box w={'52'} >
                        <Text fontSize={20} color='gray.800' fontWeight={600}  >Customer Systs</Text>
                    </Box>
                    <Box w="full" mx={2} >
                        <Divider w='full' opacity={1} />
                    </Box>

                </Flex>
                <Box mt={20} >
                    <Slider {...settings} >
                        <Box>
                            <Card shadow={0} >
                                <Flex gap={2} align={'center'} >
                                    <Box>
                                        <BsQuote fontSize={50} color='#696969' />
                                    </Box>
                                    <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                        <Box>
                                            <Text fontSize={20} fontWeight={600} color={'#00cabc'} >Denis Zalerberg</Text>
                                            <Text fontSize={14} color={'gray.500'} >Maketing Manager</Text>
                                        </Box>
                                    </motion.div>
                                </Flex>
                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                    <Box mt={5} >
                                        <Text fontSize={14} color={'gray.500'} pr={20} >There are many variations of passages of Lorem Ipsum available, but the majority have sufferd alteration.</Text>
                                    </Box>
                                </motion.div>
                            </Card>
                        </Box>
                        <Box>
                            <Card shadow={0} >
                                <Flex gap={2} align={'center'} >
                                    <Box>
                                        <BsQuote fontSize={50} color='#696969' />
                                    </Box>
                                    <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                        <Box>
                                            <Text fontSize={20} fontWeight={600} color={'#00cabc'} >Denis Zalerberg</Text>
                                            <Text fontSize={14} color={'gray.500'} >Maketing Manager</Text>
                                        </Box>
                                    </motion.div>
                                </Flex>
                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                    <Box mt={5} >
                                        <Text fontSize={14} color={'gray.500'} pr={20} >There are many variations of passages of Lorem Ipsum available, but the majority have sufferd alteration.</Text>
                                    </Box>
                                </motion.div>
                            </Card>
                        </Box>
                        <Box>
                            <Card shadow={0} >
                                <Flex gap={2} align={'center'} >
                                    <Box>
                                        <BsQuote fontSize={50} color='#696969' />
                                    </Box>
                                    <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                        <Box>
                                            <Text fontSize={20} fontWeight={600} color={'#00cabc'} >Denis Zalerberg</Text>
                                            <Text fontSize={14} color={'gray.500'} >Maketing Manager</Text>
                                        </Box>
                                    </motion.div>
                                </Flex>
                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                    <Box mt={5} >
                                        <Text fontSize={14} color={'gray.500'} pr={20} >There are many variations of passages of Lorem Ipsum available, but the majority have sufferd alteration.</Text>
                                    </Box>
                                </motion.div>
                            </Card>
                        </Box>
                        <Box>
                            <Card shadow={0} >
                                <Flex gap={2} align={'center'} >
                                    <Box>
                                        <BsQuote fontSize={50} color='#696969' />
                                    </Box>
                                    <motion.div initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                        <Box>
                                            <Text fontSize={20} fontWeight={600} color={'#00cabc'} >Denis Zalerberg</Text>
                                            <Text fontSize={14} color={'gray.500'} >Maketing Manager</Text>
                                        </Box>
                                    </motion.div>
                                </Flex>
                                <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} >
                                    <Box mt={5} >
                                        <Text fontSize={14} color={'gray.500'} pr={20} >There are many variations of passages of Lorem Ipsum available, but the majority have sufferd alteration.</Text>
                                    </Box>
                                </motion.div>
                            </Card>
                        </Box>
                    </Slider>
                </Box>
                <Box mt={20}>
                    <Card p={10} shadow={0} bg={'#f6fafa'} borderRadius={10} >
                        <Grid gap={20} templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(5,1fr)' }} >
                            <GridItem>
                                <Image filter={'grayscale(1)'} opacity={0.3} _hover={{ opacity: 1, filter: 'none', cursor: "pointer" }} transition={'all 0.5s'} src={require("../../Component/assets/img/pngwing.com (8).png")} />
                            </GridItem>
                            <GridItem>
                                <Image filter={'grayscale(1)'} opacity={0.3} _hover={{ opacity: 1, filter: 'none', cursor: "pointer" }} transition={'all 0.5s'} src={require("../../Component/assets/img/pngwing.com (9).png")} />
                            </GridItem>
                            <GridItem>
                                <Image filter={'grayscale(1)'} opacity={0.3} _hover={{ opacity: 1, filter: 'none', cursor: "pointer" }} transition={'all 0.5s'} src={require("../../Component/assets/img/pngwing.com (10).png")} />
                            </GridItem>
                            <GridItem>
                                <Image filter={'grayscale(1)'} opacity={0.3} _hover={{ opacity: 1, filter: 'none', cursor: "pointer" }} transition={'all 0.5s'} src={require("../../Component/assets/img/pngwing.com (35).png")} />
                            </GridItem>
                            <GridItem>
                                <Image filter={'grayscale(1)'} opacity={0.3} _hover={{ opacity: 1, filter: 'none', cursor: "pointer" }} transition={'all 0.5s'} src={require("../../Component/assets/img/pngwing.com (38).png")} />
                            </GridItem>
                        </Grid>
                    </Card>
                </Box>
            </Container>
        </Box>
    )
}
