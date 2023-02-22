import { Ionicons } from "@expo/vector-icons";
import { Box, Center, HStack, Icon, IconButton } from "native-base";

const Home = () => {
  return (
    <Box flex={"1"} bg="#FAFAFA">
      <HStack justifyContent={"space-between"}>
        <IconButton
          icon={<Icon as={Ionicons} name="menu" color={"black"} size="6" />}
        />
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name="ellipsis-vertical"
              color={"black"}
              size="6"
            />
          }
        />
      </HStack>
      <Box flex="1" bg="#FAFAFA">
        mk
      </Box>
      <Center flex="1" bg="#CBCBCB" borderTopRadius="32">
        knk
      </Center>
    </Box>
  );
};

export default Home;
