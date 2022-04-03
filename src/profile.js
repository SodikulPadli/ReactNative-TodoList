import * as React from 'react';
import { Text, Box, Image, View, Pressable } from 'native-base';

export default function Profile({ navigation }) {
  return (
    <Box bg="warning.200" flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image
        size={150}
        resizeMode={'contain'}
        borderRadius={450}
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
      />
      <View marginTop={5}>
        <Text fontSize={20} textAlign="center" color="black">
          Muhamad Sodikul Padli
        </Text>
      </View>
      <Pressable
        onPress={() => navigation.navigate('schedule')}
        style={{
          backgroundColor: '#f9f9f9',
          margin: 20,
          borderRadius: 10,
          width: '90%',
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text color={{ color: 'gray' }}>Your Schedule</Text>
      </Pressable>
    </Box>
  );
}
