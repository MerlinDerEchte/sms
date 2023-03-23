import { css } from "@emotion/css";
import { NextPage } from "next";
import TeamsNavigationbar from "./components/TeamsNavigationbar/teamsNavigationbar";
import TeamList from "./components/TeamList.ts/TeamList";
import { PageLayoutConstants } from "./constants/PageLayoutConstants";
import BlogPostNavigationbar from "./components/BlogPostNavigationbar/BlogPostNavigationbar";

const News: NextPage = () => {

    const newsStyles = createNewsStyles();

    return (
        <div className={newsStyles}>
            <div className="box">
                <BlogPostNavigationbar />
               

            </div>
        </div>
    )
}

const createNewsStyles = () => {

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
export default News;