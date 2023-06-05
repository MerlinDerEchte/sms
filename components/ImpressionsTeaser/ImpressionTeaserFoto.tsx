import { FC } from 'react'
export const ImpressionTeaserFoto:FC<{fotoLink:string}> = ({fotoLink}) => {

    return(
        <img src={fotoLink} alt="sued-impression"></img>
    )
}