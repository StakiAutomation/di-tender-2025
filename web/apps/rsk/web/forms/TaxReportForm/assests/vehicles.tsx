import {
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
  Table as T,
} from '@island.is/island-ui/core'
import { useFormContext } from 'react-hook-form'

import { Text } from '@island.is/island-ui/core'
import {
  InputBox2Columns,
  InputBox3Columns,
  InputHeader,
} from 'apps/rsk/web/components/InputBox/InputBox'
import { FC, useEffect } from 'react'
import { FieldType } from 'apps/rsk/web/lib/types'

export const Vehicles: FC<React.PropsWithChildren<unknown>> = () => {
  const { control, watch, setValue } = useFormContext()

  const assets06 = watch('assets06')

  useEffect(() => {
    const total = assets06.reduce(
      (total: number, item: FieldType) => total + (parseFloat(item.value) || 0),
      0,
    )
    setValue('totalVehicles', total.toString())
  }, [JSON.stringify(assets06)])

  return (
    <GridContainer>
      <GridRow>
        <GridColumn span="12/12">
          <Stack space={3}>
            <Text variant="h2">Eignir í árslok 2025</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec tortor sagittis, molestie dui sit amet, commodo sapien.
              Phasellus et convallis tortor. Etiam vel ipsum vehicula, dapibus
              nulla at, iaculis metus. Integer metus justo, laoreet quis quam a,
              feugiat placerat nulla. Mauris quis lorem dignissim, luctus lorem
              nec, accumsan elit.
            </Text>
          </Stack>
        </GridColumn>
      </GridRow>
      <InputHeader
        title={'4.2 Bifreiðar'}
        columnTitles={['Bílnúmer', 'Kaupár', 'Kaupverð']}
      />
      {assets06.map((item: FieldType, index: number) => {
        if (!item.value) {
          return undefined
        }

        return (
          <InputBox3Columns
            key={`assets06_${index}`}
            control={control}
            title={item.title}
            id={`assets06.${index}.value`}
            text={item.text}
            label={item.fieldNo}
          />
        )
      })}

      <InputBox2Columns
        id="totalVehicles"
        title="Heildar kaupverð bifreiða"
        control={control}
        label="Samtals"
        summary
      />

      <GridRow marginTop={'containerGutter'}>
        <GridColumn span="12/12">
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="ghost">Bæta við +</Button>
          </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  )
}

export default Vehicles
