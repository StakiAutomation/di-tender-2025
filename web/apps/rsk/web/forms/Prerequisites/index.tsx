import { Box, Checkbox, Icon, Inline, Text } from '@island.is/island-ui/core'

interface PrerequisitesProps {
  setCanContinue: React.Dispatch<React.SetStateAction<boolean>>
}

export const Prerequisites = (props: PrerequisitesProps) => (
  <Box>
    <Box
      style={{
        display: 'grid',
        gap: 10,
      }}
    >
      <Text variant="h2">Gagnaöflun</Text>
      <Text variant="h5">
        <Inline>
          <Icon icon="fileTrayFull" color="blue400" />
          &nbsp;Eftirfarandi upplýsingar verða sóttar rafrænt þar sem hægt er
        </Inline>
      </Text>
    </Box>
    <Box
      marginTop={3}
      style={{
        display: 'grid',
        gap: 20,
      }}
    >
      <Box>
        <Text variant="h5" color="blue400">
          Upplýsingar frá Þjóðskrá
        </Text>
        <Text>Upplýsingar um þig og fjölskylduhagi.</Text>
      </Box>
      <Box>
        <Text variant="h5" color="blue400">
          Upplýsingar frá RSK
        </Text>
        <Text>Upplýsingar um eldri framtöl, staðgreiðslu, laun, o.fl.</Text>
      </Box>
      <Box>
        <Text variant="h5" color="blue400">
          Gagnaöflun og meðferð persónuupplýsinga
        </Text>
        <Text>
          Frekari upplýsingar um gagnaöflunarheimild og meðferð
          persónuupplýsinga má finna hér.
        </Text>
      </Box>
      <Checkbox
        filled
        large
        backgroundColor="blue"
        onChange={(e) => props.setCanContinue(e.target.checked)}
        name=""
        label="Ég samþykki gagnaöflun í umsóknarkerfinu"
      />
    </Box>
  </Box>
)
