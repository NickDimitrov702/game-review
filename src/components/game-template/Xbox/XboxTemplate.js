import style from '../Xbox/Xbox.module.css'

function XboxTemplate({
    name,
    id,
    slug
}) {

    return (
        <div className={style.gameTemplateComponentWrapper} >
        <div className={style.gameTempalteWrapper} >
            <header>
                <h1>Game image Slide show</h1>
                <img />
            </header>
            <main >
                <p>Main Content for the game </p>
                <div>
                    {name}
                </div>
                <div>
                    <p>Xbox</p>
                </div>
            </main>
            <footer>
                <button>Add</button>
                <button>Wishlist</button>
                <button>Reviews</button>
            </footer>
            <header>
                <p>Icon for OS</p>
            </header>
        </div>
    </div>
    )

}

export default XboxTemplate