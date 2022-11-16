import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch } from '@/Hooks'
import * as userActions from '@/Services/apis/users'
import { Colors } from '@/Constants'

export default function LoginView() {
  const dispatch = useAppDispatch()

  const [username, changeUsername] = useState('')
  const [password, changePassword] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (username.trim() && password.trim()) {
      setLoading(true)
      const tokenResult = await dispatch(userActions.getRequestToken())
      if (!tokenResult.error && tokenResult.payload.request_token) {
        const loginResult = await dispatch(
          userActions.login({
            username,
            password,
            request_token: tokenResult.payload.request_token
          })
        )
        if (!loginResult.error && loginResult.payload) {
          console.log('Login success', loginResult)
        }
      }
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={changeUsername}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={changePassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} disabled={isLoading}>
        <Text>Login</Text>
      </TouchableOpacity>
      {isLoading && <ActivityIndicator color={Colors.black} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
