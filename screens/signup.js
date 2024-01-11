import React, {useState} from "react";
import { Image, Text, Input, Box, Button, View, Center, Pressable, Icon, } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { registerUser } from "../actions/AuthAction";

const SignUp = ({  }) => {
  const [nama, setNama] = useState("");
  const [ttl, setTTL] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation();

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (nama && ttl && nohp && email && password) {
      const data = {
        nama: nama,
        ttl : ttl, 
        nohp : nohp,
        email: email,
        password: password,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        navigation.replace("Login");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
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
        <View mx={"10"} my={"auto"} p={4} bgOpacity={0.8} bg={"white"} borderRadius={10} shadow={5}>
          <Box mb={"5"} textAlign="center">
            <Text bold={true} fontSize={18} textAlign={'center'}>
              Sign Up
            </Text>
            <Text fontWeight={"light"} fontSize={15} mb={"1"}>
              Please enter your data to create an account
            </Text>
          </Box>
          {/* <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Full name:
            </Text>
            <Input placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#0E4BBE"} />
          </Box> */}
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Username:
            </Text>
            <Input value={nama} onChangeText={(nama) => setNama(nama)} placeholder="tulis nama kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#0E4BBE"} />
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Tempat/Tanggal Lahir
            </Text>
            <Input value={ttl} onChangeText={(ttl) => setTTL(ttl)} placeholder="tulis tempat dan tanggal lahir kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#0E4BBE"} />
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              No Handphone
            </Text>
            <Input value={nohp} onChangeText={(nohp) => setNohp(nohp)} placeholder="tulis nomor handphone kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#0E4BBE"} />
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Email:
            </Text>
            <Input value={email} onChangeText={(email) => setEmail(email)} placeholder="tulis email kamu" borderRadius={"5"} w="100%" borderWidth={1.5} borderColor={"#0E4BBE"} />
          </Box>
          <Box mb={"5"}>
            <Text bold={true} fontSize={18} mb={"1"}>
              Password:
            </Text>
            <Input
              value={password}
              onChangeText={(password) => setPassword(password)}
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
              placeholder="Password"
            />
          </Box>
          <Center>
            <Button onPress={() => navigation.navigate("Home")} w={"150"} h={"38"} my={"3"} bg={"#0E4BBE"} borderRadius={"5"}>
              <Text color={"white"} bold={true} fontSize={14} textAlign={'center'}>
                Sign Up
              </Text>
            </Button>
          </Center>
        </View>
      </Center>
      

    </>
  );
};

export default SignUp;