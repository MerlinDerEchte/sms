import { css } from "@emotion/css"
import { useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";

export interface TeamListItemWrapperProps {
    title: React.ReactNode,
    content: React.ReactNode
}

export const TeamListItemWrapper: React.FC<{ props: TeamListItemWrapperProps }> = ({ props }) => {
    const {isMobile} = useContext(GlobalContext) 
    const teamListItemWrapperStles = createTeamListItemWrapperStles();
    return (
        <div className={teamListItemWrapperStles}>
            <div className="team-list-item-wrapper-header">
                <p>{props.title}:</p>
            </div>
            <div className="team-list-item-wrapper-content">
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}


const createTeamListItemWrapperStles = () => {
    return css({
        display: 'flex',
        height: 50,
        width: '100%',
        flexDirection: 'column',
        '.team-list-item-wrapper-header': {
            flex: 0,
            height: 20
        },
        '.team-list-item-wrapper-content': {
            flex: 0,
            height: 30

        }
    })
}