import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Grid,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import CustomSubHeading from "../../../../component/common/CustomSubHeading/CustomSubHeading";
import AssessmentGrid from "./RightAssesmentCardSection";
import { assessments } from "./utils/constant";

const RightAssesment = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });

  const handleItemClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <Box maxW={{ base: "100%", lg: "90%", xl: "85%" }} mx={"auto"} my={8} px={{ base: 4, md: 6 }}>
      <Grid templateColumns={{ base: "1fr", md: "1fr", lg: "1fr 1fr" }} gap={{ base: 2, md: 8 }}>
        <Box>
          <CustomSmallTitle textAlign={{ base: "center", lg: "start" }}>OUR VALUES</CustomSmallTitle>
          <CustomSubHeading highlightText="Right Assessment for You" textAlign={{ base: "center", lg: "start" }}>
            Find the
          </CustomSubHeading>
          <Text
            fontWeight={500}
            w={{ base: "100%", lg: "90%" }}
            color="#434343"
            textAlign={{ base: "center", lg: "start" }}
          >
            Choose the purpose of your assessment.
            Click on a category to explore available tests.
          </Text>

          <VStack
            align="start"
            rounded="xl"
            w={{ base: "100%", lg: "85%" }}
            spacing={0}
            mt={4}
          >
            {assessments.map((assessment, index) => (
              <React.Fragment key={index}>
                <Box
                  px={4}
                  py={3}
                  w="100%"
                  borderWidth={1}
                  borderColor={expandedIndex === index ? "#DF837C" : "gray.200"}
                  borderLeftWidth={1}
                  borderRightWidth={1}
                  borderTopWidth={index === 0 ? 1 : 0}
                  borderBottomWidth={index === assessments.length - 1 ? 2 : 0}
                  borderTopRadius={index === 0 ? "xl" : "none"}
                  borderBottomRadius={
                    index === assessments.length - 1 ? "xl" : "none"
                  }
                  transition="all 0.2s ease"
                  _hover={{
                    borderColor: expandedIndex !== index ? "gray.300" : "#DF837C",
                  }}
                >
                  <Box onClick={() => handleItemClick(index)} cursor="pointer">
                    <Text
                      fontWeight={500}
                      fontSize={{ base: "md", md: "lg" }}
                      color={expandedIndex === index ? "inherit" : "#8A8A8A"}
                      transition="color 0.2s ease"
                    >
                      {assessment.title}
                    </Text>
                  </Box>

                  <Box
                    overflow="hidden"
                    maxHeight={expandedIndex === index ? "200px" : "0"}
                    transition="all 0.3s ease"
                  >
                    <Text color="#8A8A8A" fontSize="sm" mt={2}>
                      {assessment.description}
                    </Text>
                    <Text fontSize="sm" mt={2}>
                      Best for: {assessment.bestFor}
                    </Text>
                    <Button
                      color="white"
                      bg={assessment.color}
                      mt={2}
                      mb={1}
                      fontWeight={500}
                      rightIcon={<ChevronRightIcon />}
                      size="sm"
                      _hover={{
                        transform: "translateX(2px)",
                      }}
                      transition="transform 0.2s ease"
                      w={{ base: "100%", md: "auto" }}
                    >
                      Enquire
                    </Button>
                  </Box>
                </Box>
                {index < assessments.length - 1 && (
                  <Divider borderWidth={1} borderColor="gray.200" w="100%" />
                )}
              </React.Fragment>
            ))}
          </VStack>
        </Box>

        {/* Show AssessmentGrid only when an item is selected on mobile/tablet */}
        {(expandedIndex >= 0 || !isMobile) && (
          <Box
            mt={{ base: 6, lg: 0 }}
            display={{ base: expandedIndex >= 0 ? "block" : "none", lg: "block" }}
          >
            <AssessmentGrid
              cards={expandedIndex >= 0 ? assessments[expandedIndex]?.cards : []}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default RightAssesment;