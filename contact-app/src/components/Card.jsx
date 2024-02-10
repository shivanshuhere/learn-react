function Card({ name, email, handleDeleteContact, handleUpdateContact }) {
    return (
        <>
            <div className="flex w-full m-2 rounded-lg bg-yellow-200 justify-between  px-1   items-center ">
                <div className="flex justify-center items-center gap-4">
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
                    <div className="">
                        <h2>{name}</h2>
                        <p className="text-xs overflow-x-hidden">{email}</p>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleUpdateContact(name, email)}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVFJREFUSEvt1LtKJEEYBtAzPoA3VgwEVzYRWTDYVAOfREREI0FczAVTUQQz0cD3MPCOsQ+gBvsERiaulvRIM9PVPdOWTKAdV/+H76tLQ4++Ro9cqeFx3mY+VAVKCY/gBn2Ywb8yPBU8jAtMZVhIXIqngg+x2JLwHrOx5KngQZzgTwv+FztFlX8EHsIqtvAfrfge1mL7XBcO6Dl+4xgLGd6PU9xiPvXh+pHVOp0bfISlDB/AI55TwgENp3eyYGg+edU17uoBKUMD9CnwaLZ3RUm7RsMPnRyugF69JvoV6e8AK9n+VlbcXFAFj+GsAl3uWMstLIMDeomfkcH72T2u40ar/lS0bI/vMBGJsov1WjE7qDo8gUXfNjY+ipYlLoKTod3ASdEyeC5X5xOuU9Sbn1F1j1N77/O+4WYVsetUt/q2ZmNV9wzerBst8l/bvK93uF4A8Zk4H5+sjEIAAAAASUVORK5CYII=" />
                    </button>
                    <button onClick={() => handleDeleteContact(name)}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAR9JREFUSEvtlk0OAUEQhT9xAFdwADYu4OcCFiwJRyMsWbiAnwvYiL0rOIAwJS2ZYXqqOiPGYnpZXa9ev+o3PVWhoFUpiBcrcRXoA03wYu7ACdgAN02QhVhytkBHK+b2d0BPy7UQN5wSrVZ8XzDnLICFWJSKClndSPneU9Ca94T/DXEdmL4pktjExebR/sWjWMubxbHviuPtCrlTS27imv6GOH5yMVE7MtQh4FN64VVslrlUcEZ/VWwosRhPTCQGE7PISot9nTitoDWWaFCoYitJqfjDh2WrtQekNJd0yNqFXN9xYS+X5ffn60IuxT8hXkVD3sDK5MlbA8O0vawHZAQschKPgWUoseS33DBQCzzA1Q0QRx/OMmUGctrSCyN+ANSkiR9dx0jKAAAAAElFTkSuQmCC" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Card;
