import { css } from "@emotion/css"
import { colors } from "../../../../styles/colors"

export const createBlogPostStyles = () => {


    return css({
        position: 'relative',
        display: 'flex', 
        flexDirection: 'column',
        height: 100,
        width: '100%',
        overflow:'hidden',
        padding:10,
        gap: 20,

        
        '.blog-post-header':{
            flex: '1 1',
            display:'flex',
                       
        },
        '.blog-post-wrapper':{
            flex: '2 1',
            overflow: 'hidden',

            '.blog-post-read-more-container':{

                position:'absolute',
                bottom: 0,
                width: '50%',
                right:0,
                height: 60,
                //background: `linear-gradient(170deg, transparent 40%, ${colors.DARK_BROWN} 80%)`,
                color: colors.WHITE,
                borderRadius: 5,
                display:"flex",
                justifyContent:'flex-end',
                alignItems: 'flex-end',
                flexDirection: 'column',
                paddingRight: 5,
            }
            
        },
        '&:hover':{
            '.blog-post-wrapper':{
                '.blog-post-read-more-container':{
                   color: colors.WHITE,
                }
            }
        }
    })
}