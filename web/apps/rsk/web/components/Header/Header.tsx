import React, { FC } from 'react'

import {
  Box,
  GridContainer,
  Header as UIHeader,
} from '@island.is/island-ui/core'

export const Header: FC<React.PropsWithChildren<unknown>> = () => {
  return (
    <Box background="white">
      <GridContainer>
        <UIHeader
          info={{
            title: 'Skatturinn',
          }}
        />
      </GridContainer>
    </Box>
  )
}
