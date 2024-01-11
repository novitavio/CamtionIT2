import React, {useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, VStack, Image, Text, Pressable, HStack, ScrollView } from "native-base";
import { Header } from "../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { clearStorage,getData } from "../utils";
import FIREBASE from "../config/FIREBASE";

const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState({});
  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  // Mengambil Data dari AsyncStorage
  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      }
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getUserData();
    });
  
    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.navigate("Choose");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.navigate("Login");
    }
  };
  return (
    <>
    
      <Header title="Profile" />

      <ScrollView flex={1} bg={"white"} p={4}>
        <VStack space={4} alignItems="center">
          <Image
            source={require("../assets/foto.png")}
            alt="Profil Logo"
            size={150}
            borderRadius={75}
          />
          <Text fontSize={24} color={"black"} fontWeight="bold">
          {profile.nama || "Default Name"}
          </Text>
        </VStack>

        <VStack space={2} mt={6}>
          <InfoBox label="Email " value={`: ${profile.email}`} />
          <InfoBox label="Tempat/Tanggal Lahir" value={`: ${profile.ttl }`} />
          <InfoBox label="No HP"  value={`: ${profile.nohp}`} />
        </VStack>

        <HStack justifyContent="center" mt={10} space={8}>
          <Pressable onPress={() => handleEditProfile()}>
            <ActionText icon="edit" bgColor="#008000">Edit Profile</ActionText>
          </Pressable>

          <Pressable title={Profile ? "Logout" : "Login"} onPress={() => onSubmit(Profile)}>
            <ActionText icon="sign-out-alt" bgColor="#FF0000">
              Logout
            </ActionText>
          </Pressable>
        </HStack>
      </ScrollView>
    </>
  );
};

const InfoBox = ({ label, value }) => {
  return (
    <Box
      bg={"#042564"}
      p={4}
      borderRadius={8}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Text color={"white"} fontSize={16} fontWeight="bold" flex={1}>
        {label}
      </Text>
      <Text fontSize={16} color={"white"} flex={2}>
        {value}
      </Text>
    </Box>
  );
};

const ActionText = ({ children, icon, bgColor }) => {
  return (
    <HStack bg={bgColor || "#042564"} p={4} borderRadius={8} space={2} alignItems="center">
      {icon && <FontAwesome5 name={icon} size={16} color="white" />}
      <Text color={"white"} fontSize={16} fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

export default Profile;