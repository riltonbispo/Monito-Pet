'use client'
import { Box, Button, Stack } from '@mui/material'
import { Description, Img, StyledContent, SubTitle, Title } from './style'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import BannerImage from '@/assets/image-hero.png'

const Banner = () => {
  return (
    <div className="hero">
      <StyledContent maxWidth="lg">
        <Box>
          <Title variant="h1">One more friend</Title>
          <SubTitle variant="subtitle1">Thousands more fun!</SubTitle>
          <Description variant="body1">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </Description>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
            <Button
              variant="outlined"
              endIcon={<PlayCircleOutlineIcon />}
              size="large"
              color="primary"
              sx={{
                borderRadius: '3.5rem',
              }}
            >
              View intro
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: '3.5rem',
              }}
            >
              Explore Now
            </Button>
          </Stack>
        </Box>
        <Img src={BannerImage} alt="mulher segurando cachorro" />
      </StyledContent>
    </div>
  )
}

export default Banner
