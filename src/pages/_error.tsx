import React from 'react'
import { NextPage } from 'next'
import { Button, Container, Theme, Typography } from '@material-ui/core'
import { BaseCSSProperties, makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'

interface IErrorProps {
	statusCode?: number | null | undefined
}
interface StyleProps {
	container: BaseCSSProperties
}
type StyleClassKey = 'container'
type PropClasses = Record<keyof StyleProps, string>

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>({
	container: {
		minHeight: 'calc(100vh - 150px)',
	},
})

const StartonError: NextPage<IErrorProps> = ({ statusCode }) => {
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
				<Typography className="mb-6 text-xl">
					{statusCode ? 'error-from-server' : 'error-from-client'}
				</Typography>
				<Button href="/" color="primary">
					{t('tools.return_to_home')}
				</Button>
			</div>
		</Container>
	)
}

StartonError.getInitialProps = async ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return {
		statusCode,
		namespacesRequired: ['errors'],
	}
}

StartonError.defaultProps = {
	statusCode: null,
}

export default StartonError
