'use client'
import { useTheme } from '@mui/material/styles'
import { Box, Container } from '@mui/material'
import React from 'react'
import {
  Description,
  GroupButton,
  HeroButton,
  Img,
  StyledContent,
  SubTitle,
  Title,
} from './style'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import BannerImage from '@/assets/image-hero.png'

const Banner = () => {
  const theme = useTheme()
  return (
    <div className="hero">
      <StyledContent maxWidth="lg">
        <Box>
          <Title variant="h1">One more friend</Title>
          <SubTitle
            variant="subtitle1"
            fontWeight={theme.typography.fontWeightMedium}
          >
            Thousands more fun!
          </SubTitle>
          <Description variant="body1">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </Description>
          <GroupButton>
            <HeroButton
              variant="outlined"
              endIcon={<PlayCircleOutlineIcon />}
              size="large"
              color="primary"
            >
              View intro
            </HeroButton>
            <HeroButton variant="contained" size="large">
              Explore Now
            </HeroButton>
          </GroupButton>
        </Box>
        <Img src={BannerImage} alt="mulher segurando cachorro" />
      </StyledContent>
    </div>
  )
}

export default Banner
