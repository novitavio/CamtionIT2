import React from 'react';
import { Image, ScrollView } from 'react-native';
import { NativeBaseProvider, Box, Text } from 'native-base';
import Header from '../components/header';

const Separator = () => (
  <Box height={10} backgroundColor="white" marginBottom={5} />
);

const Jurusan = () => {
  const dataJurusan = [
    {
      nama: 'Sistem Informasi',
      deskripsi: 'Jurusan Sistem Informasi fokus pada integrasi teknologi informasi dalam konteks bisnis dan organisasi. Mahasiswa mempelajari pengembangan sistem informasi untuk mendukung kebutuhan perusahaan, termasuk analisis kebutuhan, desain, dan implementasi solusi berbasis IT.',
    //   gambar: require('../assets/si.jpg'),
    },
    {
      nama: 'Teknik Informatika',
      deskripsi: 'Teknik Informatika mencakup desain, pengembangan, dan implementasi perangkat lunak dan perangkat keras. Mahasiswa memahami prinsip dasar teknologi informasi, algoritma, pemrograman, dan arsitektur komputer.',
    //   gambar: require('../assets/teknologi-informasi.png'),
    },
    {
      nama: 'Teknologi Informasi',
      deskripsi: 'Jurusan ini menggabungkan aspek teknologi informasi dengan fokus pada aplikasinya dalam dunia bisnis. Mahasiswa mempelajari penerapan praktis teknologi informasi untuk mendukung operasi bisnis dan pengambilan keputusan.',
    //   gambar: require('../assets/teknik-informatika.png'),
    },
    {
      nama: 'Rekaya Perangkat Lunak',
      deskripsi: 'Rekayasa Perangkat Lunak berkaitan dengan pengembangan perangkat lunak dengan pendekatan sistematis dan terukur. Mahasiswa memahami siklus hidup pengembangan perangkat lunak, dari analisis kebutuhan hingga pemeliharaan.',
    //   gambar: require('../assets/rekayasa-perangkat-lunak.png'),
    },
    {
      nama: 'Sains Data',
      deskripsi: 'Sains Data mencakup analisis data besar untuk mengidentifikasi tren, pola, dan wawasan yang dapat mendukung pengambilan keputusan. Mahasiswa mempelajari statistika, pembelajaran mesin, dan teknik analisis data.',
    //   gambar: require('../assets/sd.png')
    },
    {
      nama: 'Bisnis Digital',
      deskripsi: 'Jurusan Bisnis Digital membahas konsep dan aplikasi transformasi digital dalam konteks bisnis. Mahasiswa memahami penerapan teknologi untuk meningkatkan efisiensi dan menciptakan nilai bisnis.',
    //   gambar: require('../assets/db.png'),
    },
  ];

  return (
    <NativeBaseProvider>
      <Box flex={1} px={1}>
        <Header />
        <ScrollView>
          <Box
            backgroundColor="#add8e6"
            padding={1}
            marginLeft={-2}
            marginRight={-2}
          >
            {dataJurusan.map((jurusan, index) => (
              <Box key={index}>
                <Box flexDirection="row" alignItems="center" marginBottom={5}>
                  <Image
                    source={jurusan.gambar}
                    style={{
                      width: 100,
                      height: 100, 
                      borderRadius: 8,
                      marginRight: 16,
                    }}
                  />
                  <Box flex={1} justifyContent="space-between">
                    <Text fontSize={18} fontWeight="bold" marginBottom={6}>
                      {jurusan.nama}
                    </Text>
                    <Text fontSize={14} color="brown">
                      {jurusan.deskripsi}
                    </Text>
                  </Box>
                </Box>
                {index !== dataJurusan.length - 1 && <Separator />}
              </Box>
            ))}
          </Box>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

export default Jurusan;