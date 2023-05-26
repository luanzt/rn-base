import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch } from '@/hooks'
import * as userActions from '@/services/apis/users'
import { Colors } from '@/constants'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Icon } from '@/components'

export default function LoginView() {
  const { t } = useTranslation(['login'])

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

  const handleChangeLanguage = () => {
    i18next.changeLanguage('fr')
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={changeUsername}
        placeholder={t('login:email')}
      />
      <TextInput
        value={password}
        onChangeText={changePassword}
        placeholder={t('login:password')}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleLogin}
        disabled={isLoading}
        style={styles.buttonLogin}
      >
        <Text style={styles.loginText}>{t('login:login')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleChangeLanguage}
        style={styles.buttonChangeLang}
      >
        <Icon icon="flag" size={24} />
        <Text style={styles.langText}>Change Lang</Text>
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
  },
  buttonLogin: {
    height: 40,
    marginTop: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonChangeLang: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 40,
    alignItems: 'center'
  },
  loginText: { color: '#FFF' },
  langText: { marginStart: 10 }
})
