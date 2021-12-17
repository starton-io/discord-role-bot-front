import React from 'react'
import { NextPage } from 'next'
import { Button, Container, Theme, Typography } from '@material-ui/core'
import { BaseCSSProperties, makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'

interface StyleProps {
	container: BaseCSSProperties
}
type PropClasses = Record<keyof StyleProps, string>
type StyleClassKey = 'container'

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>({
	container: {
		minHeight: 'calc(100vh - 150px)',
	},
})

const StartonPageNotFound: NextPage = () => {
	const classes: PropClasses = useStyles({} as StyleProps)
	const { t } = useTranslation()

	return (
		<Container
			className="flex flex-row items-center justify-center px-4 py-12 text-center"
			classes={{
				root: classes.container,
			}}
		>
			<div>
				<Typography variant="h2" className="mt-8 mb-2 text-5xl font-heading">
					{t('tools.page_not_found')}
				</Typography>
				<Typography className="mb-6 text-xl">{t('tools.error_404')}</Typography>
				<Button href="/" color="primary">
					{t('tools.return_to_home')}
				</Button>
			</div>
		</Container>
	)
}

export default StartonPageNotFound
