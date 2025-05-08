import {
  Box,
  Divider,
  Text,
  Footer as IslandIsFooter,
} from '@island.is/island-ui/core'
import * as styles from './footer.css'

export const Footer = () => (
  <>
    <div className={styles.topFooterContainer}>
      <Box>
        <div className={styles.topFooterContainerLogo}>
          <img src="/logo.png" alt="RSK logo" width={60} />
          <Text variant="h3" color="white" fontWeight="semiBold">
            Skatturinn
          </Text>
        </div>
      </Box>
      <Box marginTop={2}>
        <Divider />
      </Box>
      <div className={styles.subFooterContainer}>
        <Box className={styles.footerTextContainer}>
          <Text variant="h5" color="white">
            Opnunartímar
          </Text>
          <Text color="white">Mánudaga-fimmtudaga kl. 9-15:30</Text>
          <Text color="white">föstudaga kl. 9-14:00</Text>
        </Box>

        <Box className={styles.footerTextContainer}>
          <Text variant="h5" color="white">
            Hafa samband
          </Text>
          <Text color="white">
            <a href="tel:4440900">Sími +354 444 0900</a>
          </Text>
          <Text color="white">
            <a href="mailto:rsk@rsk.is">Hafðu samband</a>
          </Text>
          <Text color="white">
            <a href="/abending">Ábending til tollgæslu</a>
          </Text>
          <Text color="white">
            <a href="/starfsstodvar">Starfsstöðvar</a>
          </Text>
        </Box>

        <Box className={styles.footerTextContainer}>
          <Text color="white" variant="h5">
            Tengdar síður
          </Text>
          <Text color="white">
            <a href="https://skattur.is">skattur.is</a>
          </Text>
          <Text color="white">
            <a href="https://tiund.is">tiund.is</a>
          </Text>
          <Text color="white">
            <a href="https://rsk.is/lagasafn">Lagasafn Skattsins</a>
          </Text>
        </Box>

        <div className={styles.footerImageContainer}>
          <div
            className={styles.footerImage}
            style={{
              backgroundImage: 'url(/icelandic-symbol.png)',
            }}
          ></div>
          <div
            className={styles.footerImage}
            style={{
              backgroundImage: 'url(/jafnlaunamerki.png)',
            }}
          ></div>
        </div>
      </div>
    </div>
    <IslandIsFooter />
  </>
)
