import { css } from "@emotion/css"
import { GlobalContext } from "GlobalContext"
import { useContext } from "react"
import { colors } from "styles/colors"

interface SponsorsListItemProps {
    imgSource: string,
    sponsorLink: string,
    name: string,
    address?: string,
    kontakt?: string
}

export const SponsorsListItem: React.FC<SponsorsListItemProps> = ({ imgSource, sponsorLink, name, address, kontakt }) => {
    const { isMobile } = useContext(GlobalContext)
    const createSponsorListItemStyles = () => {
        return css({
            padding: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 300,
            height: 300,
            position: 'relative',
            borderRadius: 20,
            boxShadow: `0 0 5px ${colors.LIGHT_BROWN}`,
            ':hover': {
                boxShadow: `0 0 5px ${colors.DARK_BROWN}`
            },
            //border: `1px solid ${colors.DARK_BROWN}`,
            '.img-container': {
                width: '100%',
                display: 'flex',
                flex: 'initial',
                justifyContent: 'center',
                alignItems: 'center',
                height: 200,
                position: 'relative',
                overflow: 'hidden',
                margin: 0,
                img: {
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                }
            }
        })
    }
    const sponsorListItemStyles = createSponsorListItemStyles()

    return (
        <div className={sponsorListItemStyles}>
            <a target='_blank' rel="noreferrer" href={sponsorLink} className="img-container">
                <img src={imgSource} />
            </a>
            {name && <p> {name}</p>}
        </div>
    )

}