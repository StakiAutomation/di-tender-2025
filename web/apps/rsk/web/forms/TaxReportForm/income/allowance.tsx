import {
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
} from '@island.is/island-ui/core'
import { useFormContext } from 'react-hook-form'

import { Text } from '@island.is/island-ui/core'
import {
  InputBox2Columns,
  InputHeader,
} from 'apps/rsk/web/components/InputBox/InputBox'
import { FieldType } from 'apps/rsk/web/lib/types'
import { FC, useEffect } from 'react'

export const Allowance: FC<React.PropsWithChildren<unknown>> = () => {
  const { control, watch, setValue } = useFormContext()

  const fieldNumers = [22, 23, 134, 136]

  const incomes = fieldNumers.map((fieldNumber) =>
    watch(`income${fieldNumber}`),
  )

  const income135 = watch('income135')

  useEffect(() => {
    const total = incomes.reduce((sum, income, index) => {
      const fieldValue = income[0]?.value || 0
      return sum + +fieldValue
    }, 0)

    setValue('totalAllowance', total)
  }, [JSON.stringify(incomes)])

  useEffect(() => {
    const total = income135.reduce(
      (total: number, item: FieldType) => total + (parseFloat(item.value) || 0),
      0,
    )
    setValue('totalotherSalary', total.toString())
  }, [JSON.stringify(income135)])

  return (
    <GridContainer>
      <GridRow>
        <GridColumn span="12/12">
          <Stack space={3}>
            <Text variant="h2">Tekjur</Text>
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
      <InputHeader title={'2.2 Ökutækjastyrkur, dagpeningar og hlunnindi'} />
      <InputBox2Columns
        control={control}
        title="Ökutækjastyrkur"
        label="22"
        id="income22.0.value"
      />
      <InputBox2Columns
        control={control}
        title="Dagpeningar"
        label="23"
        id="income23.0.value"
      />
      <InputBox2Columns
        control={control}
        title="Bifreiðahlunnindi"
        label="134"
        id="income134.0.value"
      />
      <InputBox2Columns
        control={control}
        title="Húsnæðishlunnindi"
        label="136"
        id="income136.0.value"
      />

      <InputBox2Columns
        key="totalAllowance"
        control={control}
        title="Heildar greiðslur"
        id="totalAllowance"
        summary
        label="Samtals"
      />
      <InputHeader title={'Önnur hlunnindi'} />

      {income135.map((item: FieldType, index: number) => {
        if (!item.value) {
          return undefined
        }

        return (
          <InputBox2Columns
            key={`income_${index}`}
            control={control}
            title={item.title}
            id={`income135.${index}.value`}
            label={item.fieldNo}
          />
        )
      })}

      <InputBox2Columns
        key="totalotherSalary"
        control={control}
        title="Heildar greiðslur"
        id="totalotherSalary"
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

export default Allowance
