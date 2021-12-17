import * as React from 'react'
import { Theme, Box, Paper, Grid, Typography, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import StartonCardWeb3Provider from 'components/Core/StartonCardWeb3Provider'

export interface IComponentProps {}

type StyleProps = Record<string, string>
type StyleClassKey = 'container' | 'content' | 'cardSigning' | 'image' | 'pannelTitle'

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	container: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
	},
	cardSigning: {
		display: 'flex',
		justifyContent: 'start',
		alignItems: 'center',
		[theme.breakpoints.down('lg')]: {
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
	image: {
		height: '30em',
		marginBottom: '4em',
		[theme.breakpoints.up('md')]: {
			textAlign: 'center',
		},
	},
	pannelTitle: {
		[theme.breakpoints.down('xl')]: {
			fontSize: '2.3em',
		},
	},
}))

const HomePage: React.FC = () => {
	const theme = useTheme()
	const classes = useStyles({} as StyleProps)

	return (
		<React.Fragment>
			<Paper className={classes.container}>
				<Grid container className={classes.content}>
					<Box
						className={classes.image}
						component={Grid}
						//@ts-ignore
						item
						md={5}
						lg={5}
						xl={6}
						display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}
					>
						{theme.palette.type === 'dark' ? (
							<img
								style={{ display: 'inline-block' }}
								alt="logo Light"
								src="/images/logo-light-left-shadow.png"
								width={600}
							/>
						) : (
							<img
								style={{ display: 'inline-block' }}
								alt="logo Dark"
								src="/images/logo-mono-left-shadow.png"
								width={600}
							/>
						)}
						<Typography variant="h3" className={classes.pannelTitle}>
							Blockchain made simple
						</Typography>
					</Box>
					<Grid item className={classes.cardSigning} xs={12} sm={12} md={12} lg={7} xl={6}>
						<StartonCardWeb3Provider />
					</Grid>
				</Grid>
			</Paper>
		</React.Fragment>
	)
}

export default HomePage
