
    interface props {
        validConfirmed: any
        confirmedState:React.Dispatch<React.SetStateAction<boolean>>
    }

    const Confirmeds : React.FC  <props> =({validConfirmed, confirmedState}) => {


    return (
        <div className='container-confirmed'>
            <h2 className='title-confirmed'> are sure you want deleted all tasks ? </h2>
            <div className='cheking-confirmed'>
                <button className="btn-confirmed yes" onClick={(e) => {
                    validConfirmed()
                    confirmedState(false)
                }}>Yes</button>
                <button className="btn-confirmed no" onClick={(e) => {
                    confirmedState(false)
                }}>No</button>
            </div>
        </div>
    )
    }

    export default Confirmeds