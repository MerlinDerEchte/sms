import { ESectionId } from "enums/sectionIds"
import { NavbarItem } from "../NavbarItem"

export const NavbarItemEvents:React.FC = () => {
    return(
        <NavbarItem title="Aktuelles" sectionId={ESectionId.Events} />
    )
}