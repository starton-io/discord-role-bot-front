import { createContext } from 'react'
import lightTheme from 'styles/lightTheme'
import { ThemeOptions } from '@material-ui/core'

const appContext = createContext({
	theme: lightTheme,
	setTheme: (theme: ThemeOptions) => theme,
	isVerified: false,
	setVerify: () => {},
})

export default appContext
