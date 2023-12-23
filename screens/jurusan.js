import React from 'react';
import { Image, ScrollView } from 'react-native';
import { NativeBaseProvider, Box, Text } from 'native-base';
import Header from '../components/header';


const JurusanCard = ({ jurusan }) => (
  <Box
    marginBottom={5}
    backgroundColor="#042564" 
    borderRadius={8}
    padding={4}
    shadow={2}
  >
    <Box flexDirection="row" alignItems="center">
      <Image
        source={jurusan.gambar}
        style={{
          width: 120, 
          height: 120, 
          borderRadius: 8,
          marginRight: 10,
        }}
      />
      <Box flex={1}>
        <Text fontSize={16} fontWeight="bold"    marginBottom={2} color="white">
          {jurusan.nama}
        </Text>
        <Text fontSize={11} color="white" textAlign="justify"  marginBottom={2}>
          {jurusan.deskripsi}
        </Text>
      </Box>
    </Box>
  </Box>
);

const Jurusan = () => {
  const dataJurusan = [
    {
      nama: 'Sistem Informasi',
      deskripsi: 'Memfokuskan pada pengembangan sistem informasi dan analisis bisnis. Mahasiswa dapat menjadi analis bisnis atau pengembang perangkat lunak setelah lulus.',
      gambar: require('../assets/si.png'),
    },
    {
      nama: 'Rekayasa Perangkat Lunak',
      deskripsi: 'Menekankan pengembangan perangkat lunak, melibatkan desain, pengujian, dan manajemen proyek. Mahasiswa siap menjadi pengembang perangkat lunak atau engineer TI.',
      gambar: require('../assets/rpl.png'),
    },
    {
      nama: 'Teknik Informatika',
      deskripsi: 'Fokus pada pengembangan perangkat lunak, jaringan, dan sistem informasi. Mahasiswa mempelajari teknologi untuk karir sebagai pengembang perangkat lunak atau ahli jaringan',
      gambar: require('../assets/teknik.png'),
    },
    {
      nama: 'Teknologi Informasi',
      deskripsi: 'Fokus pada penerapan teknologi dalam bisnis, melibatkan manajemen sistem dan keamanan informasi untuk mempersiapkan mahasiswa sebagai profesional TI.      ',
      gambar: require('../assets/teknologi.png'),
    },
    {
      nama: 'Sains Data',
      deskripsi: 'Memanfaatkan analisis data dan pembelajaran mesin untuk pengambilan keputusan. Mahasiswa dilatih dalam statistik dan pemrograman untuk menjadi ahli analisis data.',
      gambar: require('../assets/sd.png')
    },
    {
      nama: 'Bisnis Digital',
      deskripsi: 'Menerapkan teknologi digital untuk operasi dan pemasaran bisnis. Mahasiswa mempelajari strategi online dan analisis data.',
      gambar: require('../assets/bd.png'),
    },
    {
      nama: 'Teknik Telekomunikasi',
      deskripsi: 'Fokus pada desain dan manajemen sistem komunikasi, termasuk jaringan dan transmisi data. Mahasiswa mempersiapkan diri untuk karir di bidang teknologi telekomunikasi.',
      gambar: require('../assets/tt.png'),
    },
    {
      nama: 'Teknik Komputer',
      deskripsi: 'Fokus pada perancangan dan pemeliharaan perangkat keras komputer. Mahasiswa mempelajari arsitektur dan pemrograman untuk karir di pengembangan perangkat keras atau teknisi komputer.',
      gambar: require('../assets/tk.png'),
    },
    {
      nama: 'Sistem Komputer',
      deskripsi: 'Desain, pengembangan, dan pemeliharaan perangkat keras dan perangkat lunak. Mahasiswa siap karir di pengembangan teknologi atau administrasi sistem.',
      gambar: require('../assets/sk.png'),
    },
    {
      nama: 'Teknik Elektro',
      deskripsi: 'Fokus pada pengembangan, desain, dan pemeliharaan perangkat elektronik. Mahasiswa siap untuk karir di desain, instalasi, atau pemrograman perangkat elektronik.',
      gambar: require('../assets/te.png'),
    },
  ];

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