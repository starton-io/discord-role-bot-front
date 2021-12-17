import * as React from 'react'
import { Grid, Theme, Paper, Typography, useTheme, useMediaQuery, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { StartonCard } from 'components/Core'
import { useTranslation } from 'react-i18next'

export interface IComponentProps {}

type StyleProps = Record<string, string>
type StyleClassKey = 'container' | 'content' | 'title' | 'card' | 'cardContent' | 'image' | 'text'
const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	container: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	card: {
		width: '100%',
		minHeight: '30em',
		maxWidth: '600px',
		borderRadius: '12px !important',
		[theme.breakpoints.down('xs')]: {
			paddingTop: '70px',
		},
		[theme.breakpoints.down(350)]: {
			paddingTop: '350px !important',
		},
	},
	cardContent: {
		textAlign: 'center',
	},
	content: {
		height: '80%',
	},
	image: {
		marginTop: '1em',
		fontWeight: 500,
		padding: '10px 10px',
	},
	text: {
		padding: 20,
		fontWeight: 400,
	},
	title: {
		padding: 10,
		fontWeight: 500,
		textAlign: 'center',
	},
}))

const HomePage: React.FC = () => {
	const classes = useStyles({} as StyleProps)
	const { t } = useTranslation()
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<React.Fragment>
			<Paper className={classes.container}>
				<Grid container className={classes.content} justifyContent="center" alignItems="center" wrap="wrap">
					<StartonCard className={classes.card}>
						<CardContent className={classes.cardContent}>
							<img
								className={classes.image}
								style={{ display: 'inline-block' }}
								alt="logo Light"
								src="/images/check-mark.png"
								width={isMobile ? 100 : 150}
							/>

							<Typography variant="h5" align="center" gutterBottom className={classes.title}>
								{t('successfulSignature.successfulSignature')}
							</Typography>
							<Typography variant="h6" align="center" gutterBottom className={classes.text}>
								{t('successfulSignature.successfultext')}
							</Typography>
						</CardContent>
					</StartonCard>
				</Grid>
			</Paper>
		</React.Fragment>
	)
}

export default HomePage
