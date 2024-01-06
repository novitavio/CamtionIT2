import React from 'react';
import { Image, Text, Link, Button, View, Center } from 'native-base';
import { Header } from '../components';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Form = () => {
  const [show, setShow] = useState(false);
  const navigation = useNavigation();

  return (
    <View h={'full'} w={'full'} backgroundColor={'white'}>
      <View mx={'10'} my={'auto'}>
        <Center mb={'25'}>
          <Image source={require('../assets/workspace.png')} alt="photo" w={'180'} h={'180'} mb={'2'} />
          <Text bold={true} fontSize={20} color={'#0E4BBE'}>
            Welcome to CamtionIT
          </Text>
        </Center>
        <Center>
          <Button
            onPress={() => navigation.navigate('Login')}
            w={'100%'}
            h={'38'}
            my={'2'} // Adjust the margin as needed
            bg={'#0E4BBE'}
            borderRadius={20}
            justifyContent={'center'} 
            alignItems={'center'} 
          >
            <Text color={'white'} bold={true} fontSize={14}>
              Login
            </Text>
          </Button>
          <Text fontWeight={'light'} mt={'3'}>
            Don't have an account?
            <Link onPress={() => navigation.navigate('Signup')}>
              Sign Up
            </Link>
          </Text>
        </Center>
      </View>
      <Center mb={'8'} mx={'12'}>
        <Text fontWeight={'light'} textAlign={'center'}>
          By creating an account, you are agreeing to our Terms of Service
        </Text>
      </Center>
    </View>
  );
};

export default Form;
