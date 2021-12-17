import * as React from 'react'
import { Card, CardProps, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export interface IStartonCardProps extends CardProps {
	children: React.ReactNode
}
type StyleProps = CardProps
type StyleClassKey = 'cardContainer'
type PropClasses = Record<StyleClassKey, string>

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	cardContainer: {
		//@ts-ignore
		background: `${theme.palette.background.card} no-repeat padding-box`,
		boxShadow: '0px 24px 99px #0083BC1A',
		borderRadius: 20,
		minWidth: 250,
		minHeight: 50,
		overflow: 'initial',
	},
}))

// eslint-disable-next-line react/display-name
const StartonCard: React.FC<IStartonCardProps> = React.forwardRef((props: IStartonCardProps, remoteRef) => {
	const classes: PropClasses = useStyles({} as StyleProps)
	const { children, ...restProps } = props
	return (
		<Card {...restProps} classes={{ root: classes.cardContainer }} ref={remoteRef}>
			{children}
		</Card>
	)
})

export { StartonCard }
