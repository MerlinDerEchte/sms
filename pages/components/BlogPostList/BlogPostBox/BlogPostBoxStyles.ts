import { css } from "@emotion/css"
import { colors } from "../../../../styles/colors"

export const createBlogPostStyles = (isExpanded:Boolean, isFocused:Boolean) => {


    return css({
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 40,
        width: 600,
        overflow: 'hidden',
        alignItems: 'start',
        gap: 20,
        '&:hover': {
            cursor: 'pointer',
            boxShadow: `0px 0px 5px 0px ${colors.DARK_WHITE}`,
        },

        '.foto-wrapper': {
            flex: 0,
            width: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            'img': {
                width: 100,
            }
        },
        '.blog-post-content-wrapper': {
            flex: 2,
            flexDirection: 'column',
            '.blog-post-text-wrapper': {
                position: 'relative',
                display: 'block',
                flex: '2 1',
                overflow: 'hidden',
                maxHeight: isExpanded ? '100%' : 100,
                '::after': {
                    content: `' '`,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: isExpanded ? 0 : '100%',
                    height: 20,
                    background: `linear-gradient(transparent, ${colors.DARK_BROWN})`
                }

            },
            '.blog-post-read-more-container': {
                position: 'absolute',
                bottom: 0,
                paddingLeft: 10,
                right: 0,
                height: 20,
                color: isFocused ? colors.DARK_BROWN : colors.DARK_WHITE,
                background: isFocused ? colors.DARK_WHITE : 'none',
                borderRadius: 5,
                display: "flex",
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                flexDirection: 'column',
                paddingRight: 5,
            }
        },
    })
}