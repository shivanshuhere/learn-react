function Card() {
  return (
    <>
      <div className="flex w-full m-2 rounded-lg bg-yellow-200 justify-center items-center ">
        <div>avatar</div>
        <div className="mx-1">
          <h2>Name</h2>
          <p>name123@gmail.com</p>
        </div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default Card;
