import { useQuery } from "@apollo/client";
import { css } from "@emotion/css";
import { GlobalContext } from "GlobalContext";
import { mapContentfulBlogPosts } from "contentful/contentfulBlogPost";
import { PERSONS_QUERY, mapContentfulPersons } from "contentful/contentfulPerson";
import { useContext, useEffect, useState } from "react";
import { ContactPersonType, getContactPersonTypeRank, isStringContactPersonType } from "types/contactPersonTypeEnum";
import { Person } from "types/person";
import { ContactPersonBox } from "./ContactPersonBox";


export const ContactPersonList: React.FC = () => {

    const { data: personData } = useQuery(PERSONS_QUERY);
    const [contactPersons, setContactPersons] = useState<Person[]>([]);
    const { isMobile } = useContext(GlobalContext)




    useEffect(() => {
        if (personData?.personCollection?.items) {
            const persons: Person[] = mapContentfulPersons(personData.personCollection.items);
            const newContactPersons = persons.filter((p) => isStringContactPersonType(p.title))
            const sortedNewContactPersons = newContactPersons.sort((a, b) => getContactPersonTypeRank(a.title as ContactPersonType) - getContactPersonTypeRank(b.title as ContactPersonType))
            setContactPersons(sortedNewContactPersons)
        }

    }, [personData])

    const createContactListStyles = () => {
        return css({
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: isMobile ? 'center' : 'start',
            alignItems: 'stretch',
            gap: 20,
            flexWrap: 'wrap',
            width: '100%',
            '.contact-person-box-wrapper': {
                width: isMobile ? '100%' : 'calc(50% - 10px)',
            }
        })
    }

    const contactListStyles = createContactListStyles();

    return (
        <div className={contactListStyles}>
            {contactPersons.map((cP) => {
                return (
                    <div className="contact-person-box-wrapper">
                        <ContactPersonBox person={cP} />
                    </div>
                )
            })}
        </div>

    )
}