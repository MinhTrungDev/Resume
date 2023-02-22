import { NavigationContainer } from "@react-navigation/native";
import { Box, NativeBaseProvider } from "native-base";
import ProjectNavigator from "./src/loader/Project";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box bg="transparent" flex="1" pt="50px">
          <ProjectNavigator />
        </Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
