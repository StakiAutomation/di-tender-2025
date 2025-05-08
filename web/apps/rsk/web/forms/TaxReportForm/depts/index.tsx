import {
  Button,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
} from '@island.is/island-ui/core'
import { useFormContext } from 'react-hook-form'

import { Text } from '@island.is/island-ui/core'
import { FC } from 'react'

import { DataValue } from '@island.is/application/ui-components'
import {
  DatePickerController,
  InputController,
} from '@island.is/shared/form-fields'

export const Depts: FC<React.PropsWithChildren<unknown>> = () => {
  const { control } = useFormContext()

  return (
    <GridContainer>
      <Stack space={3}>
        <GridRow>
          <GridColumn span="12/12">
            <Stack space={3}>
              <Text variant="h2">Skuldir og vaxtargjöld</Text>
              <Text>
                Vinsamlegast farið yfir netfang og símanúmer til að tryggja að
                þær upplýsingar séu réttar. Netfangi er breytt hér. Athugið að
                ef að aðrar upplýsingar eru ekki réttar þarft þú að hafa samband
                við Þjóðskrá og fara fram á breytingu.
              </Text>
            </Stack>
          </GridColumn>
        </GridRow>
        <GridRow marginTop={3}>
          <GridColumn span="8/12">
            <Text variant="h3">
              5.2 Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota
            </Text>

            <GridRow marginTop={3}>
              <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
                <DataValue
                  value="Furuás 45"
                  label="Staðsetning íbúðarhúsnæðis:"
                ></DataValue>
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
                <DataValue value="2018" label="Kaupár:"></DataValue>
              </GridColumn>
            </GridRow>
          </GridColumn>
          <GridColumn span="4/12">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="ghost">Bæta við láni +</Button>
            </div>
          </GridColumn>
        </GridRow>

        <GridRow marginTop={3}>
          <GridColumn span="12/12">
            <InputController
              id="skuldir[0].lanveitandi.nafn"
              placeholder=""
              control={control}
              label="1 a,b Lánveitandi"
              readOnly
            />
          </GridColumn>
        </GridRow>
        <GridRow marginTop={3}>
          <GridColumn span="6/12">
            <InputController
              id="skuldir[0].lansnumer"
              placeholder=""
              control={control}
              label="1c Lánsnúmer"
              backgroundColor="blue"
            />
          </GridColumn>
          <GridColumn span="6/12">
            <DatePickerController
              id="skuldir[0].lantokudagur"
              placeholder=""
              label="2 Lántökudagur"
              readOnly
            />
          </GridColumn>
        </GridRow>
        <GridRow marginTop={3}>
          <GridColumn span="6/12">
            <InputController
              id="skuldir[0].lanstimi_i_arum"
              placeholder=""
              control={control}
              label="3 Lánstími í árum"
              type="number"
              backgroundColor="blue"
            />
          </GridColumn>
          <GridColumn span="6/12">
            <InputController
              id="skuldir[0].heildargreidslur_arsins"
              placeholder=""
              label="5 Heildargreiðslur ársins"
              currency
              thousandSeparator
              backgroundColor="blue"
            />
          </GridColumn>
        </GridRow>
        <GridRow marginTop={3}>
          <GridColumn span="4/12">
            <InputController
              id="skuldir[0].afborgun_nafnverd"
              placeholder=""
              control={control}
              label="6 Afborgun á nafnverði"
              currency
              thousandSeparator
              backgroundColor="blue"
            />
          </GridColumn>
          <GridColumn span="4/12">
            <InputController
              id="skuldir[0].vaxtagjold"
              placeholder=""
              label="9 Vaxtagjöld"
              currency
              thousandSeparator
              backgroundColor="blue"
            />
          </GridColumn>
          <GridColumn span="4/12">
            <InputController
              id="skuldir[0].eftirstodvar"
              placeholder=""
              label="10 Eftirstöðvar skulda"
              currency
              thousandSeparator
              backgroundColor="blue"
            />
          </GridColumn>
        </GridRow>
      </Stack>
    </GridContainer>
  )
}

export default Depts
