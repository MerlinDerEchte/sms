import React from "react";
import { Team } from "../../../types/team";
import { ComponentBox } from "../../ComponentBox/ComponentBox";
import { TeamListItemRow } from "./TeamListItemRow";
import { createTeamLIstItemStyles } from "./TeamListItemStyles";

export const TeamListItem: React.FC<{ team: Team }> = ({ team }) => {

    const teamListItemStyles = createTeamLIstItemStyles();

    const Item = <section id={team.id} className={teamListItemStyles}>
        
        <div className="team-info-wrapper">
            <div><h2>{team.name}</h2></div>
            <TeamListItemRow props={{
                title: 'BFV - Link',
                content: <a href={team.bfvLink}>Hier klicken</a>
            }} />
            <TeamListItemRow props={{
                title: 'Trainingszeiten',
                content: team.trainingDates
            }} />
           

        </div>
        <div className="team-trainer-wrapper">
            <div className="team-trainer-foto-wrapper">
                <img src={team.trainer.fotoLink} />
            </div>
            <div className="team-trainer-info-wrapper">
                <h2>{team.trainer.name} - {team.trainer.nickName}</h2>
                <TeamListItemRow props={{
                title: 'Kontakt',
                content: team.trainer.contact
            }} />
               
            </div>
        </div>
    </section>
    return (

        <ComponentBox
            boxProps={{
                boxContent: Item,
                isClickable: false
            }
            }

        />
    )
}