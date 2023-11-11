import { Container, Typography, styled } from '@mui/material'
import Image from 'next/image'

export const StyledContent = styled(Container)(({ theme }) => ({
  paddingTop: '5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}))

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.875rem, 4vw, 3.75rem)',
  fontWeight: theme.typography.fontWeightBold,
}))

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.75rem, 4vw, 1.75rem)',
  fontWeight: theme.typography.fontWeightMedium,
}))

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.75rem, 4vw, 1rem)',
  color: theme.palette.text.primary,
  marginBottom: '2rem',
}))

export const Img = styled(Image)({
  maxWidth: '100%',
  height: 'auto',
})
