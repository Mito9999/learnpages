import {
  Heading,
  Box,
  Image,
  Badge,
  Text,
  AspectRatio,
} from "@chakra-ui/react";

type Props = {
  image: string;
  title: string;
  tags: string[];
};

const PageCard = ({ image, title, tags }: Props) => (
  <Box
    borderRadius="20px"
    border="1px solid"
    borderColor="gray.300"
    cursor="pointer"
    _hover={{ transform: "scale(1.03)" }}
    transition="transform 150ms ease"
  >
    <AspectRatio ratio={16 / 9} bg="gray.100" borderTopRadius="20px">
      <Image
        src={image}
        alt={title + " cover image"}
        objectFit="cover"
        borderTopRadius="20px"
        fontSize="0px"
      />
    </AspectRatio>
    <Box p="15px">
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Box my="10px">
        {tags.map((tag: string, i: number) => (
          <Badge key={tag + " tag " + i} w="fit-content" mr="8px">
            {tag}
          </Badge>
        ))}
      </Box>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iste
        fugiat totam voluptatum placeat quis autem ipsam cupiditate esse
        inventore quibusdam, nam quos unde provident dolore modi, nesciunt ea
        delectus dolorum at velit tempora. Excepturi sapiente eaque aliquam
        exercitationem, aspernatur modi natus nostrum magnam perspiciatis
        necessitatibus vitae similique laborum eum.
      </Text>
    </Box>
  </Box>
);

export default PageCard;
