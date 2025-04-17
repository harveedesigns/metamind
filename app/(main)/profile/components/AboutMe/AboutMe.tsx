import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const AboutMe = ({ title, paragraphs= [] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box py={6} maxW={{ base: "90%", lg: "85%" }} mx="auto">
      <Heading as="h2" size="lg" fontWeight={600} mb={4}>
        {title}
      </Heading>
      <VStack align="start" spacing={2}>
        {paragraphs?.slice(0, expanded ? paragraphs?.length : 2)?.map((para, index) => (
          <Text key={index} fontSize={{ base: "sm", lg: "15px" }} color="#616161" pr={{ base: 2, lg: 12 }}>
            {para}
          </Text>
        ))}
      </VStack>
      {paragraphs.length > 2 && (
        <Button mt={4} color="brand.100" variant="link" onClick={() => setExpanded(!expanded)}>
          {expanded ? "HIDE →" : "READ MORE →"}
        </Button>
      )}
    </Box>
  );
};

export default AboutMe;
