import { Box, Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";

const FoundersNote = () => {
  return (
    <Box
      bg="brand.100"
      color="white"
      py={{ base: 8, md: 12, lg: 16 }}
      px={{ base: 4, md: 8, lg: 16 }}
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        alignItems="center"
        gap={{ base: 6, lg: 12 }}
        maxW="6xl"
        mx="auto"
      >
        {/* Text Content */}
        <VStack
          align="start"
          spacing={6}
          textAlign="left"
          pr={{ lg: 8 }}
        >
          <Text
            mt={4}
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="medium"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            From Expert
          </Text>

          {/* Body Text Section */}

          <Text
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            fontFamily="Montserrat, sans-serif"
            letterSpacing="1px"
            lineHeight={{ base: "22px", md: "26px", lg: "34px" }}
            mt={4}
            textAlign={{ base: "left", lg: "left" }}
            fontWeight="thin"
            color="white"
            textTransform="none"
            fontStyle="italic"
          >
            Metamind stands for more than just therapy—it&apos;s about building trust.
            Every therapist here is chosen not just for their qualifications but for their ability to connect with and truly understand our clients.
            Through rigorous advanced training, research and monitoring your progress, we make sure they are always evolving to provide the highest standard of care.
            Our goal is to work with you in every session, helping you take meaningful steps toward a stronger recovery.

            {/* <br /><br />

            Since then, our <Text as={'span'} fontWeight={600}>dedicated team</Text> has been working tirelessly to provide the <Text as={'span'} fontWeight={600}>best possible care</Text> using <Text as={'span'} fontWeight={600}>advanced treatment methods</Text> and <Text as={'span'} fontWeight={600}>scientifically backed practices</Text>. Our goal is to ensure that <Text as={'span'} fontWeight={600}>everyone who walks through our doors</Text> receives the <Text as={'span'} fontWeight={600}>support, guidance, and care they need to heal and thrive</Text>. */}

            <Image
              src="/images/about/apos.png"
              alt="Best Clinical Psychologists in Noida"
              display="inline-block"
              h="28px"
              ml={2}
              mt={{ base: 2, lg: 0 }}
              verticalAlign="middle"
            />
          </Text>

          {/* Footer Section with Founder Name */}
          <Flex direction="column" mt={6} fontSize={{ base: "14px", md: "16px" }} textAlign="start" justify={{ base: "center" }}>
            <Text fontWeight="normal" fontSize={{ base: "16px", md: "18px" }} textAlign={{ base: "left", lg: "start" }}>
              Nikita Bhati
            </Text>
            <Text fontSize={{ base: "12px", md: "14px" }} color="white" textAlign={{ base: "left", lg: "start" }} >
              Founder & Clinical Head <br />
              Clinical Psychologist with 13+ years experience

            </Text>
          </Flex>
        </VStack>

        {/* Image Section */}
        <Box
          position="relative"
          w="100%"
          maxW="350px"
          mx="auto"
        >
          <Image
            src='https://res.cloudinary.com/dekfm4tfh/image/upload/v1743333154/nikita_zjtny0.png'
            alt="Nikita Bhati"
            position="relative"
            zIndex={2}
            borderRadius="lg"
            objectFit={{ base: "contain", lg: "cover" }}
            w="100%"
            h={{ base: "240px", md:"300px",lg: "auto" }}
          // boxShadow="xl"
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default FoundersNote;