import * as React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, Button, ButtonProps, CircularProgress, Theme, Typography } from '@material-ui/core'
import clsx from 'clsx'

export interface IStartonButtonProps extends ButtonProps {
	children: React.ReactNode
	loading?: boolean
	loadingText?: string
}
type StyleProps = ButtonProps
type StyleClassKey = 'buttonContainer'
type PropClasses = Record<StyleClassKey, string>

const useStyles = makeStyles<Theme, StyleProps, StyleClassKey>((theme) => ({
	buttonContainer: {
		background: (props: StyleProps) => {
			if (props.variant === 'outlined') {
				return theme.palette.background.default
			} else if (props.variant === 'text') {
				return 'inherit'
			} else {
				return props.color === 'default'
					? theme.palette.background.default
					: `transparent linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%) 0% 0% no-repeat padding-box`
			}
		},
		color: (props: StyleProps) => {
			if (props.variant === 'outlined') {
				return theme.palette.primary.main
			} else if (props.variant === 'text') {
				return theme.palette.primary.main
			} else {
				return props.color === 'default' ? '#222731' : theme.palette.primary.contrastText
			}
		},
		border: (props: StyleProps) => {
			return props.variant === 'outlined' ? `2px solid ${theme.palette.primary.main}` : 'none'
		},
		boxSizing: 'border-box',
		padding: `18px ${theme.spacing(4)}px`,
		opacity: 1,
		fontWeight: 600,
		'&:hover, &:focus': {
			background: (props: StyleProps) =>
				props.color === 'default'
					? '#efefef'
					: `transparent linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%) 0% 0% no-repeat padding-box`,
			color: (props: StyleProps) => (props.color === 'default' ? '#222731' : theme.palette.primary.contrastText),
		},
		'&:disabled': {
			opacity: 0.5,
			color: 'white',
		},
	},
}))

const StartonButton: React.FC<IStartonButtonProps> = (props: IStartonButtonProps) => {
	const classes: PropClasses = useStyles(props as StyleProps)
	const { children, loading, loadingText, ...restProps } = props

	return (
		<Button {...restProps} className={clsx(classes.buttonContainer, props.className)}>
			{!props.loading ? (
				<span>{props.children}</span>
			) : (
				<Box className="flex flex-row items-center">
					<CircularProgress color="inherit" size={20} />
					{props.loadingText && <Typography className="ml-4">{props.loadingText}</Typography>}
				</Box>
			)}
		</Button>
	)
}

StartonButton.defaultProps = {
	loading: false,
}

export { StartonButton }
