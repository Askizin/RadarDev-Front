import './styles.css';


function Item({ dev }){
    return (
        <li clasName="dev-item">

            <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>

            <p>
                {dev.bio}
            </p>

            <a href={`https:github.com/${dev.github_username}`}>Github</a>

        </li>
    )
}

export default Item;