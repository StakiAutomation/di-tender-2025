import {
  Box,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Text,
} from '@island.is/island-ui/core'
import { InputController } from '@island.is/shared/form-fields'
import { Control } from 'react-hook-form'

interface RowProps2Columns {
  control?: Control | Control<any, string>
  title?: string
  id?: string
  summary?: boolean
  label?: string
}

interface RowProps3Columns {
  control?: Control | Control<any, string>
  title?: string
  text?: string
  id?: string
  label?: string
}

interface RowProps3Columns2Inputs {
  title?: string
  text?: string
  input1Id?: string
  input1Label?: string
  input1Control?: Control | Control<any, string>
  input2Id?: string
  input2Label?: string
  input2Control?: Control | Control<any, string>
  summary?: boolean
}

interface HeaderProps {
  title: string
  columnTitles?: string[]
}

export const InputBox2Columns = (props: RowProps2Columns) => (
  <>
    <Box flexWrap={'wrap'} paddingLeft={6}>
      <GridRow marginTop={2} marginBottom={1}>
        <GridColumn span="8/12">
          <Box marginTop={1} paddingTop={1}>
            {/*<Input*/}
            {/*    name={"fle"}*/}
            {/*    type={"text"}*/}
            {/*    label={"hello"}*/}
            {/*    value={props.title}*/}
            {/*    size={"sm"}*/}
            {/*/>*/}

            <Text variant={props.summary ? 'h4' : 'default'} textAlign="left">
              {props.title}
            </Text>
          </Box>
        </GridColumn>
        <GridColumn span="4/12">
          <InputController
            label={props.label}
            size={'sm'}
            rightAlign
            backgroundColor={'blue'}
            control={props.control}
            id={props.id ?? ''}
            type="number"
            currency
            thousandSeparator
            disabled={props.summary ? true : false}
          />
        </GridColumn>
      </GridRow>
    </Box>
    <Divider />
  </>
)

export const InputBox3Columns = (props: RowProps3Columns) => (
  <>
    <Box flexWrap={'wrap'} paddingLeft={6}>
      <GridRow marginTop={2} marginBottom={1}>
        <GridColumn span="4/12">
          <Box marginTop={1} paddingTop={1}>
            <Text variant="default" textAlign="left">
              {props.title}
            </Text>
          </Box>
        </GridColumn>
        <GridColumn span="4/12">
          <Box marginTop={1} paddingTop={1}>
            <Text variant="default" textAlign="left">
              {props.text}
            </Text>
          </Box>
        </GridColumn>
        <GridColumn span="4/12">
          <InputController
            label={props.label}
            size={'sm'}
            rightAlign
            backgroundColor={'blue'}
            control={props.control}
            id={props.id ?? ''}
            currency
            thousandSeparator
          />
        </GridColumn>
      </GridRow>
    </Box>
    <Divider />
  </>
)

export const InputBox3ColumnsWith2InputFields = (
  props: RowProps3Columns2Inputs,
) => (
  <>
    <Box flexWrap={'wrap'} paddingLeft={6}>
      <GridRow marginTop={2} marginBottom={1}>
        <GridColumn span="6/12">
          <Box marginTop={1} paddingTop={1}>
            <Text variant={props.summary ? 'h4' : 'default'} textAlign="left">
              {props.title}
            </Text>
          </Box>
        </GridColumn>
        <GridColumn span="3/12">
          <InputController
            label={props.input1Label}
            size={'sm'}
            rightAlign
            backgroundColor={'blue'}
            control={props.input1Control}
            id={props.input1Id ?? ''}
            currency
            thousandSeparator
            disabled={props.summary ? true : false}
          />
        </GridColumn>
        <GridColumn span="3/12">
          <InputController
            label={props.input2Label}
            size={'sm'}
            rightAlign
            backgroundColor={'blue'}
            control={props.input2Control}
            id={props.input2Id ?? ''}
            currency
            thousandSeparator
            disabled={props.summary ? true : false}
          />
        </GridColumn>
      </GridRow>
    </Box>
    <Divider />
  </>
)

export const InputHeader = (props: HeaderProps) => (
  <GridRow marginTop={2}>
    <GridColumn span="12/12">
      <Box background="blue100" paddingY={1} paddingLeft={2}>
        <GridContainer>
          <GridRow>
            <Box paddingX={4}>
              <Text variant="eyebrow">{props.title}</Text>
            </Box>
          </GridRow>
          {props?.columnTitles?.length == 2 && (
            <GridRow>
              <GridColumn span="8/12">
                <Box paddingX={4}>
                  <Text variant="small" color={'dark350'}>
                    {props.columnTitles[0]}
                  </Text>
                </Box>
              </GridColumn>

              <GridColumn span="4/12">
                <Text variant="small" color={'dark350'}>
                  {props.columnTitles[1]}
                </Text>
              </GridColumn>
            </GridRow>
          )}

          {props.columnTitles?.length == 3 && (
            <GridRow>
              <GridColumn span="4/12">
                <Box paddingX={4}>
                  <Text variant="small" color={'dark350'}>
                    {props.columnTitles[0]}
                  </Text>
                </Box>
              </GridColumn>

              <GridColumn span="4/12">
                <Box paddingX={4}>
                  <Text variant="small" color={'dark350'}>
                    {props.columnTitles[1]}
                  </Text>
                </Box>
              </GridColumn>

              <GridColumn span="4/12">
                <Text variant="small" color={'dark350'}>
                  {props.columnTitles[2]}
                </Text>
              </GridColumn>
            </GridRow>
          )}
        </GridContainer>
      </Box>
    </GridColumn>
  </GridRow>
)

export const InputHeaderFor3ColumnsAnd2Inputs = (props: HeaderProps) => (
  <GridRow marginTop={2}>
    <GridColumn span="12/12">
      <Box background="blue100" paddingY={1} paddingLeft={2}>
        <GridContainer>
          <GridRow>
            <Box paddingX={4}>
              <Text variant="eyebrow">{props.title}</Text>
            </Box>
          </GridRow>

          <GridRow>
            <GridColumn span="6/12">
              <Box paddingX={4}>
                <Text variant="small" color={'dark350'}>
                  {props.columnTitles?.[0]}
                </Text>
              </Box>
            </GridColumn>

            <GridColumn span="3/12">
              <Box paddingX={4}>
                <Text variant="small" color={'dark350'}>
                  {props.columnTitles?.[1]}
                </Text>
              </Box>
            </GridColumn>

            <GridColumn span="3/12">
              <Text variant="small" color={'dark350'}>
                {props.columnTitles?.[2]}
              </Text>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Box>
    </GridColumn>
  </GridRow>
)
