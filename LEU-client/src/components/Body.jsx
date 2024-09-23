import GameBoard from "./GameBoard";

const Body = () => {
    // FIXME: add Game Board and buttons to start/stop/reset instance
    return (
        <section className="
            h-[60%] 
            flex flex-col 
            place-items-center 
            bg-rich-black">
            <div className="text-center text-white">
                Body
            </div>
            <GameBoard />
        </section>
    )
}

export default Body;