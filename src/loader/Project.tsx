import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";

const ProjectStack = createNativeStackNavigator();

const ProjectNavigator = () => {
  return (
    <ProjectStack.Navigator screenOptions={{ headerShown: false }}>
      <ProjectStack.Screen name="Home" component={Home} />
    </ProjectStack.Navigator>
  );
};

export default ProjectNavigator;
