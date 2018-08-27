import * as React from "react";
import {Image, StyleSheet, View} from "react-native";
import {Card, Header, List, Text, ListItem} from "react-native-elements";

export default class App extends React.Component {
    public render() {
        return (
            <View style={styles.container}>
                <Header backgroundColor={"#2b98f0"}
                        leftComponent={{icon: 'menu', color: '#fff'}}
                        centerComponent={<Logo/>}
                        rightComponent={{icon: 'home', color: '#fff'}}
                />

                <Card title="CURRENT BALANCE">
                    <Text h3 style={styles.title}>$ 10.288 USD</Text>
                </Card>
                    <List>
                        <ListItem
                            key={1}
                            roundAvatar
                            title={"Bitcoin"}
                        />
                        <ListItem
                            key={2}
                            roundAvatar
                            title={"Ethereum"}
                        />
                        <ListItem
                            key={3}
                            roundAvatar
                            title={"Ripple"}
                        />
                    </List>


            </View>
        );
    }
}


class Logo extends React.Component {
    public render() {
        return (
            <Image source={require('./images/logo.png')}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFB",
        flex: 1,
    },
    title: {
        textAlign: "center",
    },
});
