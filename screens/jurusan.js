import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { NativeBaseProvider, Box, Text, VStack } from 'native-base';
import Header from '../components/header';
import { TouchableOpacity } from 'react-native';
import dataJurusan from '../jurusans'; 
import { useNavigation } from '@react-navigation/native';

const JurusanCard = ({ jurusan }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      onPress={() => navigation.navigate("Detail Jurusan", { item: jurusan })}
    >
      <View mx={"5"} my={"3"}>
        
        <Box mt={"2"} bg={"#042564"} w={"full"} h={"auto"} borderBottomRadius={"8"} shadow={"5"} flexDirection={"row"}>
        <Image
            source={jurusan.gambar}
            style={{
              width: 120, 
              height: 120, 
              borderRadius: 5,
              marginTop: 20,
              marginLeft: 5,
              marginRight: 5,
              marginBottom: 10,
            }}
          />
         <VStack flex={1} paddingY={"4"}>
            <Text fontSize={18} fontWeight="bold" ml={3} marginBottom={2} color="white">
              {jurusan.nama}
            </Text>
            <Text fontSize={12} lineHeight={16} color="white" numberOfLines={5} textAlign="justify" mr={2} ml={3}>
              {jurusan.deskripsi}
            </Text>
          </VStack>
        </Box>
      </View>
    </TouchableOpacity>
  );
};

const Jurusan = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} px={1} backgroundColor="white" marginTop={-2}> 
        <Header marginTop={-2} marginBottom={5} />
        <ScrollView>
          {dataJurusan.map((jurusan, index) => (
            <JurusanCard key={index} jurusan={jurusan} />
          ))}
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

export default Jurusan;