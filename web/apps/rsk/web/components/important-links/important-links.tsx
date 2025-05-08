import { Box, Navigation } from '@island.is/island-ui/core'

export const ImportantLinks = () => {
  return (
    <Box
      marginTop={3}
      style={{
        width: 400,
      }}
    >
      <Navigation
        baseId="navigation-bar"
        title="Tengt efni"
        colorScheme="purple"
        items={[
          {
            href: '/framlenging',
            title: 'Framlenging á skilafresti',
          },
          {
            href: '/framtals-leidbeiningar',
            title: 'Leiðbeiningar við skil á framtali',
          },
          {
            href: '/eydublod',
            title: 'Eyðublöð',
          },
        ]}
      />
    </Box>
  )
}
