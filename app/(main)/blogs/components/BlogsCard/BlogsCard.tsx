import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";

interface BlogCardProps {
  coverImage?: any;
  createdAt?: string;
  subTitle?: string;
  title?: string;
  description?: string;
  tags?: string[];
  otherBlog?: boolean;
  charges?: string;
  slug?:string
}

const BlogsCard: React.FC<BlogCardProps> = ({
  coverImage,
  subTitle,
  createdAt,
  title,
  tags,
  otherBlog,
  charges,
  slug
}) => {
  const router = useRouter();

  // Function to format the date
  const formatDate = (createdAt?: string) => {
    if (!createdAt) return { month: "", day: "", year: "" };

    const date = new Date(createdAt);
    return {
      day: date.getDate().toString(),
      month: date.toLocaleString("en-US", { month: "short" }),
      year: date.getFullYear().toString(),
    };
  };

  const formattedDate = formatDate(createdAt);

  return (
    <Box
      rounded={"16px"}
      borderWidth={1}
      overflow="hidden"
      bg={otherBlog ? "white" : "transparent"}
    >
      <Box position={"relative"}>
        <Image
          src={coverImage?.url}
          h={{ base: "210px", lg: "260px" }}
          objectFit={"cover"}
          alt="best counseling psychologist in Noida"
          rounded={"12px"}
          w={"100%"}
          filter={"brightness(0.7)"}
        />
        {!otherBlog && (
          <Flex position={"absolute"} top={4} left={4} gap={2}>
            {tags &&
              tags.map((tag, index) => (
                <Text
                  key={index}
                  color={"white"}
                  py={1}
                  px={2}
                  rounded={"6px"}
                  fontSize={"sm"}
                  backdropBlur={"lg"}
                  bg={"whiteAlpha.300"}
                  backdropFilter={"blur(10px)"}
                >
                  {tag}
                </Text>
              ))}
          </Flex>
        )}
        {otherBlog ? (
          <Box
            bg={"white"}
            position={"absolute"}
            top={4}
            left={4}
            px={2}
            py={1}
            rounded={"6px"}
          >
            <Text fontSize={"sm"} fontWeight={600} color={"black"}>
              {charges}
            </Text>
          </Box>
        ) : null}
      </Box>

      <Box mt={{ lg: 2 }} p={{ base: 2, lg: 4 }}>
        {otherBlog ? (
          <Flex alignItems={"center"} gap={{ base: 2, lg: 4 }}>
            <Stack spacing={0} alignItems="center">
              <Text
                fontSize={"sm"}
                color="brand.100"
                fontWeight={600}
                fontFamily={"Montserrat, sans-serif"}
              >
                {formattedDate.month}
              </Text>
              <Text fontSize={"2xl"} fontWeight={700}>
                {formattedDate.day}
              </Text>
            </Stack>
            <Stack spacing={1}>
              <Text
                onClick={() =>
                  router.push(`/blogs/${slug}`)
                }
                fontSize={{ base: "18px", lg: "20px" }}
                fontWeight={700}
                noOfLines={2}
                cursor="pointer"
              >
                {title}
              </Text>
              <Text mt={1} dangerouslySetInnerHTML={{ __html: subTitle }} />
            </Stack>
          </Flex>
        ) : (
          <>
            <Text color={"#868080"} fontSize={"xs"}>
              {formattedDate.day} {formattedDate.month}, {formattedDate.year}
            </Text>
            <Text
              cursor="pointer"
              onClick={() =>
                router.push(`/blogs/${slug}`)
              }
              fontSize={{ base: "16px", lg: "20px" }}
              fontWeight={700}
              noOfLines={2}
              mt={1}
            >
              {title}
            </Text>
            <Text mt={1} dangerouslySetInnerHTML={{ __html: subTitle }} />
          </>
        )}
        <Flex justifyContent={"space-between"} alignItems={"center"} mt={2}>
          {otherBlog ? (
            <CustomButton
              onClick={() => router.push("#")} // Event booking page ka URL
              size={{ base: "sm", md: "md" }}
              bg={"brand.100"}
              color={"white"}
              _hover={{ bg: "brand.200" }}
            >
              BOOK NOW
            </CustomButton>
          ) : (
            <Button
              onClick={() =>
                router.push(`/blogs/${slug}`)
              }
              p={"0px"}
              size={{ base: "sm", md: "md" }}
              _hover={{ bg: "transparent", textDecoration: "underline" }}
              color={"brand.100"}
              variant={"ghost"}
              rightIcon={<ArrowForwardIcon />}
            >
              READ MORE
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogsCard;
