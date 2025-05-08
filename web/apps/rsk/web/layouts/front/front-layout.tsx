import { Box, Button, Header, Text } from '@island.is/island-ui/core'
import { Sidebar } from '../../components/sidebar/sidebar'
import { ImportantLinks } from '../../components/important-links/important-links'
import { ReactNode } from 'react'
import { Footer } from '../../components/footer/footer'

interface FrontLayoutProps {
  children: ReactNode
  subsection?: ReactNode
}

export const FrontLayout = (props: FrontLayoutProps) => {
  return (
    <Box padding={10}>
      <Header
        headerItems={
          <>
            <Button variant="utility" icon="person">
              Mínar síður
            </Button>
            <Button variant="utility">EN</Button>
            <Button variant="utility" icon="menu">
              Valmynd
            </Button>
          </>
        }
      />
      <Box
        marginTop={10}
        style={{
          display: 'grid',
          gridTemplateColumns: '400px auto',
        }}
      >
        <Box>
          <Box
            style={{
              display: 'grid',
              gridTemplateColumns: '80px auto',
              background: '#F8F5FA',
              padding: '40px 20px',
            }}
          >
            <img src="/logo.png" width={70} />
            <Box>
              <Text>Þjónustuaðili</Text>
              <Text variant="h4">Skatturinn</Text>
            </Box>
          </Box>
          <Sidebar />
          <ImportantLinks />
        </Box>
        <Box paddingLeft={10} paddingRight={10}>
          {props.children}
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
