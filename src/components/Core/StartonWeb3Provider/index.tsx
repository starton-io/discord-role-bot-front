import * as React from 'react'
import { Card, CardProps, Theme, Typography, CardMedia, CardContent, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export interface IStartonCardProps extends CardProps {
	description: string
	name: string
	image: string
	iconWidth: number
}

type StyleClassKey = 'cardContainer' | 'media'
type PropClasses = Record<StyleClassKey, string>

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	cardActionArea: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'nowrap',
	},
	cardContainer: {
		boxShadow: '0px 0px 0px',
		borderRadius: 0,
		minWidth: 150,
		maxHeight: 200,
		overflow: 'initial',
	},
	media: {
		maxWidth: (iconWidth: number) => {
			return [`${iconWidth}px`, '!important']
		},
		maxHeight: [70, '!important'],
		margin: 'auto',
	},
}))

// eslint-disable-next-line react/display-name
const StartonWeb3Provider: React.FC<IStartonCardProps> = React.forwardRef((props: IStartonCardProps, remoteRef) => {
	const { description, name, image, iconWidth, ...restProps } = props
	const classes: PropClasses = useStyles(iconWidth as number)
	return (
		<Card {...restProps} classes={{ root: classes.cardContainer }} ref={remoteRef}>
			<CardActionArea style={{ padding: '0.5em' }}>
				<CardMedia className={classes.media} component="img" image={image} title={name} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{name}
					</Typography>
					<Typography variant="body2" color="textPrimary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
})

export { StartonWeb3Provider }
