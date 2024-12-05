import { Component } from "react";
import { ImageBackground, Text, View } from "react-native";



export default class Tasklist extends Component {

    render() {
        return (
            <View>
                <ImageBackground source="../../assets/imgs/today.jpg"></ImageBackground>
                <Text>Task List</Text>
            </View>
        );
    }
}