import {
  Text,
  Stack,
  Breadcrumbs,
  TopicCard,
  Button,
  AlertBanner,
} from '@island.is/island-ui/core'
import { FrontLayout } from '../layouts/front/front-layout'

export const Home = () => {
  return (
    <FrontLayout>
      <Stack space="gutter">
        <Breadcrumbs
          items={[
            {
              href: 'https://island.is',
              title: 'Ísland.is',
            },
            {
              href: '/',
              title: 'Tegund umsóknar',
            },
            {
              href: '/umsokn',
              title: 'Umsókn',
              isCurrentPage: true,
            },
          ]}
        />
        <Text variant="h1">Skil á skattframtali</Text>
        <TopicCard href="/overview" tag="Skila inn">
          Skil á skattframtali
        </TopicCard>
        <AlertBanner
          variant="default"
          description="Skattframtal er árleg skýrslugjöf til skattyfirvalda þar sem fram koma
          upplýsingar um tekjur, eignir og skuldir. Það er mikilvægt að skila
          skattframtali á réttum tíma til að forðast sektir og önnur viðurlög."
        />
        <Text variant="h2">Í stuttu máli</Text>
        <Text>
          Skattframtalið er notað til að reikna út skattgreiðslur og tryggja að
          allir greiði réttan skatt. Það er mikilvægt að skila skattframtali á
          réttum tíma til að forðast sektir og önnur viðurlög sem geta fylgt
          vanrækslu.
        </Text>
        <Text>
          Skattframtalið inniheldur upplýsingar um launatekjur, fjármagnstekjur,
          eignir, skuldir og frádrátt. Einstaklingar og fyrirtæki þurfa að fylla
          út skattframtalið nákvæmlega og tryggja að allar upplýsingar séu
          réttar.
        </Text>
        <Text>
          Ef einhverjar upplýsingar vantar eða eru rangar, getur það haft áhrif
          á skattgreiðslur og leitt til endurskoðunar frá skattyfirvöldum.
        </Text>
      </Stack>
    </FrontLayout>
  )
}

export default Home
