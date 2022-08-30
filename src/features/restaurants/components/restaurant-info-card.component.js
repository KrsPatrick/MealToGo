import React from "react";
import { Text, StyleSheet } from "react-native";

import { Card } from 'react-native-paper';

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = "some restaurant", 
        icon, 
        photos = [
            "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ], 
        address = "Gleis 9 3/4", 
        open = true,
        rating = 4,
        isCloseTemporarily,
         } = restaurant
    return (
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{uri: photos[0] }} />
        <Text style={styles.title}>{name}</Text>
    </Card>
    )
}

const styles = StyleSheet.create({
    card: {backgroundColor: "white"},
    cover: {padding: 20, backgroundColor: "white"},
    title: {padding: 16, fontWeight: "bold", fontSize: 18}
})

export default RestaurantInfoCard