import * as React from "react";
import {
  useMultiStyleConfig,
  Box,
  Container,
  BoxProps,
} from "@chakra-ui/react";

interface DisplayContainerProps extends BoxProps {
  variant?: "default" | "navigation" | "footer" | "hero" | undefined;
}

export const DisplayContainer: React.FC<DisplayContainerProps> = ({
  variant = undefined,
  children,
  ...rest
}) => {
  const styles = useMultiStyleConfig(`DisplayContainer`, { variant });

  return (
    <Box
      data-name="full-width-container-outer"
      sx={{ ...styles.outer }}
      {...rest}
    >
      <Container
        maxW="container.lg"
        data-name="full-width-container-inner"
        sx={{ ...styles.inner }}
      >
        {children}
      </Container>
    </Box>
  );
};
