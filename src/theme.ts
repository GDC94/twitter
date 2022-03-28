import { CircularProgress } from '@chakra-ui/progress';

import { extendTheme, theme  } from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";


interface Colores {
    colorScheme: string
}

export default extendTheme ({
    config: {
        initialColorMode: 'dark'
    },
    colors: {
        primary: theme.colors.twitter,
    },
    styles: {
        global: {
            'html ,body, #root': {
                height: '100%',
            } 
        }
    },
    components: {
    
        Button: {
            baseStyle: {
                borderLeftRadius: '9999',
                borderRightRadius: '9999'
            },
            sizes: {
                lg: {
                  paddingY: 3,
                  fontSize: "md",
                }
            },
            variants: {
                solid: (props: Colores) => ({
                  backgroundColor: `${props.colorScheme}.500`,
                  color: mode(undefined, "white")(props),
                }),
              },
        }
    }
})

