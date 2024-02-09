function Card({ name, email, handleDeleteContact, handleUpdateContact }) {
    return (
        <>
            <div className="flex w-full m-2 rounded-lg bg-yellow-200 justify-evenly px-1 flex-wrap  items-center ">
                <div>avatar</div>
                <div className="mx-1">
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
                <button onClick={() => handleUpdateContact(name, email)}>
                    Edit
                </button>
                <button onClick={() => handleDeleteContact(name)}>
                    Delete
                </button>
            </div>
        </>
    );
}

export default Card;
