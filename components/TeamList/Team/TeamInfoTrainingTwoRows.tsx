import { css } from "@emotion/css"

export interface TeamInfoTrainingsTwoRowsProps {
    dateAndTime: React.ReactNode,
    address: React.ReactNode
}

export const TeamInfoTrainingsTwoRows: React.FC<{ props: TeamInfoTrainingsTwoRowsProps }> = ({ props }) => {
    const TeamInfoTwoRowsStles = createTeamInfoTrainingsTwoRowsStyles();
    return (
        <div className={TeamInfoTwoRowsStles}>
            <div className="team-list-item-wrapper-header">
                <p><b>{props.dateAndTime}</b></p>
            </div>
            <div className="team-list-item-wrapper-content">
                <p>
                    {props.address}
                </p>
            </div>
        </div>
    )
}


const createTeamInfoTrainingsTwoRowsStyles = () => {
    return css({
        display: 'flex',
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