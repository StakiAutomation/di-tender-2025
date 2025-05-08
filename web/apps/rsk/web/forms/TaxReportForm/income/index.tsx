import {
  AsyncSearch,
  AsyncSearchOption,
  Button,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Icon,
  Stack,
  Table as T,
} from '@island.is/island-ui/core'
import { useFormContext } from 'react-hook-form'

import { Text } from '@island.is/island-ui/core'
import {
  InputBox2Columns,
  InputHeader,
} from 'apps/rsk/web/components/InputBox/InputBox'
import { FC, useEffect, useState } from 'react'
import { FieldType } from 'apps/rsk/web/lib/types'
import { InputController } from '@island.is/shared/form-fields'
import {useLazyQuery, useQuery} from "@apollo/client";
import {Query} from "@testing-library/react";
import {NationalRegisteryQuery} from "../../../graphql";

export const Income: FC<React.PropsWithChildren<unknown>> = () => {
  const { control, watch, setValue } = useFormContext()
  const income = watch('income21')
  const [showNewIncome, setShowNewIncome] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [newOption, setNewOption] = useState<AsyncSearchOption | null>(null)
  const [searchResults, setSearchResults] = useState<AsyncSearchOption[]>([])

  useEffect(() => {
    const total = income.reduce(
      (total: number, item: FieldType) => total + (parseFloat(item.value) || 0),
      0,
    )
    setValue('totalSalary', total.toString())
  }, [JSON.stringify(income)])



  const onClickNewIncome = () => {
    console.log(JSON.stringify(income));
    setNewOption(null);
    setValue('newPayeeAmount', 0);
    setShowNewIncome(true);
    // const income21AdditionalName = watch('income21AdditionalName')
    // const income21AdditionalValue = watch('income21AdditionalValue')
    // console.log('click me', income21AdditionalName, income21AdditionalValue)
    //
    // setValue('income', {
    //   fieldNo: '21',
    //   title: income21AdditionalName,
    //   value: income21AdditionalValue,
    // })
  }

  const onClickStoreNewIncome = () => {

    const newAmount = watch('newPayeeAmount');
    const newPayeeName = newOption?.label;
    const newPayeeKt = newOption?.value;
    if (newPayeeName != "" && newAmount != 0) {
      income.push({"fieldNo": "21","title": newPayeeName,"value": newAmount, "nationalId": newPayeeKt, "name": newPayeeName})
    }
    console.log(JSON.stringify(income));
    setShowNewIncome(false);

  }
  //
  const [
    getFromNationalRegister,
    {
      data: nationalRegistrySearchResults,
      error: nationalRegistrySearchError,
      loading: nationalRegistrySearchLoading,
    },
  ] = useLazyQuery<Query>(NationalRegisteryQuery, {
    variables :{filter:searchString},
  })

  const searchForPayee = (text:string)=> {
    getFromNationalRegister();
    var newSearchResults:AsyncSearchOption[] = [];
    console.log("searchresults: " + JSON.stringify(nationalRegistrySearchResults));
    if (nationalRegistrySearchResults != undefined) {
      const results = (nationalRegistrySearchResults as any).getFromNationalRegistry;
      // console.log(JSON.stringify(results));
      console.log("count " + results.length);
      for (const resultNumber in (nationalRegistrySearchResults as any).getFromNationalRegistry) {
        const res = (nationalRegistrySearchResults as any).getFromNationalRegistry[resultNumber];
        console.log(res);
        const name = res.name;
        const kennitala = res.nationalId;
        console.log("name: " + name);
        console.log("kt: " + kennitala);
        newSearchResults.push({label:name, value:kennitala} as AsyncSearchOption);
      }

    }
    // const name = nationalRegistrySearchResults.getFromNationalRegistry.name;
    // const kennitala = nationalRegistrySearchResults.getFromNationalRegistry.nationalId;
    // console.log("name: " + name);



    // results.push({label:name, value:kennitala} as AsyncSearchOption);
    // results.push({label:"niðurstaða 2", value:"kennitala 2"} as AsyncSearchOption);
    setSearchResults(newSearchResults);
  }

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
      <InputHeader title={'2.1 Launatekjur og starfstengdar greiðslur'} />

      {income.map((item: FieldType, index: number) => {
        if (!item.value) {
          return undefined
        }

        return (
          <InputBox2Columns
            key={`income_${index}`}
            control={control}
            title={item.title}
            id={`income21.${index}.value`}
            label={item.fieldNo}
          />
        )
      })}

      <InputBox2Columns
        key="totalSalary"
        control={control}
        title="Heildar greiðslur"
        id="totalSalary"
        summary
        label="Samtals"
      />


        {showNewIncome ? (
          <>
          <GridRow marginTop={'containerGutter'}>
            <GridColumn span="12/12">
              <Text variant="h4">Skráning tekna</Text>
            </GridColumn>
          </GridRow>
          <GridRow marginTop={'p5'}>
            <GridColumn span="6/12">

              <AsyncSearch
                size={'semi-large'}
                key="fle"
                placeholder={"leitaðu eftir nafni eða kennitölu"}
                loading={nationalRegistrySearchLoading}
                inputValue={searchString}
                onInputValueChange={(value) => {
                  setSearchString((prevValue) => {
                    searchForPayee(value);
                    return value
                  })
                }}
                onChange={(option) => {
                    setNewOption(option);
                }}
                options={searchResults}
                closeMenuOnSubmit
                onSubmit={(value, selectedOption) => {

                }}
              />

              {/*<InputController*/}
              {/*  label="Greiðandi"*/}
              {/*  size={'sm'}*/}
              {/*  rightAlign*/}
              {/*  backgroundColor={'blue'}*/}
              {/*  control={control}*/}
              {/*  id="newPayeeName"*/}
              {/*  type="text"*/}
              {/*  disabled={false}*/}
              {/*/>*/}
            </GridColumn>
            <GridColumn span="6/12">
              <InputController
                label="Upphæð"
                size={'sm'}
                rightAlign
                backgroundColor={'blue'}
                control={control}
                id="newPayeeAmount"
                type="number"
                currency
                thousandSeparator
                onChange={() => {}}
                disabled={false}
              />
            </GridColumn>
          </GridRow>
          <GridRow marginTop={'containerGutter'}>
            <GridColumn span="12/12">
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="ghost" onClick={() => onClickStoreNewIncome()}>Vista nýjar tekjur</Button>
              </div>
            </GridColumn>
          </GridRow>
          </>
          )
        : (
            <GridRow marginTop={'containerGutter'}>
          <GridColumn span="12/12">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="ghost" onClick={() => onClickNewIncome()}>Bæta við +</Button>
            </div>
          </GridColumn>
            </GridRow>
        )}

    </GridContainer>
  )
}

export default Income
