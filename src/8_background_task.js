export function BackgroundChange(){

    return(
        <>
                <center><h1>Background Color Changer</h1>
                <input type="color" id="change" onChange={(e)=>{
                    document.body.style.backgroundColor = e.target.value
                }}/>
                </center>
        </>
    )
  
}