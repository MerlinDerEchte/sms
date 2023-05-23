import React from "react";
import { Team } from "../../../types/team";
import { ComponentBox } from "../../ComponentBox/ComponentBox";
import { TeamListItemRow } from "./TeamListItemRow";
import { createTeamLIstItemStyles } from "./TeamListItemStyles";

export const TeamListItem: React.FC<{ team: Team }> = ({ team }) => {

    const teamListItemStyles = createTeamLIstItemStyles();

    return (<div id={team.id} className={teamListItemStyles}>

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
        <div className="team-all-trainers-wrapper">
            {team.trainers.map((trainer) => {
                return (
                    <div className="team-trainer-wrapper" key={trainer.id}>
                        <div className="team-trainer-foto-wrapper">
                            <img src={trainer.fotoLink} />
                        </div>
                        <div className="team-trainer-info-wrapper">
                            <TeamListItemRow props={{
                                title: 'Trainer',
                                content: trainer.name
                            }} />
                            <TeamListItemRow props={{
                                title: 'Kontakt',
                                content: trainer.contact
                            }} />
                        </div>
                    </div>
                )
            })
            }
        </div>
    </div>)

}