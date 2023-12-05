import { css } from "@emotion/css"
import { SectionIcon } from "components/Section/SectionIcon"
import { ESectionId } from "enums/sectionIds"
import { colors } from "styles/colors"
import { mapSectionIdToNavTitle } from "utils/mapSectionIdToNavTitle"
import { scrollIntoView } from "utils/scrollUtil"

export const MobileNavigationItem: React.FC<{ sectionId: ESectionId, navCallback: () => void }> = ({ sectionId, navCallback }) => {

    const createNavigationItemStyles = () => {
        return css({
            /*  flex: 1, */
            height: 50,
            display: 'flex',
            gap:10,
            '.mobile-navigation-item-title-container': {
                flex: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
            },
            '.mobile-navigation-item-svg-container': {
                flex: 0,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                'svg':{
                    height:40,
                    width: 40,
                    stroke: colors.DARK_WHITE,
                    fill: colors.DARK_BROWN
                }
            }
        })
    }
    const handleItemClick = () => {
        scrollIntoView(sectionId, navCallback);
    }
    const navigationItemStyles = createNavigationItemStyles();

    return (
        <div className={navigationItemStyles} onClick={handleItemClick}>
            <div className="mobile-navigation-item-svg-container">
                <SectionIcon sectionId={sectionId} /> 
            </div>
            <div className="mobile-navigation-item-title-container">
                {mapSectionIdToNavTitle(sectionId)}
            </div>
        </div>
    )
}