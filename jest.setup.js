import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import 'react-native-gesture-handler/jestSetup'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translation hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {})
      }
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn()
  }
}))
