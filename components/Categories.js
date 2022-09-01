import React from "react";
import {ScrollView} from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
                {
                    paddingHorizontal: 15,
                    paddingTop: 10,
                }
            }
        >
            {/*Categories Card*/}
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
        </ScrollView>
    )
}

export default Categories;
