import { Box, Flex, Image, Text } from '@chakra-ui/react';
import CustomButton from '../../../../component/common/CustomButton/CustomButton';
import CustomSmallTitle from '../../../../component/common/CustomSmallTitle/CustomSmallTitle';
import CustomSubHeading from '../../../../component/common/CustomSubHeading/CustomSubHeading';

const ServiceHeroSection = () => {
    return (
        <Box bg={'#FDFFDD'} py={10} px={{ base: 6, md: 8, lg: 14 }}>
            <Flex
                direction={{ base: 'column', lg: 'row' }}
                align={{ base: 'center', lg: 'center' }}
                justify={'space-between'}
                gap={6}
            >
                <Box textAlign={{ base: 'center', lg: 'start' }} maxW={{ lg: '50%' }}>
                    <CustomSmallTitle textAlign={{ base: "center", lg: "start" }}>
                        OUR SERVICES
                    </CustomSmallTitle>

                    <CustomSubHeading textAlign={{ base: "center", lg: "start" }} >
                        Feel Better, with expert
                        <br />
                        <Text as="span" fontWeight={600} position="relative" display="inline-block">
                            one-on-one care
                            <Box
                                as="span"
                                position="absolute"
                                top="-0.1rem"
                                right="-1.5rem"
                                w={{ base: "1.5rem", lg: "2rem" }}
                                h={{ base: "1.5rem", lg: "2rem" }}
                            >
                                <Image src="/images/herosectionIcon.svg" alt="Mental Health Doctor In Noida" w="100%" h="100%" />
                            </Box>
                        </Text>
                    </CustomSubHeading>

                    <Text
                        as="h2"
                        fontSize={{ base: "16px", md: "18px" }}
                        fontWeight={400}
                        mt={4}
                        color="#4A4A4A"
                        textAlign={{ base: "center", lg: "start" }}
                    >
                        Specialized support for every stage of life, from licensed providers.
                    </Text>

                    <Box maxW={{ base: '100%', lg: '50%' }} my={{md:4,lg:0}} display={{ base: "block", lg: "none" }}>
                        <Image
                            alt="best counseling psychologist in Noida"
                            w={'100%'}
                            h={{ base: '300px', md: '350px', lg: '400px' }}
                            objectFit={'contain'}
                            src='https://res.cloudinary.com/dekfm4tfh/image/upload/v1743333109/Group_1000003379_tctp7u.png'
                        />
                    </Box>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        gap={{ base: 1, lg: 3 }}
                        justify={{ base: 'center', lg: 'flex-start' }}
                        align={'center'}
                        mt={{ base: 2, lg: 4 }}
                    >
                        <Flex align="center">
                            {/* Show checkmark inside circle on mobile, hide on desktop */}
                            <Box
                                display={{ base: 'flex', md: 'none' }}
                                mr={2}
                                w="20px"
                                h="20px"
                                borderRadius="full"
                                bg="#86C6F4"
                                color="white"
                                justifyContent="center"
                                alignItems="center"
                                fontSize="sm"
                            >
                                ✓
                            </Box>
                            <Text whiteSpace={'nowrap'} fontWeight={500} fontSize={'xl'}>Completely Confidential</Text>
                        </Flex>

                        {/* Show blue dot only on desktop */}
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Image alt="Who is the best counseling psychologist in Noida" objectFit={'contain'} src='/images/service/blueDot.png' />
                        </Box>

                        <Flex align="center">
                            {/* Show checkmark inside circle on mobile, hide on desktop */}
                            <Box
                                display={{ base: 'flex', md: 'none' }}
                                mr={2}
                                w="20px"
                                h="20px"
                                borderRadius="full"
                                bg="#86C6F4"
                                color="white"
                                justifyContent="center"
                                alignItems="center"
                                fontSize="sm"
                            >
                                ✓
                            </Box>
                            <Text whiteSpace={'nowrap'} fontWeight={500} fontSize={'xl'}>Outcome-focused</Text>
                        </Flex>

                        {/* Show blue dot only on desktop */}
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Image alt="Counselling psychologist in Noida" objectFit={'contain'} src='/images/service/blueDot.png' />
                        </Box>

                        <Flex align="center">
                            {/* Show checkmark inside circle on mobile, hide on desktop */}
                            <Box
                                display={{ base: 'flex', md: 'none' }}
                                mr={2}
                                w="20px"
                                h="20px"
                                borderRadius="full"
                                bg="#86C6F4"
                                color="white"
                                justifyContent="center"
                                alignItems="center"
                                fontSize="sm"
                            >
                                ✓
                            </Box>
                            <Text whiteSpace={'nowrap'} fontWeight={500} fontSize={'xl'}>Qualified therapists</Text>
                        </Flex>
                    </Flex>
                    <CustomButton mt={6}>Get Started</CustomButton>
                </Box>
                <Box maxW={{ base: '100%', lg: '50%' }} display={{ base: "none", lg: "block" }}>
                    <Image
                        alt="Mental Health Clinic In Noida"
                        w={'100%'}
                        h={{ base: '300px', md: '350px', lg: '400px' }}
                        objectFit={'contain'}
                        src='https://res.cloudinary.com/dekfm4tfh/image/upload/v1743333109/Group_1000003379_tctp7u.png'
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export default ServiceHeroSection;