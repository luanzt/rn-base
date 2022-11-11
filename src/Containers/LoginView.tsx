import {
  ActivityIndicator,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  Keyboard,
  Image,
  Platform
} from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch } from '@/Hooks'
import * as userActions from '@/Services/apis/users'
import { Colors } from '@/Constants'
import { Images } from '@/Assets'
import { AppBar } from '@react-native-material/core'
import { navigate } from '@/Navigators/utils'

export default function LoginView() {
  const dispatch = useAppDispatch()

  const [username, changeUsername] = useState('luanzt')
  const [password, changePassword] = useState('Alalal191!')
  const [isLoading, setLoading] = useState(false)

  const handleLogin = async () => {
    Keyboard.dismiss()
    if (username.trim() && password.trim()) {
      setLoading(true)
      dispatch(userActions.getRequestToken()).then(async (res: any) => {
        if (!res.error && res.payload.request_token) {
          const loginResult = await dispatch(
            userActions.login({
              username,
              password,
              request_token: res.payload.request_token
            })
          )
          if (!loginResult.error && loginResult.payload) {
            Platform.OS === 'ios'
              ? null
              : ToastAndroid.show('Login success!', ToastAndroid.SHORT)
            const sessionResult: any = await dispatch(
              userActions.getRequestSession(res.payload.request_token)
            )
            if (!sessionResult.error && sessionResult.payload.success) {
              const accountId = await dispatch(
                userActions.getAccountDetail(sessionResult.payload.session_id)
              )
              if (!accountId.error && accountId.payload.id) {
                navigate('Main', '')
              }
            }
          } else {
            Platform.OS === 'ios'
              ? null
              : ToastAndroid.show('Login fail!', ToastAndroid.SHORT)
          }
        }
        setLoading(false)
      })
    }
  }

  return (
    <>
      <AppBar
        title="Login"
        centerTitle={true}
        transparent={true}
        tintColor={Colors.black}
        leading={<Image style={styles.backbt} source={Images.Back} />}
      />
      <View style={styles.container}>
        <TextInput
          style={styles.edttext}
          value={username}
          onChangeText={changeUsername}
          placeholder="Your email"
        />
        <TextInput
          style={styles.edttext}
          value={password}
          onChangeText={changePassword}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleLogin}
          disabled={isLoading}
          style={styles.button}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={Images.Login} />
        {isLoading && <ActivityIndicator color={Colors.black} />}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 100
  },
  button: {
    borderRadius: 20,
    backgroundColor: Colors.black_button,
    height: 35,
    width: 95,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    color: Colors.primary,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 3
  },
  edttext: {
    flexWrap: 'wrap',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border_bottom,
    height: 42,
    width: '100%',
    fontSize: 15
  },
  image: {
    marginTop: 150
  },
  backbt: {
    marginLeft: 20
  }
})
