import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch } from '@/Hooks'
import * as userActions from '@/Services/apis/users'

export default function LoginView() {
  const dispatch = useAppDispatch()

  const [email, changeEmail] = useState('')
  const [password, changePassword] = useState('')

  const handleLogin = () => {
    dispatch(userActions.login({ email, password }))
  }

  return (
    <View style={styles.container}>
      <TextInput value={email} onChangeText={changeEmail} placeholder="Email" />
      <TextInput
        value={password}
        onChangeText={changePassword}
        placeholder="Password"
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
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
