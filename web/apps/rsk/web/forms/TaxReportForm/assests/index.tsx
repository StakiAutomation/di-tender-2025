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

export const Assets: FC<React.PropsWithChildren<unknown>> = () => {
  const { control, watch, setValue } = useFormContext()

  const assets314 = watch('assets314')

  useEffect(() => {
    const total = assets314.reduce(
      (total: number, item: FieldType) => total + (parseFloat(item.value) || 0),
      0,
    )
    setValue('totalAssets', total.toString())
  }, [JSON.stringify(assets314)])

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
        title={'4.1 Innlendar fasteignir'}
        columnTitles={['Fastanúmer', 'Heimilisfang', 'Fasteignamat']}
      />

      {assets314.map((item: FieldType, index: number) => {
        if (!item.value) {
          return undefined
        }

        const i = index

        return (
          <InputBox3Columns
            key={`assets_${i}`}
            control={control}
            title={item.title}
            id={`assets314.${i}.value`}
            label={item.fieldNo}
            text={item.text}
          />
        )
      })}

      <InputBox2Columns
        id="totalAssets"
        title="Heildar fasteignamat"
        control={control}
        summary
        label="Samtals"
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

export default Assets
