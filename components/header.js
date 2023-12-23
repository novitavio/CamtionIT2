import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Image, Text, StatusBar } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ withBack = false }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const insets = useSafeAreaInsets();

  const getTitle = () => {
    const routeName = route.name;
    switch (routeName) {
      case "Home":
        return "Home";
      default:
        return routeName;
    }
  };

  return (
    <SafeAreaView edges={['right', 'left', 'top']}>
      <StatusBar barStyle="dark" backgroundColor={"black"} />
      <Box p={"4"} backgroundColor={"#042564"} shadow={"9"}>
        <HStack alignItems="center" justifyContent={"space-between"}>
          <HStack>
            <Image
              source={require("../assets/camtionIT2.png")}
              resizeMode="contain"
              w="7"
              h="7"
              alt="Camtion IT"
              mr={"1"}
            />
            <Text fontSize={"lg"} color={"white"}>
              CamtionIT
            </Text>
            {!withBack && (
              <Text fontSize={"lg"} fontWeight={"bold"} color={"white"} ml={"2"}>
                {getTitle()}
              </Text>
            )}
          </HStack>
          <HStack alignItems="center" justifyContent={"flex-end"}>
            <Image
              source={require("../assets/profile.png")}
              resizeMode="contain"
              w="7"
              h="7"
              alt="Profil Logo"
              mr={"1"}
              borderRadius={"full"}
            />
            {withBack && (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"} bg={"#9A1314"} borderRadius={"lg"}>
                  <HStack>
                    <Ionicons
                      name="chevron-back-outline"
                      size={25}
                      color="white"
                    />
                    <Text fontSize={"20"} fontWeight={"bold"} color={"white"}>
                      Back
                    </Text>
                  </HStack>
                </Box>
              </TouchableOpacity>
            )}
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;