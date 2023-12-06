import { css } from "@emotion/css"
import { ESectionId } from "enums/sectionIds"
import { scrollIntoView } from "utils/scrollUtil";
import { NavbarItemSubItemProps, NavbarSubitem } from "./NavbarSubitem";
import { colors } from "styles/colors";
import { SectionIcon } from "components/Section/SectionIcon";
import { mapSectionIdToSectionTitle } from "utils/mapSectionIdToSectionTitle";
import { mapSectionIdToStringId } from "utils/mapSectionIdToStringId";

interface NavbarItemProps {
    sectionId: ESectionId,
}


export const NavbarItem: React.FC<NavbarItemProps> = ({  sectionId }) => {


    const createNavbarItemStyles = () => {
        return css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            position: 'relative',

            '.navbar-item-header': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                cursor: 'pointer',
                gap:5,
                '.navbar-item-header-title': {
                    flex: 0
                },
                '.navbar-item-header-icon': {
                    flex: 0,
                    svg: {
                        height: 30,
                        width: 30,
                        fill: colors.DARK_WHITE,
                        stroke: colors.DARK_BROWN,
                        strokeWidth: 1,
                    }
                },
                ':hover': {
                    textDecoration: 'underline',
                    'svg':{
                        fill: colors.DARK_BROWN,
                        stroke: colors.DARK_WHITE,
                    }
                },

            },
            '.navbar-item-subitems-wrapper': {
                display: 'flex',
                flexDirection: 'row',
            }
        })
    }
    const navbarItemStyles = createNavbarItemStyles();
    return (
        <div className={navbarItemStyles}>
            <div className='navbar-item-header' onClick={() => scrollIntoView(mapSectionIdToStringId(sectionId))}>
                <div className='navbar-item-header-icon'>
                    <SectionIcon sectionId={sectionId} />
                </div>
                <div className='navbar-item-header-title'>
                    {mapSectionIdToSectionTitle(sectionId)}
                </div>
            </div>
        </div>
    )
}