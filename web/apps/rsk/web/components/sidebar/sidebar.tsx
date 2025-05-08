import { Box, Navigation } from '@island.is/island-ui/core'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const Sidebar = () => {
  const [links, setLinks] = useState([
    {
      href: '/',
      title: 'Umsókn',
    },
    {
      href: '/i-stuttu-mali',
      title: 'Í stuttu máli',
    },
  ])
  const router = useRouter()

  useEffect(() => {
    setLinks(
      links.map((l) => ({
        ...l,
        active: router.asPath === l.href,
      })),
    )
  }, [router.asPath])

  return (
    <Box
      marginTop={3}
      style={{
        width: 400,
      }}
    >
      <Navigation
        baseId="navigation-bar"
        title="Efnisyfirlit"
        activeItemTitle="Hér er virk undirsíða"
        colorScheme="blue"
        items={links}
      />
    </Box>
  )
}
