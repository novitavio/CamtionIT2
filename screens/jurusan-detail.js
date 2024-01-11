import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, NativeBaseProvider, ScrollView, Box } from 'native-base';
import Header from '../components/header';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const JurusanDetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <Header marginTop={-2} marginBottom={5} />
        <ScrollView>
          <View style={{ flex: 1, padding: 16 }}>
            <Image
              source={item.gambar}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 10,
                marginBottom: 16,
              }}
            />
            <Card
              bg="#042564"
              padding={5}  
              borderRadius={15}
              boxShadow={5}
              flex={1}  
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 10, textAlign: 'center', marginLeft:2,}}>
                {item.nama}
              </Text>
              <Text style={{ fontSize: 13, color: 'white', marginBottom: 16, textAlign: 'auto', marginRight: 10, marginLeft: 2, }}>
                {item.deskripsi}
              </Text>
              <TouchableOpacity
              onPress={() => navigation.goBack("Jurusan")}  // Use navigation.goBack() here
              activeOpacity={0.7}
              style={{ position: 'absolute', bottom: 10, right: 10 }}
            >
              <Box bg={'white'} padding={2} borderRadius={3} mr={2} ml={2} flex={1}>
                <Text style={{ color: '#042564', textAlign: 'center' }}>Back</Text>
              </Box>
            </TouchableOpacity>
            </Card>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};



export default JurusanDetail;