import React from 'react'
import { Theme, AppBar, Box, Grid, IconButton, Toolbar, Button } from '@material-ui/core'
import { StartonTranslate } from '../StartonTranslate'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined'
import appContext from 'context/appContext'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useRouter } from 'next/router'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import lightTheme from 'styles/lightTheme'
import darkTheme from 'styles/darkTheme'

type StyleProps = Record<string, string | number>
type StyleClassKey = 'container' | 'logo' | 'toolbar' | 'iconTheme' | 'buttonDisconnect'
type PropClasses = Record<StyleClassKey, string>

export const NAVBAR_HEIGHT = 50

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	buttonDisconnect: {
		marginLeft: '3em',
		borderRadius: '4px',
		height: '2.8em',
		color: '#4686FF',
	},
	container: {
		position: 'fixed',
		boxShadow: 'none',
		height: NAVBAR_HEIGHT,
	},
	logo: {
		display: 'none',
		[theme.breakpoints.down('md')]: {
			display: 'block',
		},
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	iconTheme: {
		marginleft: 0,
		marginRight: 0,
		[theme.breakpoints.up('md')]: {
			marginLeft: '7px',
			marginRight: '10px',
		},
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}))

const StartonNavBar: React.FC = () => {
	const classes: PropClasses = useStyles({} as StyleProps)
	const { t } = useTranslation()
	const router = useRouter()

	const context = useWeb3React<Web3Provider>()
	const { connector, deactivate, chainId } = context

	const disconnect = () => {
		if (connector && chainId) deactivate()
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		if (connector && connector.close) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			connector?.close()
		}
		router.push('/')
	}

	const { theme, setTheme } = React.useContext(appContext)

	const isDarkTheme = React.useMemo(() => (theme?.palette?.type === 'dark' ? true : false), [theme])
	const switchTheme = React.useCallback(() => (isDarkTheme ? setTheme(lightTheme) : setTheme(darkTheme)), [theme])

	return (
		<Box>
			<AppBar position="static" color="transparent" className={classes.container}>
				<Toolbar className={classes.toolbar}>
					{
						<Grid item className={classes.logo}>
							{isDarkTheme ? (
								<img alt="logo Light" src="/images/logo-light-left-shadow.png" width={200} />
							) : (
								<img alt="logo Dark" src="/images/logo-monochrome.svg" width={150} />
							)}
						</Grid>
					}
					<Grid item xs={12} sm={6} md={12} container justifyContent="flex-end" alignItems="center">
						<StartonTranslate />
						{/* @ts-ignore */}
						<IconButton
							onClick={switchTheme}
							size="medium"
							edge="start"
							color="inherit"
							aria-label="menu"
							className={classes.iconTheme}
						>
							{isDarkTheme ? (
								<LightModeOutlinedIcon style={{ color: 'white' }} />
							) : (
								<Brightness2OutlinedIcon />
							)}
						</IconButton>

						{chainId && (
							<Button
								color="inherit"
								size="small"
								onClick={() => disconnect()}
								className={classes.buttonDisconnect}
							>
								{t('signing.disconnect')}
							</Button>
						)}
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export { StartonNavBar }
