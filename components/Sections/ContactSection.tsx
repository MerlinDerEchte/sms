
import { ESectionId } from "enums/sectionIds";
import { NewSection } from "../Section/NewSection";
import { ContactTable } from "components/Contact/ContactTable";
export const ContactSection: React.FC = () => {
   
    return (
        <NewSection isSecondary={false} sectionId={ESectionId.Kontakt} caption="Anfahrt & Kontakt">
           <ContactTable />
        </NewSection>
    )
}