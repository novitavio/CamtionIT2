import React from "react";
import { NativeBaseProvider, Text, Input, HStack, Icon, Box, VStack, View, Image } from "native-base";
import Header from "../components/header";
import { Ionicons } from "@expo/vector-icons";
import { Linking, ScrollView, TouchableOpacity } from "react-native";

const Konsultasi = () => {
	// ADDING DATA BOX FOR EACH CATEGORIES
	const dataCategories = {
		"": [
		  { id: 1, link1: "https://wa.me/083192973492", content1: "Whatshap 1", link2: "https://wa.me/085156644103", content2: "Whatshap 2", image: require("../assets/profile.png") },
		  { id: 2, link1: "https://wa.me/082231704029", content1: "Whatshap 1", link2: "https://wa.me/083192973492", content2: "Whatshap 2", image: require("../assets/profile.png") },
		],
		"Teknik Sipil": [
		  { id: 3, link1: "https://www.github.com", content1: "Whatshap 1", link2: "https://www.figma.com", content2: "Whatshap 2", image: require("../assets/profile.png") },
		  { id: 4, link1: "https://www.facebook.com", content1: "Whatshap 1", link2: "https://www.linkedin.com", content2: "Whatshap 2", image: require("../assets/profile.png") },
		],
		"Teknik Elektronika": [
		  { id: 5, link1: "https://www.github.com", content1: "Whatshap 1", link2: "https://www.figma.com", content2: "Whatshap 2", image: require("../assets/profile.png") },
		  { id: 6, link1: "https://www.facebook.com", content1: "Whatshap 1", link2: "https://www.linkedin.com", content2: "Whatshap 2", image: require("../assets/profile.png") },
		],
		
		
	  };

	  const handleLinkClick = (phone) => {
		const whatsappLink = `whatsapp://send?phone=${phone}`;

		Linking.openURL(whatsappLink);
	};

	return (
		<NativeBaseProvider>
			<Header title={"Izumi"} />

			{/* Wrap the entire content with ScrollView */}
			<ScrollView backgroundColor={"white"} width={"100%"} height={"100%"}>
				<View mx={"7"}>
					{/* Container for Text and Search Bar */}
					<HStack space={2} alignItems="center" marginTop={7} marginLeft={4}>
						{/* Text "Sistem Informasi" */}
						<Text color="black" fontSize={18} bold>
							Sistem Informasi
						</Text>

						{/* Search Bar */}
						<Input placeholder="Search" variant="filled" borderRadius={8} flex={1} py={2} px={4} fontSize={16} borderWidth={2} borderColor="gray.300" InputLeftElement={<Icon size="sm" ml={2} color="gray.400" as={<Ionicons name="search" />} />} />
					</HStack>

					<VStack space={2} marginLeft={1}>
						{/* TO ITERATE OVER THE ENTRIES OF THE dataCategories OVJECT. EACH ENTRY IS AN ARRAY [sectionName, sectionData], WHERE sectionName IS THE NAME OF THE SECTION, AND sectionData IS AN ARRAY OF DATA ASSOCIATED WITH THE SECTION. */}
						{Object.entries(dataCategories).map(([sectionName, sectionData], sectionIndex) => (
							<React.Fragment key={sectionIndex}>
								{sectionName && (
									<Text fontSize={20} fontWeight="bold" marginTop={3} marginLeft={2}>
										{sectionName}
									</Text>
								)}
								<HStack space={2}>
									{sectionData.map((box, index) => (
										<Box key={box.id} flex={1} backgroundColor="#042564" borderRadius={8} paddingY={10} shadow={2} alignItems="center">
											{/* Image for each ID */}
											<Image source={box.image} alt={`profile ${box.id}`} borderRadius={8} mb={2} />
											<TouchableOpacity onPress={() => handleLinkClick(box.link1)}>
												<Text color="white">{box.content1}</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={() => handleLinkClick(box.link2)}>
												<Text color="white">{box.content2}</Text>
											</TouchableOpacity>
										</Box>
									))}
								</HStack>
							</React.Fragment>
						))}
					</VStack>
				</View>
			</ScrollView>
		</NativeBaseProvider>
	);
};

export default Konsultasi;
