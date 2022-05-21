import React from 'react'
import { Paper, Grid, Typography, TextField, Button, Box } from '@mui/material'
import BackgroundImage from '../images/bg-intro-desktop.png'
import { styled } from '@mui/material/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Background = {
  backgroundColor: '#ff7978',
  backgroundImage: 'url(' + BackgroundImage + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const theme = createTheme()

const handleSubmit = (event) => {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  })
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#f07b73' : '#fff',
  margin: 0,
  height: '100%',
  padding: theme.spacing(1),
}))

const MyComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        style={Background}
        justifyContent="center"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          m: 'auto',
          marginTop: '10px',
          width: '98%',
          height: 'auto',
          minHeight: 500,
        }}
        elevation={0}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ pr: 1 }}>
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              style={{ color: 'white' }}
              sx={{
                align: 'inherit',
                display: 'flex',
                marginLeft: '20%',
                marginTop: '20%',
                fontSize: '200%',
                justifyContent: 'center',
              }}
            >
              <strong>Learn to code by watching others</strong>
            </Typography>
            <Typography
              variant="body2"
              paragraph={true}
              style={{ color: 'white' }}
              sx={{
                // fontWeight: 'light',
                marginLeft: '20%',
                // textJustify: "distribute",
                align: 'justify',
                // wordBreak: "break-all",
              }}
            >
              {/* prettier-ignore */}
              See how other developer solve problems in real-time. Watching
              scripted tutorials is great, but understanding how developers
              think is invaluable.
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ height: 320, mb: 4 }}>
            <Button
              elevation={24}
              type="submit"
              sx={{
                backgroundColor: '#5d54a3',
                mr: 4,
                width: '80%',
                mb: 2,
                padding: 1.5,
                fontSize: '62%',
              }}
              variant="contained"
            >
              <b1>
                <strong>Try it free 7 days </strong>
                Then $20/mo. thereafter
              </b1>
            </Button>
            <Item
              elevation={10}
              sx={{
                paddingLeft: 2,
                paddingRight: 2,
                marginRight: '20%',
                justifyContent: 'center',
              }}
            >
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}></Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 0,
                    mb: 1,
                    backgroundColor: '#37cc8a',
                    fontSize: '80%',
                  }}
                >
                  CLAIM YOUR FREE TRIAL
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item></Grid>
                </Grid>
              </Box>
              <Typography
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '50%',
                }}
              >
                <b1>
                  <strong style={{ color: '#dedde3' }}>
                    By clicking the button you are agreeing to our{' '}
                  </strong>
                  <strong style={{ color: '#f1adb4' }}>
                    Terms and Services
                  </strong>
                </b1>
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default MyComponent
