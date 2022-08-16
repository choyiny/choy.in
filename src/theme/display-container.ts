import { mode } from "@chakra-ui/theme-tools";

const DisplayContainer = {
  parts: [`outer`, `inner`],
  baseStyle: {
    outer: {
      w: `100%`,
      margin: 0,
    },
  },
  variants: {
    default: {
      outer: {
        bg: `bg`,
      },
    },
    hero: ({ colorMode }) => {
      const isDarkMode = colorMode === `dark`;
      const topColor = `var(--chakra-colors-bg)`;
      const bottomColor = isDarkMode ? `#0b111f` : `#0b111f`;

      return {
        outer: {
          bg: `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`,
        },
      };
    },
    navigation: (props) => ({
      outer: {
        bg: `bgAlpha`,
        backdropFilter: `blur(8px)`,
        position: `fixed`,
        display: `flex`,
        zIndex: `sticky`,
      },
      inner: {
        header: {
          color: mode(`black`, `white`)(props),
        },
      },
    }),
  },
};

export default DisplayContainer;
