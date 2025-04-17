import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Image, Tag, Text, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ServiceOffering {
  id: number;
  imageUrl: string;
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  bg: string;
  coverImage: string;
}

interface ServiceOfferingCardProps {
  service: ServiceOffering;
}

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ServiceOfferingCard = ({ service }: ServiceOfferingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const handleToggle = () => {
    if (isMobile) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <MotionBox
      shadow="xl"
      rounded="2xl"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      h="350px" // 🔥 Ensures same height for all cards
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleToggle}
      initial={{ scale: 1 }}
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Image Section */}
      <Box position="relative" h="180px" >
        <MotionImage
          src={service.coverImage}
          h="100%"
          w="100%"
          objectFit="cover"
          rounded="2xl"
          position="absolute"
          top="0"
          left="0"
          opacity={isHovered || isClicked ? 1 : 0}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        <MotionBox
          p={5}
          bg={service.bg}
          rounded="2xl"
          h="100%"
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered || isClicked ? 0 : 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Flex justify="space-between">
            <Image alt="service icon" boxSize="40px" src={service.imageUrl} />
            <Tag mt={1}  fontSize="xs" fontWeight={600} h="fit-content" py={1} px={2} rounded="full" bg="white">
              {service.tag}
            </Tag>
          </Flex>
          <Text fontSize="20px" mt={10} fontWeight={600}>
            {service.title}
          </Text>
        </MotionBox>
      </Box>

      {/* Description & Button - Fixed Layout */}
      <Flex flex="1" direction="column" p={5} color="#4D4D4D" fontSize="sm">
        <Text noOfLines={3} overflow="hidden" textOverflow="ellipsis">
          {service.description}
        </Text>

        <Box mt="auto">
          <Button fontWeight={600} variant="link" color="brand.100" rightIcon={<ChevronRightIcon />}>
            {service.buttonText}
          </Button>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default ServiceOfferingCard;
