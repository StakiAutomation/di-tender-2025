import {
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
} from '@island.is/island-ui/core'
import { useFormContext } from 'react-hook-form'

import { Text } from '@island.is/island-ui/core'
import { FC, useEffect } from 'react'

import {
  InputBox3ColumnsWith2InputFields,
  InputHeaderFor3ColumnsAnd2Inputs,
} from 'apps/rsk/web/components/InputBox/InputBox'

export const OtherDepts: FC<React.PropsWithChildren<unknown>> = () => {
  const { control, watch, setValue } = useFormContext()
  const otherDepts = watch('otherDepts')

  useEffect(() => {
    const totalDeptInterest = otherDepts.reduce(
      (total: number, item: any) => total + (parseFloat(item.value1) || 0),
      0,
    )

    const totalRemainingDept = otherDepts.reduce(
      (total: number, item: any) => total + (parseFloat(item.value2) || 0),
      0,
    )

    setValue('totalDeptInterest', totalDeptInterest.toString())
    setValue('totalRemainingDept', totalRemainingDept.toString())
  }, [JSON.stringify(otherDepts)])

  return (
    <GridContainer>
      <GridRow>
        <GridColumn span="12/12">
          <Stack space={3}>
            <Text variant="h2">Skuldir og vaxtargjöld</Text>
            <Text>
              Vinsamlegast farið yfir netfang og símanúmer til að tryggja að þær
              upplýsingar séu réttar. Netfangi er breytt hér. Athugið að ef að
              aðrar upplýsingar eru ekki réttar þarft þú að hafa samband við
              Þjóðskrá og fara fram á breytingu.
            </Text>
          </Stack>
        </GridColumn>
      </GridRow>

      <InputHeaderFor3ColumnsAnd2Inputs
        title={'5.5 Aðrar skuldir og vaxtagjöld'}
        columnTitles={['', 'Vaxtagjöld', 'Eftirstöðvar skulda']}
      />
      {otherDepts.map((item: any, index: number) => {
        if (!item.value1) {
          return undefined
        }

        const i = index

        return (
          <InputBox3ColumnsWith2InputFields
            key={`otherDepts_${i}`}
            title={item.title}
            input1Id={`otherDepts.${i}.value1`}
            input1Control={control}
            input1Label="88"
            input2Id={`otherDepts.${i}.value2`}
            input2Control={control}
            input2Label="168"
          />
        )
      })}
      <InputBox3ColumnsWith2InputFields
        input1Id="totalDeptInterest"
        input1Control={control}
        input1Label="Samtals"
        title="Heildar greiðslur"
        input2Id="totalRemainingDept"
        input2Control={control}
        input2Label="Samtals"
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

export default OtherDepts
