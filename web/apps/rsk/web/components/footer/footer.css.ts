import { style } from '@vanilla-extract/css'

export const topFooterContainer = style({
  marginTop: 20,
  background: '#00499E',
  padding: 60,
})

export const topFooterContainerLogo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
})

export const footerTextContainer = style({
  display: 'grid',
  width: '25%',
  gap: 5,
})

export const subFooterContainer = style({
  marginTop: 40,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const footerImageContainer = style({
  display: 'flex',
  gap: 20
})

export const footerImage = style({
  width: 80,
  height: 80,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
})

export const bottomFooterContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: 20,
  height: 100,
})

export const bottomFooterContainerLinks = style({
  display: 'flex',
  gap: 30,
})
