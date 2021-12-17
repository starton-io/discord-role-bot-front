import { ThemeOptions } from '@material-ui/core'
//#092742
//#0c3050
const darkTheme: ThemeOptions = {
	palette: {
		type: 'dark',
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
			paper: '#051e34',
		},
		text: {
			primary: '#ffffff',
			secondary: '#ffffff',
		},
	},
	typography: {
		/*fontFamily: [fontFamilyHeading, fontFamilyBody].join(","),
        "h1, h2, h3, h4, h5, h6": {
            backgroundColor: "blue",
            color: "blue",
        },
        "p, span, button": {},*/
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
		h1: {},
		h2: {},
		h3: {},
		h4: {},
		h5: {},
		h6: {},
		button: {},
	},
	breakpoints: {
		values: {
			/*mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200, */
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
		MuiList: {
			padding: {},
		},
		MuiButton: {
			root: {
				borderRadius: 15,
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: '#051e34',
			},
		},
		MuiCard: {
			root: {
				backgroundColor: '#0c3050',
			},
		},
	},
}

export default darkTheme
