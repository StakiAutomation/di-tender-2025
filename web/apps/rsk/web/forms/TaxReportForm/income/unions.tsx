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

import { FC, useEffect } from 'react'
import {
  InputBox2Columns,
  InputHeader,
} from 'apps/rsk/web/components/InputBox/InputBox'
import { FieldType } from 'apps/rsk/web/lib/types'

export const Unions: FC<React.PropsWithChildren<unknown>> = () => {
  const { control, watch, setValue } = useFormContext()

  const fieldNumers = [40, 43, 140, 145, 163, 197, 131, 243]

  const incomes = fieldNumers.map((fieldNumber) =>
    watch(`income${fieldNumber}`),
  )
  const income96 = watch('income96')

  useEffect(() => {
    const total = incomes.reduce((sum, income, index) => {
      const fieldValue = income[0]?.value || 0
      return sum + +fieldValue
    }, 0)

    setValue('totalUnions', total)
  }, [JSON.stringify(incomes)])

  useEffect(() => {
    const total = income96.reduce(
      (total: number, item: FieldType) => total + (parseFloat(item.value) || 0),
      0,
    )
    setValue('totalOtherUnions', total.toString())
  }, [JSON.stringify(income96)])

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
      <InputHeader
        title={'2.3 Ökutækjastyrkur, Dagpeningar og hlunnindir'}
        columnTitles={[]}
      />
      <InputBox2Columns
        control={control}
        title="Greiðslur frá Trygginastofnun ríkisins"
        id="income40.0.value"
        label="40"
      />
      <InputBox2Columns
        control={control}
        title="Greiðslur úr almennum lífeyrissjóðum"
        id="income43.0.value"
        label="43"
      />
      <InputBox2Columns
        control={control}
        title="Lífeyrisgreiðslur úr “séreignasjóðum"
        id="income140.0.value"
        label="140"
      />
      <InputBox2Columns
        control={control}
        title="Atvinnuleysisbætur"
        id="income163.0.value"
        label="163"
      />
      <InputBox2Columns
        control={control}
        title="Félagsleg aðstoð og aðrir styrkir og bætur frá sveitarfélögum"
        id="income197.0.value"
        label="197"
      />
      <InputBox2Columns
        control={control}
        title="Styrkir til náms, rannsóknar- og vísindastarfa (heildarfjárhæð)"
        id="income131.0.value"
        label="131"
      />
      <InputBox2Columns
        control={control}
        title="Ráðstöfun/útborgun úr séreignasjóði vegna íbúðarkaupa umfram skattfrjálst, sbr kafla 2.9"
        id="income243.0.value"
        label="243"
      />
      <InputBox2Columns
        id="totalUnions"
        title="Heildar greiðslur"
        control={control}
        label="Samtals"
        summary
      />

      <InputHeader title={'Aðrar bótagreiðslur, styrkir'} columnTitles={[]} />
      {income96.map((item: FieldType, index: number) => {
        if (!item.value) {
          return undefined
        }

        const i = index

        return (
          <InputBox2Columns
            key={`income_${i}`}
            control={control}
            title={item.title}
            id={`income96.${i}.value`}
            label={item.fieldNo}
          />
        )
      })}
      <InputBox2Columns
        key="totalOtherUnions"
        id="totalOtherUnions"
        title="Heildar greiðslur"
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

export default Unions
