import React, {useLayoutEffect} from "react";
import {Image, SafeAreaView, ScrollView, Text, TextInput, View} from "react-native";
import {useNavigation } from "@react-navigation/native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
            <SafeAreaView className='bg-white pt-10'>
                <View className="flex-row pb-3 items-center  space-x-2 px-4">
                    <Image
                        source={{uri: "https://links.papareact.com/wru"}}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">
                            Deliver Now!
                        </Text>
                        <Text className="font-bold text-xl">
                            Current Location
                            <FontAwesome name="chevron-down" size={20} color="#00CCBB"  />
                        </Text>
                    </View>
                    <FontAwesome name="user" size={35} color="#00CCBB" />
                </View>
                {/*    Search bar*/}
                <View className='flex-row items-center space-x-2 pb-2 px-4' >
                    <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center'>
                        <FontAwesome name="search" size={20} />
                        <TextInput
                            placeholder={"Restaurants and cuisines"}
                            keyboardType='default'
                        />
                    </View>
                    <FontAwesome name="adjust" size={24} color="#00CCBB" />
                </View>
                <ScrollView contentContainerStyle={{paddingBottom: 150}} className="bg-gray-100">
                {/*    Categories*/}
                    <Categories/>
                    <FeaturedRow
                        id="123"
                        title="Featured"
                        description="Paid placements from our partners."
                    />

                    <FeaturedRow
                        id="1234"
                        title="Tasty Discounts"
                        description="Everyone's been enjoying these juicy discounts"
                    />

                    <FeaturedRow
                        id="12345"
                        title="Offers near you"
                        description="Why not support your local restaurant tonigh"
                    />
                </ScrollView>
            </SafeAreaView>
    );
}

export default HomeScreen;