function Card({ name, email }) {
    return (
        <>
            <div className="flex w-full m-2 rounded-lg bg-yellow-200 justify-evenly px-1 flex-wrap  items-center ">
                <div>avatar</div>
                <div className="mx-1">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </>
    );
}

export default Card;
