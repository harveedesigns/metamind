"use client";
import {
    Box,
    Grid,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

// Import all necessary components
import CardComponent2 from "../../../component/common/CardComponent2/CardComponent2";
import CustomSmallTitle from "../../../component/common/CustomSmallTitle/CustomSmallTitle";
import ContactUs from "../../../component/ContactUs/ContactUs";
import FAQ from "../../../component/FAQ/FAQ";
import TestimonialSection from "../../../component/TestimonialSection/TestimonialSection";

// Import landing page specific components
import LandingHeroSection from "./landingHeroSection/landingHeroSection";
import LandingOurValues from "./LandingOurValues/LandingOurValues";
import LandingOurOfferings from "./LandingOurOfferings/LandingOurOfferings";
import LandingProvidersSection from "./LandingProvidersSection/LandingProvidersSection";
import LandingKnowYourself from "./LandingKnowYourself/LandingKnowYourself";
import stores from "../../../store/stores";
import Header from "./header";
import LandingBookCallComponent from "./BookCallComponent/BookCallComponent";
import LandingHowWeWork from "./HowWeWork/HowWeWork";


const cardData2 = [
    {
        image: "/icons/home/therapy1.svg",
        title: "Evidence-Based Success:",
        description:
            "Metamind therapists practice evidence-based therapies. Studies show that 67% of clients see meaningful improvements with evidence-based therapy compared to people who don’t take treatment. Searching for a psychologist in Noida or best psychiatrist in noida who combines science and compassion? You’ll find it here.",
        boldWords: ["see meaningful improvements", "67%", "evidence-based therapy "],
    },
    {
        image: "/icons/home/therapy2.webp",
        title: "Personalization Treatment Plans",
        description:
            "In therapy “one size doesn’t fit all” so we tailor your treatment by taking feedback from you. It helps clients complete treatment & achieve better results, research shows.",
        boldWords: ["one size doesn’t fit all", "taking feedback ", "achieve better results"],
    },
    {
        image: "/icons/home/therapy3.svg",
        title: "Dynamic Progress Monitoring",
        description:
            "We monitor your treatment regularly using standardized tools to ensure you’re always on track. This reduces any setbacks in therapy and helps you see how much you have progressed. Let us guide your journey of finding the best psychotherapist in Noida.",
        boldWords: ["standardized tools", "standardized tools", "progressed"],
    },
];


const LandingPage = observer(() => {
    const [content, setContent] = useState<any>({});
    const {
        companyStore: { getPageContent, companyDetails },
    } = stores;

    useEffect(() => {
        setContent(getPageContent("home") || {});
    }, [companyDetails, getPageContent]);

    return (
        <Box width="100%" overflowX="hidden">
            <Header />

            <VStack align={"stretch"} spacing={0} pt={{ base: "60px", md: "80px" }}>
                {/* Hero Section */}
                <Box id="home" scrollMarginTop="120px" my={{ base: "1rem", md: "2rem" }} >
                    <LandingHeroSection />
                </Box>

                {/* Our Values Section */}
                <Box id="about" scrollMarginTop="60px" my={{ base: "1rem", md: "4rem" }}>
                    <LandingOurValues />
                </Box>

                {/* Our Offerings Section */}
                <Box id="our-services" scrollMarginTop="60px">
                    <LandingOurOfferings />
                </Box>

                {/* Science Behind Our Practice */}
                <Box
                    maxW={{ base: "100%", md: "90%" }}
                    mx="auto"
                    my={{ base: "50px", md: "4rem" }}
                    px={{ base: 3, md: 4 }}
                    scrollMarginTop="60px"
                >
                    <CustomSmallTitle>Science Behind Our Practice</CustomSmallTitle>
                    <Heading
                        textAlign="center"
                        as="h2"
                        fontWeight={400}
                        fontSize={{ base: "20px", md: "36px" }}
                        my={2}
                    >
                        Care that goes{" "}
                        <Text as="span" fontWeight={600}>
                            beyond talking
                        </Text>
                    </Heading>
                    <Text
                        textAlign="center"
                        color="#2C2B2B"
                        fontSize={{ base: "14px", md: "16px" }}
                        lineHeight={{ base: "22px", md: "28px" }}
                        px={{ base: 3, md: 4, lg: 0 }}
                    >
                        We combine science and care to help you achieve better recovery
                    </Text>

                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
                        gap={{ base: 3, md: 5 }}
                        mt={{ base: 4, lg: 10 }}
                        scrollMarginTop="60px"
                    >
                        {cardData2.map((card, index) => (
                            <CardComponent2
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                boldWords={card.boldWords}
                                borderRadius={{
                                    topLeft: index === 0 ? "30px" : "10px",
                                    bottomRight: index === cardData2.length - 1 ? "30px" : "10px",
                                }}
                            />
                        ))}
                    </Grid>
                </Box>

                {/* Providers Section */}
                <Box id="providers" my={{ base: "20px", md: "4rem" }} maxW="90%" mx="auto" scrollMarginTop="60px">
                    <LandingProvidersSection />
                </Box>

                {/*  LandingHowWeWork Section */}

                <Box mt={{ base: "-20px", md: "-100px" }}>
                    <LandingHowWeWork onButtonClick={undefined} />
                </Box>

                {/* Testimonials Section */}
                <Box id="testimonials" scrollMarginTop="60px">
                    <TestimonialSection />
                </Box>

                {/* Book a Call */}
                <Box>
                    <LandingBookCallComponent showText={true} />
                </Box>

                {/* Know Yourself Section */}
                <Box id="know-yourself" scrollMarginTop="60px" my={{ base: "50px", md: "4rem" }} maxW="95%" mx="auto">
                    <LandingKnowYourself />
                </Box>


                {/* FAQ Section */}
                <Box id="faq" scrollMarginTop="60px">
                    <FAQ data={content?.homeFaq || []} />
                </Box>

                {/* Contact Us Section */}
                <Box id="contact-us" scrollMarginTop="80px">
                    <ContactUs />
                </Box>
            </VStack>
        </Box>
    );
});

export default LandingPage;
