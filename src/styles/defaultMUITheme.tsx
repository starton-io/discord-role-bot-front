import { ThemeOptions } from '@material-ui/core'

const defaultMUITheme: ThemeOptions = {
	palette: {
		primary: {
			main: '#009DFF',
			light: '#00D0FF',
			dark: '#0073FF',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#0045FF',
			light: '#0078FF',
			dark: '#001BFF',
			contrastText: '#FFFFFF',
		},
		error: {
			main: '#ff1744',
		},
		background: {
			default: '#fff',
			paper: '#F4F4F4',
		},
		text: {
			primary: '#1A202C',
			secondary: '#0072FF',
		},
	},
	typography: {
		fontFamily: [
			'Montserrat',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
			'sans-serif',
		].join(', '),
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1640,
		},
	},
	overrides: {
		MuiOutlinedInput: {
			notchedOutline: {
				borderRadius: 15,
			},
		},
		MuiButton: {
			root: {
				borderRadius: 15,
			},
		},
	},
}

export default defaultMUITheme
