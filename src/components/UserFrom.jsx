import React from 'react'
// import InputIcon from '@mui/icons-material/Input'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckIcon from '@mui/icons-material/Check'
import { TextField, InputAdornment } from '@material-ui/core'
// import InputAdornment from '@mui/material/InputAdornment';
import {
  Grid,
  // makeStyles,
  Card,
  CardContent,
  // MenuItem,
  // InputLabel,
  // Select,
  Button,
  Typography,
  // CardHeader,
  // FormControl,
} from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
  },
}))

//Data
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

// const options = [
//   { label: 'Computer Programmer', value: 'Computer_programmer' },
//   { label: 'Web Developer', value: 'web_developer' },
//   { label: 'User Experience Designer', value: 'user_experience_designer' },
//   { label: 'Systems Analyst', value: 'systems_analyst' },
//   { label: 'Quality Assurance Tester', value: 'quality_assurance_tester' },
// ]

//password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

//validation schema
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      'Must contain one lowercase alphabetical character!',
    )
    .matches(
      uppercaseRegEx,
      'Must contain one uppercase alphabetical character!',
    )
    .matches(numericRegEx, 'Must contain one numeric character!')
    .matches(lengthRegEx, 'Must contain 6 characters!')
    .required('Password cannot be empty'),
})

const UserForm = () => {
  const classes = useStyle()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      sx={{ width: '80%', margin: 'auto' }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        fullWidth={true}
        sx={{
          width: '100%',
        }}
      >
        <Button
          elevation={10}
          type="submit"
          fullWidth={true}
          sx={{
            backgroundColor: '#5d54a3',

            mb: '5%',
            padding: 1.5,
            fontSize: '62%',
          }}
          variant="contained"
        >
          <div>
            <strong>Try it free 7 days </strong>
            Then $20/mo. thereafter
          </div>
        </Button>
        <Card className={classes.padding} align="center">
          {/* <CardHeader title="REGISTER FORM"></CardHeader> */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => {
              const {
                // dirty,
                // isValid,
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
              } = props
              return (
                <Form>
                  <CardContent sx={{ width: '92%', paddingLeft: '5%' }}>
                    <Grid
                      container
                      spacing={1}
                      sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          id="firstName"
                          fullWidth={true}
                          error={touched.firstName && errors.firstName}
                          size="small"
                          label="First Name"
                          variant="outlined"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="firstName"
                          helperText={touched.firstName && errors.firstName}
                          value={values.firstName}
                          component={TextField}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                variant="filled"
                                style={{ color: 'red' }}
                              >
                                {errors.firstName && touched.firstName && (
                                  <CancelIcon
                                    style={{ color: 'red' }}
                                    fontSize="default"
                                  ></CancelIcon>
                                )}
                                {!errors.firstName && touched.firstName && (
                                  <CheckIcon
                                    style={{ color: '#05cc30' }}
                                    fontSize="default"
                                  ></CheckIcon>
                                )}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          id="lastName"
                          error={errors.lastName && touched.lastName}
                          size="small"
                          label="Last Name"
                          variant="outlined"
                          helperText={touched.lastName && errors.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          fullWidth={true}
                          name="lastName"
                          value={values.lastName}
                          component={TextField}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                variant="filled"
                                style={{ color: 'red' }}
                              >
                                {errors.lastName && touched.lastName && (
                                  <CancelIcon
                                    style={{ color: 'red' }}
                                    fontSize="default"
                                  ></CancelIcon>
                                )}
                                {!errors.lastName && touched.lastName && (
                                  <CheckIcon
                                    style={{ color: '#05cc30' }}
                                    fontSize="default"
                                  ></CheckIcon>
                                )}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>

                      {/* <Grid item xs={12} sm={12} md={12}> */}
                      {/* <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Occupation
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Occupation"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            name="occupation"
                          > */}
                      {/* <MenuItem>None</MenuItem>
                            {options.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select> */}
                      {/* </FormControl> */}
                      {/* </Grid> */}
                      {/* <Grid item xs={12} sm={6} md={6}></Grid> */}
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          fullWidth={true}
                          id="email"
                          size="small"
                          label="Email"
                          variant="outlined"
                          helperText={touched.email && errors.email}
                          error={errors.email && touched.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="email"
                          value={values.email}
                          component={TextField}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                variant="filled"
                                style={{ color: 'red' }}
                              >
                                {errors.email && touched.email && (
                                  <CancelIcon
                                    style={{ color: 'red' }}
                                    fontSize="default"
                                  ></CancelIcon>
                                )}
                                {!errors.email && touched.email && (
                                  <CheckIcon
                                    style={{ color: '#05cc30' }}
                                    fontSize="default"
                                  ></CheckIcon>
                                )}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Field
                          id="password"
                          size="small"
                          label="Password"
                          variant="outlined"
                          helperText={touched.password && errors.password}
                          error={errors.password && touched.password}
                          fullWidth={true}
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          type="password"
                          component={TextField}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                variant="filled"
                                style={{ color: 'red' }}
                              >
                                {errors.password && touched.password && (
                                  <CancelIcon
                                    style={{ color: 'red' }}
                                    fontSize="default"
                                  ></CancelIcon>
                                )}
                                {!errors.password && touched.password && (
                                  <CheckIcon
                                    style={{ color: '#05cc30' }}
                                    fontSize="default"
                                  ></CheckIcon>
                                )}
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button
                          // disabled={!dirty || !isValid}
                          type="submit"
                          fullWidth={true}
                          variant="contained"
                          sx={{
                            mt: '8%',
                            mb: 1,
                            width: '100%',
                            backgroundColor: '#37cc8a',
                            fontSize: '80%',
                          }}
                        >
                          CLAIM YOUR FREE TRIAL
                        </Button>
                        <Typography
                          component={'div'}
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '50%',
                          }}
                        >
                          <div>
                            <strong style={{ color: '#dedde3' }}>
                              By clicking the button you are agreeing to our{' '}
                            </strong>
                            <strong style={{ color: '#f1adb4' }}>
                              Terms and Services
                            </strong>
                          </div>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  )
}

export default UserForm
