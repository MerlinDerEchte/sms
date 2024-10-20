import React from "react";
import { Team } from "types/team";
import { TeamInfoTwoRows } from "../TeamInfoTwoRows";
import { ContactPersonBox } from "components/Contact/ContactPersonBox";
import { sortTrainings } from "utils/sortTrainings";
import { TeamInfoOneRowHeader } from "../TeamInfoOneRowHeader";
import { TeamInfoTrainingsTwoRows } from "../TeamInfoTrainingTwoRows";
import { createTeamMobileStyles } from "./createTeamMobileStyles";
import { BFVButton } from "../BFVButton";
export const TeamMobileComponent: React.FC<{ team: Team, selectedTeamName: string, setSelectedTeamName: (teamName: string) => void }> = ({ team, selectedTeamName, setSelectedTeamName }) => {

    const isSelectedTeam = selectedTeamName === team.name
    const teamMobileStyles = createTeamMobileStyles(isSelectedTeam);
    const sortedTrainings = sortTrainings(team.trainings)


    return (<div id={team.name} className={teamMobileStyles}>

        <div className="team-name-wrapper" onClick={() => setSelectedTeamName(team.name)}>
            <h2 className="">{team.name}</h2>
        </div>

        {isSelectedTeam && <div className="team-info-wrapper">
            <div className="team-info-general-wrapper">
                <div className="team-foto-container">
                    {team.fotoLink && <img alt="foto" src={team.fotoLink}></img>}
                </div>
                {/* {team.bfvLink && <TeamInfoOneRowHeader props={{
                    content: <a target='_blank' rel="noreferrer" href={team.bfvLink} >Im BFV</a>
                }} />
                } */}

                {team.bfvLink &&
                    <div className="bfv-link-wrapper">
                        <BFVButton link={team.bfvLink}
                        />
                    </div>
                }
                <TeamInfoOneRowHeader props={{
                    title: 'Trainings:'
                }} />
                <div className="team-trainings-wrapper">

                    {sortedTrainings.map((training, index) => {
                        return (
                            <TeamInfoTrainingsTwoRows props={{
                                dateAndTime: training.dateAndTime,
                                address: training.address
                            }}
                                key={index}
                            />
                        )
                    })
                    }
                </div>

            </div>
            <div className="team-all-trainers-wrapper">
                {team.trainers.map((trainer) => {
                    return (
                        <ContactPersonBox person={trainer} key={trainer.id} />
                    )
                })
                }
            </div>
        </div>
        }
    </div>
    )
}