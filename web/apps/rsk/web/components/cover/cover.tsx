import { Box, Text } from '@island.is/island-ui/core'

interface CoverProps {
  logo: string
  title: string
  isShrinked: boolean
}

export function Cover(props: CoverProps) {
  return (
    <Box
      width="full"
      position="relative"
      style={{
        height: props.isShrinked ? 100 : 300,
        backgroundColor: '#00499E',
      }}
    >
      <Box
        position="absolute"
        style={{
          top: '40%',
          left: '15%',
        }}
      >
        <Text variant="h3" color="white" fontWeight="semiBold">
          {props.title}
        </Text>
      </Box>
      <Box
        borderRadius="full"
        background="white"
        position="absolute"
        boxShadow="small"
        style={{
          height: 100,
          width: 100,
          backgroundImage: `url(${props.logo})`,
          backgroundSize: '50px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          bottom: -25,
          left: '5%',
        }}
      ></Box>
    </Box>
  )
}
