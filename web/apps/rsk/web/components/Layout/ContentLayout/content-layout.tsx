import {Box, FormStepperV2, GridColumn, GridContainer, GridRow} from "@island.is/island-ui/core";
import * as styles from "./content-layout.css";
import React, {ReactElement} from "react";


interface props {
  children: React.ReactNode;
  stepperSections?: ReactElement[]
}

export default function ContentLayout({ children, stepperSections }: props) {
  return (
    <GridContainer>
      <GridRow>
        <GridColumn span="10/12">
          <Box className={styles.formContainer}>
            <div className={styles.flexContainer}>
              {children}
            </div>
          </Box>
        </GridColumn>
        <GridColumn span="2/12">
          <Box marginTop={5}>
          <FormStepperV2 sections={stepperSections} />
          </Box>
        </GridColumn>
      </GridRow>

    </GridContainer>



  );
}
