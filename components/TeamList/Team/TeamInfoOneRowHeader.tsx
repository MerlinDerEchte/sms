import { css } from "@emotion/css"

export interface TeamInfoTwoRowsProps {
    title?: React.ReactNode,
    content?: React.ReactNode
}

export const TeamInfoOneRowHeader: React.FC<{ props: TeamInfoTwoRowsProps }> = ({ props }) => {
    const TeamInfoTwoRowsStles = createTeamInfoOneRowHeader();
    return (
        <div className={TeamInfoTwoRowsStles}>
            {props.title && <p>{props.title}</p>}
            {props.content && props.content}
        </div>
    )
}


const createTeamInfoOneRowHeader = () => {
    return css({
       
        display: 'flex',
        width: '100%',
        fontWeight: 'bold',
       
    })
}