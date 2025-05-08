import { FieldType, Skuld, TaxReturn, TaxReturnDto } from './types'

export const mapTaxReturn = (taxReturn: TaxReturn) => {
  mapIncome(taxReturn)
  console.log('taxReturn', taxReturn)
  return {
    ...taxReturn,
    ...mapIncome(taxReturn),
    ...mapAssets(taxReturn),
    otherDepts: mapRelestateDepts(taxReturn),
    allData: taxReturn,
  }
}

const mapIncome = (taxReturn: TaxReturn) => {
  const allIncomes = taxReturn.tekjur.map((item) => {
    return {
      fieldNo: item.reitur.numer,
      title: item.titill || '',
      value: item.upphaed.toString(),
      nationalId: item.kennitala_greidanda,
      name: item.titill,
    }
  })

  const fieldNumbers = [
    21, 22, 23, 40, 43, 96, 131, 134, 135, 136, 140, 145, 163, 197, 243,
  ]

  return fieldNumbers.reduce((acc: Record<string, FieldType[]>, fieldNo) => {
    acc[`income${fieldNo}`] =
      allIncomes.filter(
        (item: FieldType) => item.fieldNo === fieldNo.toString(),
      ) || []
    return acc
  }, {} as Record<string, FieldType[]>)
}

const mapAssets = (taxReturn: TaxReturn) => {
  const allAssets = taxReturn.eignir.map((item) => {
    return {
      fieldNo: item.reitur.numer,
      title: item.numer || '',
      value: item.upphaed.toString(),
      text: item.heimilisfang || item.kaupar || undefined,
    }
  })

  const fieldNumbers = ['06', '314']

  return fieldNumbers.reduce((acc: Record<string, FieldType[]>, fieldNo) => {
    acc[`assets${fieldNo}`] =
      allAssets.filter(
        (item: FieldType) => item.fieldNo === fieldNo.toString(),
      ) || []
    return acc
  }, {} as Record<string, FieldType[]>)
}

const mapRelestateDepts = (taxReturn: TaxReturn) => {
  const allDepts = taxReturn.skuldir

  const otherDepts = allDepts
    .filter((item: Skuld) => {
      if (Number(item.tegund.id) === 2) {
        return item
      }
    })
    .map((item) => {
      return {
        fieldNo: '168',
        title: item.titill || ' ',
        value1: item.vaxtagjold,
        value2: item.eftirstodvar,
        text: item.titill,
      }
    })

  return otherDepts
}

export const mapToDtoData = (data: any): TaxReturnDto => {
  console.log('onSubmit', data)

  const returnData = {
    kennitala: data.skattgreidandi.kennitala,
    eitt_uppgjor: data.eitt_uppgjor,
    slysatrygging_heimilisstorf: data.slysatrygging_heimilisstorf,
    tekjur: mapIncomeToDto(data),
    eignir: mapAssetsToDto(data),
  }

  console.log('returnData', returnData)

  return returnData
}

const mapIncomeToDto = (data: any) => {
  const fieldNumbers = [
    21, 22, 23, 40, 43, 96, 131, 134, 135, 136, 140, 145, 163, 197, 243,
  ]

  console.log('mapIncomeToDto', data)

  const mergedIncomes = fieldNumbers
    .map((num) =>
      data[`income${num}`]?.map((item: any) => {
        return {
          titill: item.title || '',
          upphaed: +item.value,
          reitur: num.toString(),
          greidandi: item?.name?.name || '',
          kennitala_greidanda: item.nationalId,
        }
      }),
    )
    .flat()
    .filter((item) => !isNaN(item.upphaed))

  return mergedIncomes
}

const mapAssetsToDto = (data: any) => {
  const fieldNumbers = ['06', '314']

  const assests = fieldNumbers
    .map((num) =>
      data[`assets${num}`]?.map((item: any) => {
        return {
          titill: item.title || '',
          upphaed: +item.value,
          reitur: num.toString(),
        }
      }),
    )
    .flat()

  return assests
}
