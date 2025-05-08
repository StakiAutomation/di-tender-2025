import {
  Box,
  Button,
  Divider,
  Page,
  Text,
  Stack,
} from '@island.is/island-ui/core'
import { FormProvider, useForm } from 'react-hook-form'
import {
  CheckboxController,
  InputController,
} from '@island.is/shared/form-fields'
import addMinutes from 'date-fns/addMinutes'

interface LoginProps {
  loginCallback: () => void
}

const Login = ({ loginCallback }: LoginProps) => {
  const methods = useForm({
    mode: 'onChange',
  })
  const { control, watch } = methods

  const phonenumber = watch('audkenning.simanumer')

  const isValidPhoneNumber = (value: string) => /^\d{7}$/.test(value)

  const onSubmit = () => {
    if (!Number.isNaN(phonenumber) && phonenumber?.length === 7) {
      const now = new Date()
      localStorage.setItem('loginExpiration', String(addMinutes(now, 10)))
      loginCallback()
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <Page>
          <Box paddingY={'containerGutter'} width="full" margin={'auto'}>
            <Box
              padding={4}
              paddingBottom={6}
              background={'white'}
              border="standard"
              borderRadius="large"
              style={{ maxWidth: '460px' }}
              margin={'auto'}
            >
              <Stack space={2}>
                <Box textAlign={'center'} paddingY={3}>
                  <Box paddingBottom={1}>
                    <Text color="blue400" fontWeight="medium">
                      Rafræn skilríki í síma{' '}
                    </Text>
                  </Box>
                  <Text variant="h2">Skráðu þig inn</Text>
                  <Text>Ísland.is - Mínar síður</Text>
                </Box>
                <InputController
                  id="audkenning.simanumer"
                  placeholder="000-0000"
                  control={control}
                  label="Símanúmer"
                  type="tel"
                  backgroundColor="blue"
                  format="###-####"
                />
                <Box paddingTop={1}>
                  <CheckboxController
                    id="muna-simanumer"
                    strong
                    options={[
                      {
                        label: 'Muna símanúmer',
                        value: 'yes',
                      },
                    ]}
                  />
                  <Box paddingTop={1}>
                    <Button
                      id="audkenna"
                      fluid
                      onClick={onSubmit}
                      disabled={!isValidPhoneNumber(phonenumber)}
                      type={'submit'}
                    >
                      Auðkenna
                    </Button>
                  </Box>
                </Box>
                <Box textAlign={'center'} paddingTop={3} paddingBottom={1}>
                  <Box paddingBottom={1}>
                    <Divider />
                  </Box>
                  <Text variant="medium" fontWeight="light">
                    Eða skráðu þig inn með
                  </Text>
                </Box>
                <Button fluid variant="ghost" size="small">
                  Auðkennisappinu
                </Button>
                <Button fluid variant="ghost" size="small">
                  Skilríki á korti
                </Button>
              </Stack>
            </Box>
          </Box>
        </Page>
      </form>
    </FormProvider>
  )
}

export default Login
