import React, { useContext } from "react";
import { Team } from "types/team";
import { TeamListItemWrapper } from "./TeamListItemWrapper";
import { createTeamLIstItemStyles } from "./TeamListItemStyles";
import { GlobalContext } from "GlobalContext";

export const TeamListItem: React.FC<{ team: Team }> = ({ team }) => {

    const { isMobile } = useContext(GlobalContext);
    const teamListItemStyles = createTeamLIstItemStyles(isMobile);

    return (<div id={team.id} className={teamListItemStyles}>

        <div className="team-foto-container">
            {team.fotoLink && <img alt="foto" src={team.fotoLink}></img>}
        </div>
        <div className="team-info-wrapper">
            <div className="team-info-general-wrapper">
                <div className="team-name-container"><h2>{team.name}</h2></div>

                {team.bfvLink && <TeamListItemWrapper props={{
                    title: 'BFV - Link',
                    content: <a target='_blank' href={team.bfvLink} >Hier klicken</a>
                }} />
                }
                <TeamListItemWrapper props={{
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
                                <TeamListItemWrapper props={{
                                    title: trainer.title,
                                    content: trainer.name
                                }} />
                                {trainer.contact && <TeamListItemWrapper props={{
                                    title: 'Kontakt',
                                    content: trainer.contact
                                }} />
                                }
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    </div>
    )

}