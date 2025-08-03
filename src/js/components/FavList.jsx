

const FavList = (favorites) => {

    return (
        <div>
            <h2>FAVORITOS</h2>
            {favorites.lenght === 0 && <p>No tienes favoritos aun</p>}
            {favorites.map(show => (
                <div key={show.id}>
                    <h2>{show.name}</h2>
                    {show.image ?
                        <img src={show.image.medium} alt="algo" />
                        :
                        null
                    }
                </div>
            ))}
        </div>
    )

}

export default FavList;