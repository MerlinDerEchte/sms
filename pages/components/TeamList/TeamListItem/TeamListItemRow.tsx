import { css } from "@emotion/css"

export interface TeamListItemRowProps {
    title: React.ReactNode,
    content: React.ReactNode
}

export const TeamListItemRow: React.FC<{ props: TeamListItemRowProps }> = ({ props }) => {

    const teamListRowStyles = createTeamListRowStyles();
    return (
        <div className={teamListRowStyles}>
            <div className="team-list-item-row-header">
                <p>{props.title}:</p>
            </div>
            <div className="team-list-item-row-content">
                <p>
                    {props.content}
                </p>
            </div>
        </div>
    )
}


const createTeamListRowStyles = () => {
    return css({
        display: 'flex',
        height: 50,
        width: '100%',
        flexDirection: 'column',
        '.team-list-item-row-header': {
            flex: 0,
            height: 20
        },
        '.team-list-item-row-content': {
            flex: 0,
            height: 30

        }
    })
}