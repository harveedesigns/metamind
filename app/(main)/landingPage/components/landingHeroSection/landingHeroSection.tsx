'use client'
import {
    Box,
    Flex,
    Grid,
    Heading,
    Image,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
// import stores from "../../../../store/stores";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import HeroCarousel from "../../../../component/common/HeroSection/HeroCarousel";
import AppointmentModal from "../../../../component/common/AppointmentModal/AppointmentModal";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";

const HeroSection = observer(() => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonSize = useBreakpointValue({ base: "lg", md: "xl" });
    const buttonWidth = useBreakpointValue({ base: "10rem", md: "180px" });
    // const [ setContent] = useState<any>({})
    // const { companyStore: { getPageContent, companyDetails } } = stores

    // useEffect(() => {
    //     setContent(getPageContent('home') || {})
    // }, [companyDetails, getPageContent])

    return (
        <Box
            mx={"auto"}
            my={{ base: 2, md: 6, lg: 8 }}
            maxW={{ base: "95%", md: "90%" }}
        >
            <Grid templateColumns={{ lg: "1fr 1fr" }} gap={6}>
                <Box>
                    <Flex align={"center"} h={"100%"}>
                        <Box py={{ base: 2, md: 6 }} maxW={{ md: "95%" }}>
                            <Text textTransform="uppercase" color="#DF837C" textAlign={{ base: "center", lg: "start" }}>
                            </Text>
                            <CustomSmallTitle textAlign={{ base: "center", lg: "start" }} ml={{ lg: "0.2rem" }} display={{ base: "none", lg: "block" }} > SEEK HELP </CustomSmallTitle>
                            <Heading
                                as="h1"
                                fontWeight={400}
                                fontSize="clamp(2rem, 4vw, 5rem)"
                                my={{ base: 1, lg: 3 }}
                                lineHeight="1.15"
                                textAlign={{ base: "center", lg: "start" }}
                                position="relative"
                                // fontFamily="Gilroy"
                                letterSpacing="-3%"
                            >
                                For Better <br />
                                <Text
                                    as="span"
                                    fontWeight={600}
                                    position="relative"
                                    // fontFamily="Gilroy"
                                    letterSpacing="-3%"
                                >
                                    Mental Health
                                    <Box
                                        as="span"
                                        position="absolute"
                                        top="-0.5rem" // Adjust this for vertical positioning
                                        right="-1.5rem" // Adjust this for horizontal positioning
                                        w={{ base: "1.5rem", lg: "2rem" }}
                                        h={{ base: "1.5rem", lg: "2rem" }}
                                    >
                                        <Image src="/images/herosectionIcon.svg" alt="Mental Health Doctor In Noida" w="100%" h="100%" />
                                    </Box>
                                </Text>
                            </Heading>
                            <Flex justify={"center"} display={{ base: "flex", md: "none" }}>
                                <HeroCarousel />
                            </Flex>
                            {/* Tags Added Here */}
                            <Flex
                                direction={{ base: "column", md: "row" }}
                                gap={{ base: 2, md: 3 }}
                                mt={{ base: 2, md: 0 }}
                                align={{ base: "center", md: "flex-start" }}
                            >
                                <Box bg="#FFF9C4" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="bold">
                                    Completely Confidential
                                </Box>
                                <Box bg="#F7E5E4" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="bold">
                                    Outcome-Focused
                                </Box>
                                <Box bg="#DCE7F7" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="bold">
                                    Qualified Therapists
                                </Box>
                            </Flex>
                            <Text
                                color="#434343"
                                fontSize={{ base: "sm", md: "18px" }}
                                mt={{ base: 2, md: 4 }}
                                textAlign={{ base: 'center', lg: "start" }}
                                lineHeight={{ base: "24px", md: "28px" }}
                                px={{ base: 2, md: 0 }}
                            >
                                {/* {content?.HeroPara} */}
                                We support teenagers, adults, and families in their recovery from mental illness– Metamind is here to help.
                                If you’re searching for a trusted mental health clinic in Noida, reach out to us.
                            </Text>
                            <Flex justify={{ base: "center", lg: "start" }} mt={{ base: 4, md: 6 }}>
                                <CustomButton
                                    width={buttonWidth}
                                    size={buttonSize}
                                    onClick={() => setIsOpen(true)}  // Add this to open the modal
                                >
                                    Book Appointment
                                </CustomButton>
                                <AppointmentModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                            </Flex>
                        </Box>
                    </Flex>
                </Box>

                <Flex justify={"center"} display={{ base: "none", md: "flex" }}>
                    <HeroCarousel />
                </Flex>
            </Grid>
        </Box>
    );
});

export default HeroSection;
