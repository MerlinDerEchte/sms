import { css } from "@emotion/css";
import { NextPage } from "next";
import TeamsNavigationbar from "./components/TeamsNavigationbar/teamsNavigationbar";
import TeamList from "./components/TeamList.ts/TeamList";
import { PageLayoutConstants } from "./constants/PageLayoutConstants";

const Teams: NextPage = () => {

    const teamsStyles = createTeamsStyles();

    return (
        <div className={teamsStyles}>
            <div className="box">
              
                    <TeamList />
        
            </div>
        </div>
    )
}

const createTeamsStyles = () => {

    return css({

        position: 'relative',

        width: '100%',
        height: '100%',
       

        '.box': {
            marginTop: 50,
            width: PageLayoutConstants.CONTENT_WIDTH,
            display: 'flex',
            marginLeft: `calc(50% - ${PageLayoutConstants.CONTENT_WIDTH / 2}px)`,
          
            
           
        }
    })
}
export default Teams;