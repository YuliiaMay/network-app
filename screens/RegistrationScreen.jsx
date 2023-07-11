import React, { useState } from 'react';
import {
    StyleSheet,
    Platform,
    ImageBackground,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';


const initialState = {
    email: '',
    name: '',
    password: ''
}


export const RegistretionScreen = () => {
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    console.log(isShowKeyboard);
    console.log(state);

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setState(initialState);
    };

    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.bgImage}
                    source={require("../assets/images/bg.png")}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : ""}>
                            <View style={{
                                ...styles.form,
                                paddingBottom: isShowKeyboard ? 20 : 45,
                            }}>
                                <View style={styles.imgBox}>
                                    <Image
                                        style={styles.avatar}
                                        source={require("../assets/images/default-avatar.png")}
                                    ></Image>
                                    <TouchableOpacity
                                        style={styles.avatarBtn}
                                        activeOpacity={0.8}
                                    >
                                        <Image
                                            source={require('../assets/images/add-btn.png')}
                                        ></Image>
                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.formTitle}>Реєстрація</Text>
                                <TextInput
                                    style={styles.input}
                                    marginBottom={16}
                                    placeholder="Логін"
                                    value={state.name}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({ ...prevState, name: value }))
                                    }
                                    onFocus={() => setIsShowKeyboard(true)}
                                />

                                <TextInput
                                    style={styles.input}
                                    marginBottom={16}
                                    placeholder="Адреса електронної пошти"
                                    value={state.email}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({ ...prevState, email: value }))
                                    }                         
                                    onFocus={() => setIsShowKeyboard(true)}
                                />

                                <TextInput
                                    style={styles.input}
                                    // marginBottom={43}
                                    placeholder="Пароль"
                                    secureTextEntry={true}   
                                    value={state.password}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({ ...prevState, password: value }))
                                    }                          
                                    onFocus={() => setIsShowKeyboard(true)}
                                />

                                {
                                    !isShowKeyboard && 
                                        <TouchableOpacity
                                            style={styles.button}
                                            activeOpacity={0.8}
                                        >
                                            <Text
                                                style={styles.buttonText}
                                                    >Зареєструватись</Text>
                                        </TouchableOpacity>                            
                                } 
                                {
                                    !isShowKeyboard && 
                                        <Text
                                            style={styles.loginLink}
                                                >Вже є обліковий запис? Увійти
                                        </Text>                             
                                }

                            </View>
                    </KeyboardAvoidingView>

                    

                </ImageBackground>

            {/* <Text style={{ fontFamily: 'Bold', fontSize: 30 }}>Let's try</Text> */}
            </View>            
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'flex-end',
    },
    form: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 45,
        paddingTop: 92,
    },
    formTitle: {
        textAlign: 'center',
        fontFamily: 'Medium',
        fontSize: 30,
        color: '#212121',
        marginBottom: 32,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        height: 50,
        backgroundColor: '#F6F6F6',
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#212121',
        paddingLeft: 16,
    },
    button: {
        height: 51,
        borderRadius: 100,
        backgroundColor: '#FF6C00',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 42
    },
    buttonText: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#ffffff'

    },
    loginLink: {
        fontFamily: 'Regular',
        fontSize: 16,
        color: '#1B4371',
        textAlign: 'center'
    },
    imgBox: {
        position: 'absolute',
        top: -60,
        left: '50%',
        transform: [{ translateX: -45 }],
        borderRadius: 16,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    avatar: {
        position: 'relative',
        width: 120,
        height: 120,
    },
    avatarBtn: {
        position: 'absolute',
        top: 85,
        right: -15,
        width: 30,
        height: 30,       
    }
});

