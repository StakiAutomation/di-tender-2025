import {
  ActionCard,
  Box,
  Button,
  GridContainer,
  Page,
} from '@island.is/island-ui/core'

import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import Authenticator from '../authentication/Authenticator'

const Overview = () => {
  const router = useRouter()

  const shouldRenderNewApplicationButton = false

  const dataold = [
    { id: '234', title: 'Skattframtal 2025', open: true },
    { id: '123', title: 'Skattframtal 2024', open: false },
  ]

  return (
    <Authenticator>
      <Layout>
        <Page>
          <GridContainer>
            <Box marginBottom={5}>
              <Box
                marginTop={5}
                marginBottom={5}
                justifyContent="spaceBetween"
                display="flex"
                flexDirection={['column', 'row']}
              >
                {shouldRenderNewApplicationButton ? (
                  <Box marginTop={[2, 0]}>
                    <Button data-testid="create-new-application">
                      Nýtt skattframtal
                    </Button>
                  </Box>
                ) : null}
              </Box>

              {dataold.map((taxReturn, index) => (
                <Box marginBottom={3} key={index}>
                  <ActionCard
                    cta={{
                      label: 'Skoða',
                      variant: 'text',
                      onClick: () => {
                        router.push('/taxreturn?id=' + taxReturn.id)
                      },
                    }}
                    tag={{
                      label: taxReturn.open ? 'Draft' : 'Afgreidd',
                      variant: 'blue',
                      outlined: false,
                    }}
                    text={taxReturn.title}
                    heading={taxReturn.title}
                  />
                </Box>
              ))}
            </Box>
          </GridContainer>
        </Page>
      </Layout>
    </Authenticator>
  )
}

export default Overview
