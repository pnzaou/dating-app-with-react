export const addNumber = (numPosition,setCode, setNumPosition, e) => {
    const containers = [...document.querySelectorAll('.number-container')]

    if(numPosition < 3) {
        containers[numPosition].innerText = e.target.innerText
        containers[numPosition].style.backgroundColor = "#E94057"
        containers[numPosition].style.borderColor = "#E94057"
        containers[numPosition].style.color = "#ffffff"
        containers[numPosition + 1].style.borderColor = "#E94057"
        setCode(prevItems => [...prevItems, e.target.innerText])
        setNumPosition(numPosition + 1)
    } else {
        if(numPosition < 4) {
            containers[numPosition].innerText = e.target.innerText
            containers[numPosition].style.backgroundColor = "#E94057"
            containers[numPosition].style.borderColor = "#E94057"
            containers[numPosition].style.color = "#ffffff"
            setCode(prevItems =>  [...prevItems, e.target.innerText])
            setNumPosition(numPosition + 1)
        }
    }

}

export const removeNumber = (numPosition, setCode, setNumPosition) => {
    const containers = [...document.querySelectorAll('.number-container')]

    if(numPosition > 0) {
        containers[numPosition - 1].innerText = "0"
        containers[numPosition - 1].style.backgroundColor = ""
        containers[numPosition - 1].style.borderColor = "#E94057"
        containers[numPosition - 1].style.color = "#E8E6EA"
        if(numPosition < 4){
            containers[numPosition].style.borderColor = ""
        }
        setCode(prevItems =>  prevItems.filter((_, i) => i !== (numPosition - 1)))
        setNumPosition(numPosition - 1)
    }
}
