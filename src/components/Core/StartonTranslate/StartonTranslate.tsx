import * as React from 'react'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Typography } from '@material-ui/core'
import Cookies from 'js-cookie'

const StartonTranslate: any = () => {
	const router = useRouter()
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleLanguageChanging = (language: string) => {
		Cookies.set('NEXT_LOCALE', language)
		router.push(router.asPath, router.asPath, { locale: language })
		setAnchorEl(null)
	}

	return (
		<div>
			<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
				{router.locale === 'fr' ? (
					<img src="/images/france.png" width="30" height="50" alt={''} />
				) : (
					<img src="/images/united-kingdom.png" width="30" height="50" alt={''} />
				)}
			</Button>
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem onClick={() => handleLanguageChanging('fr')}>
					<img src="/images/france.png" width="30" height="50" alt={''} /> <pre> </pre>
					<Typography> Français</Typography>
				</MenuItem>
				<MenuItem onClick={() => handleLanguageChanging('en')}>
					<img src="/images/united-kingdom.png" width="30" height="50" alt={''} /> <pre> </pre>
					<Typography> English</Typography>
				</MenuItem>
			</Menu>
		</div>
	)
}

export { StartonTranslate }
