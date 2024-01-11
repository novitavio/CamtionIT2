import React, { useState }  from "react";
import { Image, Text, Input, Box, Button, View, Center, Pressable, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { loginUser } from "./actions/AuthAction";
import { loginUser } from "../actions/AuthAction";

const Login = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [show, setShow] = React.useState(false);
    const navigation = useNavigation();
  
    const toggleAlert = (message) => {
      setShowAlert(!showAlert);
      setAlertMessage(message);
    };
  
    const login = () => {
      if (email && password) {
        loginUser(email, password)
          .then((user) => {
            // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
            navigation.replace("Tabs");
          })
          .catch((error) => {
            // Terjadi kesalahan saat login, tampilkan pesan kesalahan
            console.log("Error", error.message);
            toggleAlert(error.message);
          });
      }
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
          <Box mb={"5"} textAlign="center" >
            <Text bold={true} fontSize={18} textAlign={'center'}>
              Login
            </Text>
            <Text fontWeight={"light"} fontSize={15} mb={"1"}>
              Enter your registered email address and password to log in
            </Text>
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Email 
            </Text>
            <Input
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Enter your email"
              borderRadius={"5"}
              w="100%"
              borderWidth={1.5}
              borderColor={"#0E4BBE"}
            />
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Password
            </Text>
            <Input
              onChangeText={(text) => setPassword(text)}
              value={password}
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
            <Button w={"150"} h={"38"} my={"3"} bg={"#0E4BBE"} borderRadius={"5"} onPress={() => navigation.navigate("Home")}>
              <Text color={"white"} bold={true} fontSize={14} textAlign={'center'}  >
                Login
              </Text>
            </Button>
          </Center>
        </View>
        <Center>
          <Pressable >
            <Text color="#0E4BBE" fontSize={16} fontWeight="bold" mt={4}>
              Logout
            </Text>
          </Pressable>
        </Center>
      </Center>
    </>
  );
};

export default Login;