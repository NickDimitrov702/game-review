import style from './GameTemplate.module.css'
import getData from '../../API-services/API-fetch/apiFetch.js'
import React, { Fragment, useEffect, useState } from 'react';
import Populate from '../PopulatingComponent/Populator.js'
import PLayStationComp from '../game-template/PlayStation/PlayStationTemplate.js'
import XboxTemplate from '../game-template/Xbox/XboxTemplate.js';


function GameTempalte({
    id,
    name,
    games,
    image_background,
}) {

    let [gamesData, setGames] = useState([])

    useEffect(() => {
        games.map(x => {
            setGames(x)
        })


    }, [games])

    return (
        <div className={style.gameTemplateComponentWrapper}>
            
            {id === 4 && <div>
                {games.map(x =>
                    <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>} 
            {id === 187 && <div>
                {games.map(x =>
                    <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>}

            {id === 18 && <div>
                {games.map(x =>
                   <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>}
            {id === 186 && <div>
                {games.map(x =>
                   <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>}
            {id === 7 && <div>
                {games.map(x =>
                   <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>}
            {id === 14 && <div>
                {games.map(x =>
                   <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>}
            {id === 80 && <div>
                {games.map(x =>
                   <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>}
            {id === 1 && <div>
                {games.map(x =>
                   <Populate id={x.id} name={x.name} {...x} os={name} />)
                }
            </div>}
        </div>


    )
}

export default GameTempalte