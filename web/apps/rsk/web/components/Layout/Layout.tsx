import React, { FC } from 'react'

import { Header } from '../Header/Header'
import { Box } from '@island.is/island-ui/core'
import ContentLayout from './ContentLayout/content-layout'


export const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <>
    <Box background={"dark100"}>
      <Header />
        {children}
    </Box>
  </>
)
