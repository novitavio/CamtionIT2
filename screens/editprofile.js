import React, { useState } from "react";
import { Box, VStack, Input, Button, Text, Spinner, Image } from "native-base";
import { Header } from "../components";
import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";

// Import gambar dari direktori lokal
const profileImage = require("../assets/foto.png");

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("Novita Viomaito");
  const [email, setEmail] = useState("izumiidesu@gmail.com");
  const [birthdate, setBirthdate] = useState("01 Januari 2002");
  const [phone, setPhone] = useState("081234567890");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);

      // Simulate an asynchronous operation (e.g., API request)
      await saveChangesToServer();

      console.log("Save Profile successful");
      navigation.goBack();
      showAlert("Success", "Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      showAlert("Error", "Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Simulated asynchronous operation (replace with your actual API call)
  const saveChangesToServer = async () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000); // Simulate a 1-second delay
    });
  };

  const showAlert = (title, message) => {
    Alert.alert(title, message);
  };

  return (
    <>
      <Header title="Edit Profile" />
      <Box flex={1} p={4} bgColor="white">
        {/* Gunakan gambar lokal */}
        <Image
          source={profileImage}
          alt="Profile Image"
          size="xl"
          rounded="full"
          mb={4}
          alignSelf="center"
        />
        <VStack space={4} alignItems="center">
          <Input
            placeholder="Nama"
            value={name}
            onChangeText={(text) => setName(text)}
            variant="outline"
            bgColor="#042564"
            color="white"
            startIcon={<Feather name="user" size={20} color="white" />} // User icon
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            variant="outline"
            bgColor="#042564"
            color="white"
            startIcon={<Feather name="mail" size={20} color="white" />} // Mail icon
          />
          <Input
            placeholder="Tempat/Tanggal Lahir"
            value={birthdate}
            onChangeText={(text) => setBirthdate(text)}
            variant="outline"
            bgColor="#042564"
            color="white"
            startIcon={<Feather name="calendar" size={20} color="white" />} // Calendar icon
          />
          <Input
            placeholder="No HP"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            variant="outline"
            bgColor="#042564"
            color="white"
            startIcon={<Feather name="phone" size={20} color="white" />} // Phone icon
          />
          <Button
            onPress={handleSave}
            isLoading={loading}
            colorScheme="success"
            _text={{ color: "white" }}
            bgColor="#4CAF50" // Green background for this button
            endIcon={<Feather name="check" size={20} color="white" />} // Check icon
            disabled={loading} // Disable the button while loading
          >
            {loading ? <Spinner color="white" /> : "Simpan Perubahan"}
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default EditProfile;
