import React, { useContext } from "react";
import { Team } from "types/team";
import { TeamInfoTwoRows } from "../TeamInfoTwoRows";
import { ContactPersonBox } from "components/Contact/ContactPersonBox";
import { sortTrainings } from "utils/sortTrainings";
import { TeamInfoOneRowHeader } from "../TeamInfoOneRowHeader";
import { TeamInfoTrainingsTwoRows } from "../TeamInfoTrainingTwoRows";
import { createTeamDesktopStyles } from "./createTeamDesktopStyles";
import { BFVButton } from "../BFVButton";
import { SectionContext } from "components/Section/SectionContext";
export const TeamDesktopComponent: React.FC<{ team: Team, selectedTeamName: string, setSelectedTeamName: (team: string) => void }> = ({ team, selectedTeamName, setSelectedTeamName }) => {
    const { isSecondary } = useContext(SectionContext); 
    const teamDesktopStyles = createTeamDesktopStyles(isSecondary);
    const sortedTrainings = sortTrainings(team.trainings);
    const isSelectedTeam = team.name === selectedTeamName

    return (<div id={team.name} className={teamDesktopStyles}>

        <div className="team-name-container" onClick={() => setSelectedTeamName(team.name)}><h2>{team.name}</h2></div>
        {isSelectedTeam && <div className="team-content-container">

            <div className="team-foto-container">
                {team.fotoLink && <img alt="foto" src={team.fotoLink}></img>}
            </div>
            <div className="team-info-wrapper">
                <div className="team-info-general-wrapper">
                    {team.bfvLink && <BFVButton link={team.bfvLink} />}
                    <TeamInfoOneRowHeader props={{
                        title: 'Trainings:'
                    }} />
                    <div className="team-desktop-trainings-wrapper">
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
        </div>
        }
    </div>

    )
}