
function video ({video, titulo}){
    return(
        <div>
            <video width={300} controls>
                <source src={video} type="video/mp4" />
            </video>
            <h1>{titulo}</h1>
        </div>

    )
}

export default video