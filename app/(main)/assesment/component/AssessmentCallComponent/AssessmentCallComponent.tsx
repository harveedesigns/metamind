import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import AppointmentModal from "../../../../component/common/AppointmentModal/AppointmentModal";

const AssessmentCallComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage modal open/close state


  return (
    <Box bg={"#FFF1F0"} position="relative" overflow="hidden">
      <Image
        src="images/shape1.png"
        transform={"scaleX(-1)"}
        w={["5rem", "10rem", "12rem"]}
        h={["4rem", "8rem", "10rem"]}
        position={"absolute"}
        right={"0"}
        top={"0"}
        alt="best psychologist in greater noida"
      />
      <Box
        bgGradient={"linear(to-r, #045B64, #066D77)"}
        py={["2rem", "3rem"]}
        px={{ base: "1rem", md: "2rem", lg: "7.5rem" }}
        color={"#FFFFFF"}
      >
        <Text textAlign={"center"} fontSize={["14px", "16px", "18px"]}></Text>
        <CustomSmallTitle textAlign={{ base: "center" }}>
          Need Help Choosing the Right Test?
        </CustomSmallTitle>
        <Text textAlign={"center"} fontSize={["12px", "14px", "18px"]} px={6}>
          Let our experts guide you.
        </Text>
        <Center>
          <Button
            bg={"#FFB8B2"}
            color={"black"}
            fontWeight={500}
            h={["40px", "45px", "52px"]}
            w={["120px", "140px", "170px"]}
            mt={4}
            shadow={"xl"}
            fontSize={["12px", "14px", "16px"]}
            _hover={{ bg: "#FFB8B2", transform: "scale(1.05)" }}
            onClick={() => setIsOpen(true)} // Set state to open modal
          >
            Send an enquiry
          </Button>
          {/* Appointment Modal now uses the isOpen state */}
          <AppointmentModal
            isOpen={isOpen} // Corrected: Modal uses isOpen state to control visibility
            onClose={() => setIsOpen(false)} // Set state to false to close modal
          />
        </Center>
      </Box>
      <Image
        src="images/shape1.png"
        w={["5rem", "10rem", "12rem"]}
        h={["4rem", "8rem", "10rem"]}
        position={"absolute"}
        left={"0"}
        bottom={"0"}
        alt="Mental Health Doctor In Noida"
      />
    </Box>
  );
};

export default AssessmentCallComponent;
