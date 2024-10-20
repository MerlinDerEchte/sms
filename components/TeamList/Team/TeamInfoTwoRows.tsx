import { css } from "@emotion/css"

export interface TeamInfoTwoRowsProps {
    title: React.ReactNode,
    content: React.ReactNode
}

export const TeamInfoTwoRows: React.FC<{ props: TeamInfoTwoRowsProps }> = ({ props }) => {
    const TeamInfoTwoRowsStles = createTeamInfoTwoRowsStles();
    return (
        <div className={TeamInfoTwoRowsStles}>
            <div className="team-list-item-wrapper-header">
                <p>{props.title}:</p>
            </div>
            <div className="team-list-item-wrapper-content">
                <p>
                    <b>{props.content}</b>
                </p>
            </div>
        </div>
    )
}


const createTeamInfoTwoRowsStles = () => {
    return css({
        display: 'flex',
        height: 50,
        width: '100%',
        flexDirection: 'column',
        '.team-list-item-wrapper-header': {
            flex: 1,
            height: 20
        },
        '.team-list-item-wrapper-content': {
            flex: 1,
            height: 30

        }
    })
}