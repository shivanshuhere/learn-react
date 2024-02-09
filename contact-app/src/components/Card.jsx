function Card({ name, email, handleDeleteContact, handleUpdateContact }) {
    return (
        <>
            <div className="flex w-full m-2 rounded-lg bg-yellow-200 justify-evenly px-1 flex-wrap  items-center ">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                    >
                        <path d="M 496 256 Q 495 191 464 136 L 464 136 Q 432 81 376 48 Q 319 16 256 16 Q 193 16 136 48 Q 80 81 48 136 Q 17 191 16 256 Q 17 321 48 376 Q 80 431 136 464 Q 193 496 256 496 Q 319 496 376 464 Q 432 431 464 376 Q 495 321 496 256 L 496 256 Z M 0 256 Q 1 186 34 128 L 34 128 Q 68 70 128 34 Q 189 0 256 0 Q 323 0 384 34 Q 444 70 478 128 Q 511 186 512 256 Q 511 326 478 384 Q 444 442 384 478 Q 323 512 256 512 Q 189 512 128 478 Q 68 442 34 384 Q 1 326 0 256 L 0 256 Z M 151 323 Q 166 347 193 365 L 193 365 Q 219 383 256 384 Q 293 383 319 365 Q 346 347 361 323 Q 366 318 373 321 Q 378 326 375 333 Q 358 358 328 378 Q 299 399 256 400 Q 213 399 184 378 Q 154 358 137 333 Q 134 326 139 322 Q 146 318 151 324 L 151 323 Z M 176 200 Q 152 199 135 228 Q 130 234 124 231 Q 118 227 121 220 Q 142 185 176 184 Q 209 185 231 220 Q 234 227 228 231 Q 221 234 217 228 Q 199 199 176 200 L 176 200 Z M 295 228 Q 290 234 284 231 Q 278 227 281 220 Q 302 185 336 184 Q 369 185 391 220 Q 394 227 388 231 Q 381 234 377 228 Q 359 199 336 200 Q 312 199 295 228 L 295 228 Z" />
                    </svg>
                </div>
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
