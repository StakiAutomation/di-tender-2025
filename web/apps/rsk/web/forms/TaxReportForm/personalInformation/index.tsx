import { YES } from '@island.is/application/core'
import {
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
  Text,
} from '@island.is/island-ui/core'

import {
  CheckboxController,
  InputController,
} from '@island.is/shared/form-fields'

import React, { FC, useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'

export const PersonalInformation: FC<React.PropsWithChildren<unknown>> = () => {
  const { control, watch } = useFormContext()

  const accidentInsurance = watch('slysatrygging_heimilisstorf')
  const oneSettlement = watch('eitt_uppgjor')

  const [oneSettlementCheck, setOneSettlementCheck] = useState<string[]>([])
  const [accidentInsuranceCheckCheck, setAccidentInsuranceCheckCheck] =
    useState<string[]>([])

  useEffect(() => {
    if (oneSettlement) {
      setOneSettlementCheck(['yes'])
    }
  }, [oneSettlement])

  useEffect(() => {
    if (accidentInsurance) {
      setAccidentInsuranceCheckCheck(['yes'])
    }
  }, [accidentInsurance])

  return (
    <GridContainer>
      <Stack space={3}>
        <GridRow>
          <Stack space={3}>
            <Text variant="h2">Upplýsingar um þig</Text>
            <Text>
              Vinsamlegast farið yfir netfang og símanúmer til að tryggja að þær
              upplýsingar séu réttar. Netfangi er breytt hér. Athugið að ef að
              aðrar upplýsingar eru ekki réttar þarft þú að hafa samband við
              Þjóðskrá og fara fram á breytingu.
            </Text>
          </Stack>
        </GridRow>
        <GridRow>
          <GridColumn span="12/12">
            <InputController
              id="skattgreidandi.person.nafn"
              placeholder=""
              control={control}
              label="Fullt nafn"
              readOnly
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>
            <InputController
              id="skattgreidandi.kennitala"
              placeholder=""
              control={control}
              label="Kennitala"
              readOnly
            />
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>
            <InputController
              id="skattgreidandi.person.heimilisfang"
              placeholder=""
              control={control}
              label="Heimlisfang / póstfang"
              readOnly
            />
          </GridColumn>
        </GridRow>
        {/*<GridRow>*/}
        {/*  <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>*/}
        {/*    <InputController*/}
        {/*      id="postalCode"*/}
        {/*      placeholder=""*/}
        {/*      control={control}*/}
        {/*      label="Póstnúmer"*/}
        {/*      readOnly*/}
        {/*    />*/}
        {/*  </GridColumn>*/}
        {/*  <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>*/}
        {/*    <InputController*/}
        {/*      id="municipality"*/}
        {/*      placeholder=""*/}
        {/*      control={control}*/}
        {/*      label="Sveitarfélag"*/}
        {/*      readOnly*/}
        {/*    />*/}
        {/*  </GridColumn>*/}
        {/*</GridRow>*/}
        <GridRow>
          <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>
            <InputController
              id="skattgreidandi.netfang"
              placeholder=""
              control={control}
              label="Netfang"
              type="email"
              backgroundColor="blue"
            />
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>
            <InputController
              id="skattgreidandi.simanumer"
              placeholder=""
              control={control}
              label="Símarnúmer"
              type="tel"
              backgroundColor="blue"
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span="12/12">
            <CheckboxController
              backgroundColor="blue"
              large
              id="taxResidence"
              options={[
                {
                  value: YES,
                  label: 'Óskað eftir skattalegri heimilisfesti sjá RSK 3.26',
                },
              ]}
              defaultValue={oneSettlementCheck ? ['yes'] : []}
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span="12/12">
            <CheckboxController
              backgroundColor="blue"
              large
              id="splitPayment"
              options={[
                {
                  value: YES,
                  label:
                    'Óskað er eftir að gera upp alla álagninguna þann 1. júní, í stað þess að dreifa greiðslum',
                },
              ]}
            />
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span="12/12">
            <Text variant="h4">Slysatrygging við heimilsstörf</Text>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span="12/12">
            <CheckboxController
              backgroundColor="blue"
              large
              id="accidentInsurance"
              options={[
                {
                  value: YES,
                  label: 'Setjið x í reitinn ef óskað er slysatrygginga',
                },
              ]}
              defaultValue={accidentInsuranceCheckCheck ? ['yes'] : []}
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span="12/12">
            <Text variant="h4">Fyllist út af ríkisskattstjóra</Text>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>
            <InputController
              id="fjolskyldumerking"
              placeholder=""
              control={control}
              label="Fjölskyldumerking"
              readOnly
            />
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '12/12', '6/12']}>
            <InputController
              id="comment"
              placeholder=""
              control={control}
              label="Athugasemdir"
              readOnly
            />
          </GridColumn>
        </GridRow>
      </Stack>
    </GridContainer>
  )
}

export default PersonalInformation
