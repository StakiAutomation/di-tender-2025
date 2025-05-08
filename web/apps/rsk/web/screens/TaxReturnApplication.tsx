import { useMutation, useQuery } from '@apollo/client'
import {
  Button,
  FormStepperThemes,
  GridColumn,
  GridContainer,
  GridRow,
  Section,
} from '@island.is/island-ui/core'
import { Query } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Authenticator from '../authentication/Authenticator'
import ContentLayout from '../components/Layout/ContentLayout/content-layout'
import { Layout } from '../components/Layout/Layout'
import { Prerequisites } from '../forms/Prerequisites'
import { PersonalInformation } from '../forms/TaxReportForm'
import Assets from '../forms/TaxReportForm/assests'
import OtherAssets from '../forms/TaxReportForm/assests/otherAssets'
import Vehicles from '../forms/TaxReportForm/assests/vehicles'
import Depts from '../forms/TaxReportForm/depts'
import OtherDepts from '../forms/TaxReportForm/depts/otherDepts'
import Income from '../forms/TaxReportForm/income'
import { Allowance } from '../forms/TaxReportForm/income/allowance'
import Unions from '../forms/TaxReportForm/income/unions'
import Overview from '../forms/TaxReportForm/overview'
import {
  RskCurrentTaxReturnQuery,
  SubmitCurrentTaxReturn,
  UpdateRskCurrentTaxReturn,
} from '../graphql'
import { mapTaxReturn, mapToDtoData } from '../lib/utils'

const Sections = [
  { name: 'Gagnaöflun', subSections: [] },
  { name: 'Upplýsingar um þig', subSections: [] },
  {
    name: 'Tekjur ársins',
    subSections: [
      { name: '2.1 Tekjur' },
      { name: '2.2 Hlunnindi' },
      { name: '2.3 Bótagreiðslur og styrkir' },
    ],
  },
  {
    name: 'Eignir',
    subSections: [
      { name: 'Fasteignir' },
      { name: 'Bifreiðar' },
      { name: 'Aðrar eignir' },
    ],
  },
  {
    name: 'Skuldir og vaxtagjöld',
    subSections: [
      { name: 'Vaxtagjöld vegna íbúðarhúsnæðis' },
      { name: 'Aðrar skuldir og vaxtagjöld' },
    ],
  },
  {
    name: 'Yfirlit',
    subSections: [],
  },
]

const TaxReturnApplication: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentSubsection, setCurrentSubsection] = useState(0)
  const [canContinue, setCanContinue] = useState<boolean>(false)

  const methods = useForm({
    mode: 'onChange',
  })

  const {
    reset,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods

  const handleNext = () => {
    if (
      Sections[currentStep].subSections.length > 0 &&
      currentSubsection < Sections[currentStep].subSections.length - 1
    ) {
      setCurrentSubsection(currentSubsection + 1)
    } else {
      if (currentStep < Sections.length - 1) {
        setCurrentStep(currentStep + 1)
        setCurrentSubsection(0)
      }
    }
  }

  const handleBack = () => {
    if (currentSubsection > 0) {
      setCurrentSubsection(currentSubsection - 1)
    } else {
      if (currentStep > 0) {
        const subsectionCount = Sections[currentStep - 1].subSections.length
        setCurrentStep(currentStep - 1)
        setCurrentSubsection(subsectionCount - 1)
      }
    }
  }

  const sectionItems = Sections.map((item, index) => (
    <Section
      key={index}
      isActive={currentStep === index}
      section={Sections[index].name}
      theme={FormStepperThemes.PURPLE}
      sectionIndex={index}
      isComplete={false}
      subSections={item.subSections.map((subSection, idx) => (
        <div key={idx}>{subSection.name}</div>
      ))}
    />
  ))

  const { data, error, loading } =
    useQuery<Query>(RskCurrentTaxReturnQuery, {
      variables: { kennitala: '1203894569' },
      fetchPolicy: 'no-cache',
    }) || []

  useEffect(() => {
    if (!loading && (data as any)?.getCurrentTaxReturn) {
      reset({ ...mapTaxReturn((data as any)?.getCurrentTaxReturn) })
    }
  }, [loading, data, reset])

  const [updateRskCurrentTaxReturn] = useMutation(UpdateRskCurrentTaxReturn, {
    onError(_) {
      console.error('Error updating tax refund')
    },
    // refetchQueries: [
    //   {
    //     query: SkilavottordAccessControlsQuery,
    //   },
    // ],
  })

  const [submitCurrentTaxReturn] = useMutation(SubmitCurrentTaxReturn, {
    onError(_) {
      console.error('Error updating tax refund')
    },
    // refetchQueries: [
    //   {
    //     query: SkilavottordAccessControlsQuery,
    //   },
    // ],
  })

  const onSubmit = async (data: any) => {
    const formattedData = mapToDtoData(data)

    const { errors } = await updateRskCurrentTaxReturn({
      variables: { taxReturn: formattedData },
    })

    if (errors) {
      console.error('Mutation error:', errors)
    }
  }

  const saveTaxReturn = async () => {
    const { data, errors } = await submitCurrentTaxReturn({
      variables: { kennitala: '1203894569' },
    })
  }

  if (loading) {
    return <>Hleð síðu</>
  }

  return (
    <Authenticator>
      <Layout>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ContentLayout stepperSections={sectionItems}>
              <GridContainer>
                <GridRow>
                  <GridColumn span="12/12">
                    {currentStep === 0 && (
                      <Prerequisites setCanContinue={setCanContinue} />
                    )}
                    {currentStep === 1 && <PersonalInformation />}
                    {currentStep === 2 && currentSubsection === 0 && <Income />}
                    {currentStep === 2 && currentSubsection === 1 && (
                      <Allowance />
                    )}
                    {currentStep === 2 && currentSubsection === 2 && <Unions />}

                    {currentStep === 3 && currentSubsection === 0 && <Assets />}
                    {currentStep === 3 && currentSubsection === 1 && (
                      <Vehicles />
                    )}
                    {currentStep === 3 && currentSubsection === 2 && (
                      <OtherAssets />
                    )}
                    {currentStep === 4 && currentSubsection === 0 && <Depts />}
                    {currentStep === 4 && currentSubsection === 1 && (
                      <OtherDepts />
                    )}
                    {currentStep === 5 && currentSubsection === 0 && (
                      <Overview changeStep={(step) => setCurrentStep(step)} />
                    )}
                  </GridColumn>
                </GridRow>
                <GridRow marginTop={'containerGutter'}>
                  <GridColumn span="5/12">
                    <Button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      variant="ghost"
                    >
                      Til baka
                    </Button>
                  </GridColumn>
                  <GridColumn span="7/12">
                    <div
                      style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                      <Button
                        type="submit"
                        onClick={
                          currentStep < Sections.length - 1
                            ? handleNext
                            : saveTaxReturn
                        }
                        variant="primary"
                        disabled={!canContinue}
                      >
                        {currentStep === Sections.length - 1
                          ? 'Senda'
                          : 'Halda áfram'}
                      </Button>
                    </div>
                  </GridColumn>
                </GridRow>
              </GridContainer>
            </ContentLayout>
          </form>
        </FormProvider>
      </Layout>
    </Authenticator>
  )
}

export default TaxReturnApplication
