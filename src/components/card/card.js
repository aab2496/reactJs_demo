const Card = ({children}) => {
    return (
        <div className="block p-5 w-full">
            <div className="">
                <div className="border-solid border h-full p-5">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card