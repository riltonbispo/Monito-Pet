'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import {
  StyledToolbar,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  StyledAppBar,
} from './style'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default function SearchAppBar() {
  const theme = useTheme()
  const isScreenLarge = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <Image src={Logo} alt="monito logo"></Image>
          {isScreenLarge ? (
            <Search>
              <SearchIconWrapper>
                <SearchIcon color="primary" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="search"
              sx={{ ml: 2 }}
            >
              <SearchIcon color="primary" />
            </IconButton>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  )
}
