import * as React from 'react'
import { AppProps } from 'next/app'
import { Container, Theme, Paper } from '@material-ui/core'
import { StartonNavBar } from 'components/Core'
import { makeStyles } from '@material-ui/styles'

type StyleProps = Record<string, string>
type StyleClassKey = 'container' | 'paper' | 'componentContainer'
type PropClasses = Record<StyleClassKey, string>

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>(() => ({
	container: {
		paddingLeft: 0,
		paddingRight: 0,
		maxWidth: '100%',
	},
	componentContainer: {
		position: 'relative',
		minHeight: `100vh`,
	},
	paper: {
		paddingLeft: 0,
		paddingRight: 0,
		minHeight: '100vh',
		maxWidth: '100vw',
	},
}))

const StartonLayout: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	const classes: PropClasses = useStyles({} as StyleProps)

	return (
		<Container className={classes.container}>
			<StartonNavBar />
			<Paper className={classes.paper}>
				<Component {...pageProps} />
			</Paper>
		</Container>
	)
}

export { StartonLayout }
