import gql from 'graphql-tag'

export const RSKAllTaxRefundsQuery = gql`
  query rskAllTaxRefundsQuery($input: RecyclingPartnerInput!) {
    rskAllTaxRefunds(input: $input) {
      id
    }
  }
`

export const UpdateRskCurrentTaxReturn = gql`
  mutation updateRskCurrentTaxReturn($taxReturn: TaxReturnInput!) {
    updateCurrentTaxReturn(taxReturn: $taxReturn)
  }
`

export const SubmitCurrentTaxReturn = gql`
  mutation submitCurrentTaxReturn($kennitala: String!) {
    submitCurrentTaxReturn(kennitala: $kennitala)
  }
`

export const RskCurrentTaxReturnQuery = gql`
  query rskCurrentTaxReturnQuery($kennitala: String!) {
    getCurrentTaxReturn(kennitala: $kennitala) {
      id
      ar
      eitt_uppgjor
      slysatrygging_heimilisstorf
      fjolskyldumerking
      skattgreidandi {
        id
        kennitala
        netfang
        simanumer
        person {
          kennitala
          nafn
          heimilisfang
          tegund
        }
      }
      stada {
        id
        nafn
        kodi
      }
      eignir {
        id
        titill
        numer
        heimilisfang
        kaupar
        upphaed
        tegund {
          id
          nafn
        }
        reitur {
          id
          numer
          nafn
          lysing
          hopur {
            id
            numer
            nafn
          }
        }
      }
      tekjur {
        id
        titill
        upphaed
        kennitala_greidanda
        reitur {
          id
          numer
          nafn
          lysing
          hopur {
            id
            numer
            nafn
          }
        }
        greidandi {
          kennitala
          nafn
          heimilisfang
          tegund
        }
      }
      skuldir {
        id
        titill
        vaxtagjold
        eftirstodvar
        kaupar
        stadsetning
        fastanumer
        kennitala_lanveitanda
        lansnumer
        lantokudagur
        lanstimi_i_arum
        heildargreidslur_arsins
        afborgun_nafnverd
        tegund {
          id
          nafn
        }
        lanveitandi {
          kennitala
          nafn
          heimilisfang
          tegund
        }
      }
    }
  }
`

export const NationalRegisteryQuery = gql`
  query nationalRegisteryQuery($filter: String!) {
    getFromNationalRegistry(kennitala: $filter) {
      nationalId
      name
      genderName
      genderCode
      streetName
      houseNumber
      postalCode
      municipality
      country
      countryCode
      typeName
      typeCode
    }
  }
`
