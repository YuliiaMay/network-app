import { ImageBackground, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export const RegistretionScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require("../assets/images/bg.png")}
            >
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                    />

                    <TextInput
                        style={styles.input}
                    />

                    <TextInput
                        style={styles.input}
                    />
                </View>
            </ImageBackground>

        {/* <Text style={{ fontFamily: 'Bold', fontSize: 30 }}>Let's try</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center'
    },
    form: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25
    },
    input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        height: 50,
        backgroundColor: '#F6F6F6'
    }
});

