const Pagination = ({data,pageHandler}) => {
    let pageNUmbers= []

    for(let i = 1; i < Math.ceil(data.length/10)+1; i++){
        pageNUmbers.push(i)
    }

    

    return(
        <div className='row' >
            
                {
                    pageNUmbers.map((page) => <div className='pages' 
                onClick={() => pageHandler(page)}>{page}</div>)
                }

            
        </div>

    )

}

export default Pagination