
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";
import { ContactTable } from "components/Contact/ContactTable";
export const ContactSection:React.FC<{isSecondary:boolean}> = ({isSecondary}) =>{
   
    return (
        <NewSection isSecondary={isSecondary} sectionId={ESectionId.Kontakt} >
           <ContactTable />
        </NewSection>
    )
}