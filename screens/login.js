import React from "react";
import { Image, Text, Input, Box, Button, View, Center, Pressable, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Form = () => {
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Perform login logic here

    // Navigate to the main screen (tab screen) after successful login
    navigation.navigate("Home");
  };

  const handleLogout = () => {
    // Perform logout logic here
    console.log("Logout clicked");

    // Navigate to the login screen after successful logout
    navigation.navigate("Login");
  };

  return (
    <>
      <Image
        source={require("../assets/cover.png")} // Replace with the path to your background image
        alt="background"
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
      />
      <Center flex={1}>
        <View mx={"10"} my={"auto"}>
          <Center my={"7"}>
            <Image source={require("../assets/camtionIT.png")} alt="photo" w={"300"} h={'100'} />
          </Center>
        </View>
        <View mx={"10"} mt={"4"} my={"auto"} p={4} bgOpacity={0.8} bg={"white"} borderRadius={10} shadow={5}>
          <Box mb={"5"} textAlign="center">
            <Text bold={true} fontSize={18} textAlign={'center'}>
              Sign In
            </Text>
            <Text fontWeight={"light"} fontSize={15} mb={"1"}>
              Enter your registered email address and password to log in
            </Text>
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Email:
            </Text>
            <Input placeholder="Enter your email" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#0E4BBE"} />
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Password:
            </Text>
            <Input
              borderWidth={1.5}
              borderColor={"#0E4BBE"}
              w={{
                base: "100%",
              }}
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} size={5} mr="2" color="#0E4BBE" />
                </Pressable>
              }
              placeholder="Enter your password"
            />
          </Box>
          <Center>
            <Button onPress={handleLogin} w={"150"} h={"38"} my={"3"} bg={"#0E4BBE"} borderRadius={"5"}>
              <Text color={"white"} bold={true} fontSize={14} textAlign={'center'}>
                Sign In
              </Text>
            </Button>
          </Center>
        </View>
        <Center>
          <Pressable onPress={handleLogout}>
            <Text color="#0E4BBE" fontSize={16} fontWeight="bold" mt={4}>
              Logout
            </Text>
          </Pressable>
        </Center>
      </Center>
    </>
  );
};

export default Form;
