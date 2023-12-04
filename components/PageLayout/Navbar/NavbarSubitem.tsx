import { css } from "@emotion/css"
export interface NavbarItemSubItemProps {
    itemId: string,
    title: string
}


export const NavbarSubitem:React.FC<NavbarItemSubItemProps> = () => {

    const createNavbarSubitemStyles = () => {
        return css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center'
        })
    }
    const navbarSubitemStyles = createNavbarSubitemStyles()
    return(
        <div className={navbarSubitemStyles}>
            
        </div>
    )
}