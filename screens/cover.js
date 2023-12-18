import React from 'react';
import { Image, Text, Button, View, Center } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../components';
import { StyleSheet } from 'react-native';

const Cover = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={{ alignItems: 'center', marginVertical: 100 }}>
        <Image
          source={require("../assets/camtionIT.png")}
          alt="CamtionIT"
          size={'lg'}
          height={100}
          width={400}
        />
      </View>
      <View style={{ justifyContent: 'center', alignContent: 'center', marginBottom: 50 }}>
        <Button
          withBack="true"
          onPress={() => navigation.navigate('Choose')}
          w={'80%'}
          bg={'#0E4BBE'}
          borderRadius={'10'}
          my={50}
          mt={400}
          ml={12}
          rounded={20}
        >
          <Text fontWeight={'bold'} fontSize={'20'} color={'white'} alignItems={'center'}>
            Continue
          </Text>
        </Button>
      </View>
    </Background>
  );
};

export default Cover;
