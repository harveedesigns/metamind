import {
  Box,
  Flex,
  FlexProps,
  Heading,
  Image,
  Text,
  TextProps,
  useBreakpointValue
} from "@chakra-ui/react";
import CustomButton from "../common/CustomButton/CustomButton";

const TherapistHeroSection = ({ onButtonClick }: { onButtonClick: () => void }) => {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });
  const buttonWidth = useBreakpointValue({ base: "7rem", md: "9rem", lg: "160px" });
  const headingSize = useBreakpointValue({ base: "2xl", md: "2xl", lg: "3rem" });

  // Responsive layout adjustments
  const flexDirection: FlexProps["flexDirection"] = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const textAlign: TextProps["textAlign"] = useBreakpointValue({
    base: "center",
    md: "start",
  });

  return (
    <Box
      maxW={"95%"}
      mx="auto"
      p={{ base: 4, md: 6, lg: 8 }}
      bg="#FFF3F2"
      borderTopLeftRadius="2.5rem"
      borderBottomRightRadius="2.5rem"
    >
      <Flex
        direction={flexDirection}
        justify="space-between"
        align="center"
        gap={{ base: 4, md: 6 }}
      >
        {/* Left Content */}
        <Box 
          py={{ base: 3, lg: 6 }} 
          pl={{ base: 0, md: 6, lg: 12 }} 
          textAlign={textAlign}
          maxW={{ md: "50%" }}
        >
          <Heading as="h1" fontSize={headingSize} mt={1} fontWeight={400}>
            The right therapist makes <br />
            <Text as="span" fontWeight="bold">All the difference</Text>
          </Heading>
          <Box display={{ base: "none", md: "block" }} justifyContent="center" mt={{ base: 4, md: 6 }}>
            <CustomButton onClick={onButtonClick} width={buttonWidth} size={buttonSize}>
              Get Started
            </CustomButton>
          </Box>
        </Box>

        {/* Right Image Section */}
        <Box>
          <Flex gap={4} align="center" wrap="wrap">
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Box
                w={{ base: "5rem", md: "6rem", lg: "7rem" }}
                h={{ base: "6rem", md: "7rem", lg: "7.5rem" }}
                bg="#065F68"
                mb={3}
                borderTopRightRadius="2rem"
                borderBottomLeftRadius="2rem"
              />
              <Box
                w={{ base: "5rem", md: "6rem", lg: "7rem" }}
                h={{ base: "5rem", md: "6rem", lg: "7rem" }}
                bg="#FFB8B29C"
                borderTopLeftRadius="2rem"
                borderBottomRightRadius="2rem"
              />
            </Box>

            <Image
              src="/images/therapistHeroImage.png"
              alt="Best Psychiatrists In Noida"
              h={{ base: "12rem", md: "14rem", lg: "16rem" }}
              objectFit="cover"
              borderTopLeftRadius="2rem"
              borderBottomRightRadius="2rem"
              ml={{ base: 0, md: "-0.5rem" }}
            />
          </Flex>
        </Box>
      </Flex>      
    </Box>
  );
};

export default TherapistHeroSection;
