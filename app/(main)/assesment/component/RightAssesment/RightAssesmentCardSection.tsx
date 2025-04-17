import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";

const AssessmentGrid = ({ cards, isMobile, isTablet }) => {  
  return (  
    <Flex position="relative" direction="column" h="100%">  
      <Grid   
        templateColumns={{ 
          base: "1fr", 
          md: isTablet ? "1fr" : "1fr 1fr", 
          lg: "1fr 1fr" 
        }}   
        gap={4}   
        maxH={{ base: "auto", md: "36rem" }}   
        overflowY={{ base: "visible", md: "auto" }}  
        css={{  
          '&::-webkit-scrollbar': {  
            width: '4px',  
            display: 'none',  
          },  
          '&::-webkit-scrollbar-track': {  
            width: '6px',  
          },  
          '&::-webkit-scrollbar-thumb': {  
            background: '#E2E8F0',  
            borderRadius: '24px',  
          },  
        }}  
      >  
        {cards?.map((item,index) => (  
          <Box  
            key={index}  
            p={4}  
            pb={5}  
            rounded={"2xl"}  
            _hover={{  
              borderBottom: "2px solid #FFB8B2",  
              shadow: 'lg'  
            }}  
            transition={"all 0.3s ease-in-out"}  
            bg="white"  
          >  
            <Text  
              fontWeight={500}  
              fontSize={{ base: "md", md: "lg" }}  
              transition="color 0.2s ease"  
              noOfLines={3}  
            >  
              {item.title}  
            </Text>  
            <Text   
              fontSize={"sm"}   
              color={"#757575"}   
              my={2}  
              noOfLines={3}  
            >  
              {item.description}  
            </Text>  
            <Button  
              color={"brand.100"}  
              variant={"link"}  
              mt={2}  
              mb={1}  
              fontWeight={500}  
              rightIcon={<ChevronRightIcon />}  
              size={"sm"}  
            >  
              Read More  
            </Button>  
          </Box>  
        ))}  
      </Grid>  
      {/* Fading overlay at bottom - only for desktop */}
      {!isMobile && (
        <Box  
          position="absolute"  
          bottom="0"  
          left="0"  
          right="0"  
          height="100px"  
          background="linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,0) 100%)"  
          pointerEvents="none"  
        />  
      )}
    </Flex>  
  );  
};  

export default AssessmentGrid;