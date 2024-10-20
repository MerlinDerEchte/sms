import { css } from "@emotion/css"
import { colors } from "styles/colors"



export const BFVButton: React.FC<{link:string}>= ({link}) => {

    const createBfvButtonStyles = () => {
        return css({
            background: colors.DARK_WHITE,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 30,
            gap: 30,
            borderRadius: 5,
            border: `1px solid ${colors.BFVBLUE}`,
           
            backgroundColor: colors.BFVBLUE,
            paddingLeft: 5,
            '.bfv-image-wrapper':{
                height: '100%',
                width: 30,
                'img':{
                    height: '100%'
                }
            },
            '.bfv-button-text':{
                color: colors.DARK_WHITE,
                textDecoration: 'none'
            }
        })
    }
    const bfvButtonStyles = createBfvButtonStyles();

    return(
        <a className={bfvButtonStyles} href={link}>
            <div className="bfv-button-text">
                <b>Zum Bfv</b>
            </div>
            <div className="bfv-image-wrapper">
                <img src="bfv-logo.webp" ></img>
            </div>
        </a>
    )
} 