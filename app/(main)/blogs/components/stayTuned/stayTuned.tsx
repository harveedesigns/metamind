import {
    Box,
    Flex,
    Grid,
    Heading,
    HStack,
    Image,
    Input,
    Text,
    useBreakpointValue,
    VStack,
} from "@chakra-ui/react";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
  
  const StayTune = () => {
    const buttonHeight = useBreakpointValue({ base: "40px", lg: "50px" });
  
    return (
      <Box p={{ base: 4, md: 8 }}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          alignItems="center"
          gap={{ base: 8, md: 6 }}
        >
          {/* Left Section */}
          <VStack align="flex-start" spacing={3} w="100%">
            <CustomSmallTitle>Stay Inspired</CustomSmallTitle>
  
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="600"
              color="#000"
              lineHeight="1.3"
            >
              Subscribe for Expert Guidance
            </Heading>
  
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              Explore helpful articles, upcoming events, and resources{" "}
              <Box as="br" display={{ base: "none", md: "block" }} />
              to support your mental health journey.
            </Text>
  
            <HStack
              spacing={3}
              w="100%"
              mt={{base:2,lg:6}}
              flexWrap="wrap"
              justify={{ base: "flex-start", md: "flex-start" }}
            >
              <Input
                placeholder="Enter Your Email"
                bg="white"
                border="1px solid #ccc"
                _focus={{ borderColor: "#065F68" }}
                h={buttonHeight}
                borderRadius="8px"
                flex="1"
                minW={{ base: "100%", md: "60%" }}
              />
              <CustomButton
                height={buttonHeight}
                borderRadius="8px"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/metamindhealth/",
                    "_blank"
                  )
                }
                px={{ base: 4, md: 6 }}
              >
                Subscribe Us
              </CustomButton>
            </HStack>
          </VStack>
  
          {/* Right Section - Image */}
          <Flex
            justify={{ base: "center", md: "flex-end" }}
            mt={{ base: 6, md: 0 }}
          >
            <Image
              src="images/blogs/stayillustration.png"
              alt="best child psychologist in noida"
              h={{ base: "200px", md: "100%", lg: "320px" }}
              objectFit="cover"
              blendMode="multiply"
            />
          </Flex>
        </Grid>
      </Box>
    );
  };
  
  export default StayTune;
  