import React from 'react'

import { Paper, Grid, Typography } from '@mui/material'

import BackgroundImage from '../images/bg-intro-desktop.png'

import UserForm from '../components/UserFrom'

const Background = {
  backgroundColor: '#ff7974',
  backgroundImage: 'url(' + BackgroundImage + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const MyComponent = () => {
  const [values, setValues] = React.useState({})

  console.log(values)

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      // we use the name to tell Formik which key of `values` to update
      [event.target.name]: event.target.value,
    }))
  }

  console.log(handleChange)

  return (
    <Paper
      style={Background}
      square={true}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        m: 1,
        marginTop: '10px',
        width: '98%',
        height: 'auto',
        minHeight: 500,
      }}
      elevation={0}
    >
      <Grid
        container
        fullWidth={true}
        sx={{
          margin: 'auto',
        }}
      >
        <Grid
          item
          xs={11}
          sm={6}
          md={6}
          sx={{
            width: '90%',
            marginTop: '17%',
          }}
        >
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            style={{ color: 'white' }}
            sx={{
              marginTop: 'auto',

              fontSize: '250%',
              marginLeft: '15%',
            }}
          >
            <strong>Learn to code by watching others</strong>
          </Typography>
          <Typography
            variant="body2"
            paragraph={true}
            style={{ color: 'white' }}
            sx={{
              marginLeft: '15%',

              align: 'justify',
            }}
          >
            See how other developer solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ height: 'auto', mb: 4, mt: '5%' }}
        >
          <UserForm></UserForm>

          {/* </Item> */}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default MyComponent
