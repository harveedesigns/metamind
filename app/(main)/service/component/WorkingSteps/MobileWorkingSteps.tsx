import { Box, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import CustomCarousel from "../../../../component/common/CustomCarousal/CustomCarousal";
import { dummyStepData, StepData } from "./utils/constant";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";

interface Props {
  activeStep: StepData;
  activeBg: string;
  onStepClick: (step: StepData) => void;
}

const MobileWorkingSteps = ({ activeStep, activeBg, onStepClick }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
    onStepClick(dummyStepData[newIndex]);
  };

  useEffect(() => {
    const index = dummyStepData.findIndex((step) => step.id === activeStep.id);
    setCurrentSlide(index);
  }, [activeStep]);

  return (
    <Box position="relative" px={{ base: 2, md: 8 }} py={{ base: 4, md: 8 }}>
      <CustomCarousel
        autoplay={true}
        showArrows={false}
        slidesToShow={1}
        dots={false}
        beforeChange={handleBeforeChange}
        infinite={true}
      >
        {dummyStepData.map((step) => (
          <Box
            key={step.id}
            px={{ base: 4, md: 10 }}
            py={{ base: 4, md: 6 }}
            borderRadius="lg"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="full"
          >
            {/* Video with frame outline */}
            <Box
              position="relative"
              w="full"
              maxW={{ base: "100%", md: "600px" }}
              mb={{ base: 4, md: 6 }}
            >
              {/* Frame Outline Image */}
              <Box
                as="img"
                src="/images/service/frameoutline.png"
                alt="Phone Frame"
                position="absolute"
                top="-1"
                left="0"
                width="100%"
                height="102%"
                zIndex="2"
                pointerEvents="none"
              />

              {/* Video Content */}
              <video
                key={step.id}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              >
                <source src={step.imageUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Top Left Decorations */}
              <Box
                position="absolute"
                top="10%"
                left="-4%"
                width="4%"
                height="6%"
                bg={activeBg}
                borderLeftRadius="full"
              />
              <Box
                position="absolute"
                top="20%"
                left="-9%"
                width="9%"
                height="6%"
                bg={activeBg}
                borderLeftRadius="full"
              />

              {/* Bottom Right Decorations */}
              <Box
                position="absolute"
                bottom="20%"
                right="-9%"
                width="9%"
                height="6%"
                bg={activeBg}
                borderRightRadius="full"
              />
              <Box
                position="absolute"
                bottom="10%"
                right="-4%"
                width="4%"
                height="6%"
                bg={activeBg}
                borderRightRadius="full"
              />
            </Box>
            {/* Custom Dots */}
            <HStack
              justify="center"
              mt={{ base: 4, md: 6 }}
              spacing={2}
              width="full"
              mb={5}
            >
              {dummyStepData.map((_, index) => (
                <Box
                  key={index}
                  h="4px"
                  w={index === currentSlide ? "24px" : "12px"}
                  bg={index === currentSlide ? "blue.500" : "gray.300"}
                  borderRadius="full"
                  transition="all 0.4s ease"
                />
              ))}
            </HStack>

            {/* Text */}
            <Text fontSize={{ base: "sm", md: "xl" }} mb={2}>
              {step.stepNumber}: {step.title}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} maxW="700px">
              {step.description}
            </Text>
            <CustomButton mt={4}> Start with a free Asessment</CustomButton>
          </Box>
        ))}
      </CustomCarousel>


    </Box>
  );
};

export default MobileWorkingSteps;
