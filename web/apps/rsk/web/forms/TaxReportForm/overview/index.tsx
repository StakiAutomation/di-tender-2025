import { DataValue } from '@island.is/application/ui-components'
import {
  Box,
  Button,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Stack,
  Text,
  Table as T,
} from '@island.is/island-ui/core'
import { useFormContext } from 'react-hook-form'
import kennitala from 'kennitala'
import { formatPhoneNumber } from '@island.is/application/ui-components'
// eslint-disable-next-line no-restricted-imports
import _ from 'lodash'
import { formatCurrency } from '@island.is/shared/utils'

interface OverviewProps {
  changeStep: (step: number) => void
}

interface AssetEntry {
  fieldNo: string
  title: string
  value: string
  text: string
}

interface GroupedAsset {
  fieldNo: string
  title: string
  totalAmount: number
}

enum Steps {
  PersonalInfo = 1,
  Income = 2,
  Assets = 3,
  Debt = 4,
}

export const Overview = (props: OverviewProps) => {
  const formContext = useFormContext()

  const taxPayer = formContext.watch('skattgreidandi')
  const familyIdentifer = formContext.watch('fjolskyldumerking')
  const totalRemainingDebt = formContext.watch('totalRemainingDept')
  const totalDebtInterest = formContext.watch('totalDeptInterest')
  const debt = formContext.watch('skuldir')

  const housingDebt = debt.find((d: any) => !Boolean(d.titill))

  const incomeValues = _.flatten(
    Object.entries(formContext.watch())
      .filter(([key, value]) => key.startsWith('income') && value[0]?.value)
      .map(([_, value]) => value),
  )

  const groupAssetsByFieldNo = (assets: AssetEntry[]): GroupedAsset[] => {
    const grouped = assets.reduce((acc, curr) => {
      if (!acc[curr.fieldNo]) {
        acc[curr.fieldNo] = {
          fieldNo: curr.fieldNo,
          title: curr.fieldNo === '06' ? 'Bifreiðir' : 'Innlendar fasteignir',
          totalAmount: 0,
        }
      }

      acc[curr.fieldNo].totalAmount += parseInt(curr.value, 10)

      return acc
    }, {} as Record<string, GroupedAsset>)

    return Object.values(grouped)
  }

  const assetsValues = _.flatten(
    Object.entries(formContext.watch())
      .filter(([key, value]) => key.startsWith('assets') && value[0]?.value)
      .map(([_, value]) => value),
  )

  const groupedAssets = groupAssetsByFieldNo(assetsValues)

  return (
    <GridContainer>
      <GridRow>
        <GridColumn span="12/12">
          <Stack space={3}>
            <Text variant="h2">Yfirlit skattframtals</Text>
            <Text>
              Vinsamlegast farðu yfir gögnin hér að neðan til að staðfesta að
              réttar upplýsingar hafi verið gefnar upp.
            </Text>
          </Stack>
        </GridColumn>
      </GridRow>

      <Box marginTop={4} marginBottom={8}>
        <Divider />
      </Box>

      <GridRow rowGap={2}>
        <GridColumn span={['1/2']}>
          <Text variant="h5">Persónuupplýsingar</Text>
        </GridColumn>
        <GridColumn span={['1/2']}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => props.changeStep(Steps.PersonalInfo)}
              icon="pencil"
              variant="ghost"
              size="small"
            >
              Breyta
            </Button>
          </div>
        </GridColumn>

        <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
          <DataValue label="Nafn" value={taxPayer.person.nafn} />
        </GridColumn>
        <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
          <DataValue
            label="Kennitala"
            value={kennitala.format(taxPayer.kennitala)}
          />
        </GridColumn>
        <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
          <DataValue label="Heimili" value={taxPayer.person.heimilisfang} />
        </GridColumn>
        <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
          <DataValue label="Netfang" value={taxPayer.netfang} />
        </GridColumn>
        <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
          <DataValue
            label="Símanúmer"
            value={formatPhoneNumber(taxPayer.simanumer)}
          />
        </GridColumn>
        <GridColumn span={['12/12', '12/12', '12/12', '5/12']}>
          <DataValue label="Fjölskyldumerking" value={familyIdentifer} />
        </GridColumn>
      </GridRow>

      <Box marginTop={4} marginBottom={8}>
        <Divider />
      </Box>

      <GridRow rowGap={2}>
        <GridColumn span={['1/2']}>
          <Text variant="h5">Tekjur ársins</Text>
        </GridColumn>
        <GridColumn span={['1/2']}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => props.changeStep(Steps.Income)}
              icon="pencil"
              variant="ghost"
              size="small"
            >
              Breyta
            </Button>
          </div>
        </GridColumn>
        <GridColumn span={['1/1']}>
          <T.Table>
            <T.Head>
              <T.Row>
                <T.HeadData>2</T.HeadData>
                <T.HeadData>Samanlagðar tekjur ársins</T.HeadData>
                <T.HeadData>Tekjur</T.HeadData>
              </T.Row>
            </T.Head>
            <T.Body>
              {incomeValues.map((i) => (
                <T.Row key={i.fieldNo}>
                  <T.Data>{i.fieldNo}</T.Data>
                  <T.Data>{i.title}</T.Data>
                  <T.Data align="right">{formatCurrency(i.value)}</T.Data>
                </T.Row>
              ))}
              <T.Row>
                <T.Data></T.Data>
                <T.Data>
                  <Text fontWeight="semiBold" variant="eyebrow">
                    Samtals tekjur í lok árs
                  </Text>
                </T.Data>
                <T.Data align="right">
                  <Text fontWeight="semiBold" variant="eyebrow">
                    {formatCurrency(
                      incomeValues.reduce(
                        (acc, elem) => parseInt(elem.value) + acc,
                        0,
                      ),
                    )}
                  </Text>
                </T.Data>
              </T.Row>
            </T.Body>
          </T.Table>
        </GridColumn>
      </GridRow>

      <Box marginTop={4} marginBottom={8}>
        <Divider />
      </Box>

      <GridRow rowGap={2}>
        <GridColumn span={['1/2']}>
          <Text variant="h5">Eignir í árslok</Text>
        </GridColumn>
        <GridColumn span={['1/2']}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => props.changeStep(Steps.Assets)}
              icon="pencil"
              variant="ghost"
              size="small"
            >
              Breyta
            </Button>
          </div>
        </GridColumn>
        <GridColumn span={['1/1']}>
          <T.Table>
            <T.Head>
              <T.Row>
                <T.HeadData>4</T.HeadData>
                <T.HeadData>Samanlagðar eignir í lok árs</T.HeadData>
                <T.HeadData>Eignir</T.HeadData>
              </T.Row>
            </T.Head>
            <T.Body>
              {groupedAssets.map((i) => (
                <T.Row key={i.fieldNo}>
                  <T.Data>{i.fieldNo}</T.Data>
                  <T.Data>{i.title}</T.Data>
                  <T.Data align="right">{formatCurrency(i.totalAmount)}</T.Data>
                </T.Row>
              ))}
              <T.Row>
                <T.Data></T.Data>
                <T.Data>
                  <Text fontWeight="semiBold" variant="eyebrow">
                    Samtals eignir í lok árs
                  </Text>
                </T.Data>
                <T.Data align="right">
                  <Text fontWeight="semiBold" variant="eyebrow">
                    {formatCurrency(
                      groupedAssets.reduce(
                        (acc, elem) => elem.totalAmount + acc,
                        0,
                      ),
                    )}
                  </Text>
                </T.Data>
              </T.Row>
            </T.Body>
          </T.Table>
        </GridColumn>
      </GridRow>

      <Box marginTop={4} marginBottom={8}>
        <Divider />
      </Box>

      <GridRow rowGap={2}>
        <GridColumn span={['1/2']}>
          <Text variant="h5">Skuldir og vaxtagjöld</Text>
        </GridColumn>
        <GridColumn span={['1/2']}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => props.changeStep(Steps.Debt)}
              icon="pencil"
              variant="ghost"
              size="small"
            >
              Breyta
            </Button>
          </div>
        </GridColumn>
        <GridColumn span={['1/1']}>
          <T.Table>
            <T.Head>
              <T.Row>
                <T.HeadData>Samanlögð gjöld og eftirstöðvar skulda</T.HeadData>
                <T.HeadData>Vaxtagjöld</T.HeadData>
                <T.HeadData>Eftirstöðvar skulda</T.HeadData>
              </T.Row>
            </T.Head>
            <T.Body>
              <T.Row>
                <T.Data>Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota</T.Data>
                <T.Data>{formatCurrency(housingDebt.vaxtagjold)}</T.Data>
                <T.Data>{formatCurrency(housingDebt.eftirstodvar)}</T.Data>
              </T.Row>
              <T.Row>
                <T.Data>Aðrar skuldir og vaxtargjöld</T.Data>
                <T.Data>{formatCurrency(totalDebtInterest)}</T.Data>
                <T.Data>{formatCurrency(totalRemainingDebt)}</T.Data>
              </T.Row>
              <T.Row>
                <T.Data>
                  <Text fontWeight="semiBold" variant="eyebrow">
                    Samtals skuldir og vaxtagjöld
                  </Text>
                </T.Data>
                <T.Data>
                  <Text fontWeight="semiBold" variant="eyebrow">
                    {formatCurrency(
                      parseInt(housingDebt.vaxtagjold) +
                        parseInt(totalDebtInterest),
                    )}
                  </Text>
                </T.Data>
                <T.Data>
                  <Text fontWeight="semiBold" variant="eyebrow">
                    {formatCurrency(
                      parseInt(housingDebt.eftirstodvar) +
                        parseInt(totalRemainingDebt),
                    )}
                  </Text>
                </T.Data>
              </T.Row>
            </T.Body>
          </T.Table>
        </GridColumn>
      </GridRow>
    </GridContainer>
  )
}
export default Overview
