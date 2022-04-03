import * as React from 'react';
import { Text, Box, View } from 'native-base';
import { KontenbaseClient } from '@kontenbase/sdk';

// function ShowData(){
// const kontenbase = new KontenbaseClient({ apiKey: '81520b41-f499-4af9-aa58-2996acafcde4' });
// const schedule = await kontenbase.Schedule();
// }
// console.log(schedule);

export default function Schedule() {
  return (
    <Box bg="warning.200" flex={1} alignItems="center" justifyContent="center" p={5}>
      <View marginTop={5}>
        <Text fontSize={20} textAlign="center" color="black">
          Judul
        </Text>
      </View>
      <View marginTop={5}>
        <Text fontSize={20} textAlign="center" color="black">
          Lembaga
        </Text>
      </View>

      <View marginTop={5}>
        <Text fontSize={20} textAlign="center" color="black">
          Deskripsi
        </Text>
      </View>
    </Box>
  );
}
