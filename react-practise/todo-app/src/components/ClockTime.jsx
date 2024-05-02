function ClockTime(){

    let time = new Date() ;
    return(
        <div>
            <p>Date and time is {time.toLocaleDateString() } ,  {time.toLocaleTimeString()}</p>
        </div>
    )
}

export default ClockTime;