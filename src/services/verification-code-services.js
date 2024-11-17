export const handleInput = (e, numPosition, setCode, setNumPosition, setValues, values) => {
    const containers = [...document.querySelectorAll('.number-container')]
    const inputValue = e.target.value
    if(inputValue && numPosition < 4) {
        containers[numPosition].innerText = e.target.innerText
        containers[numPosition].style.backgroundColor = "#E94057"
        containers[numPosition].style.borderColor = "#E94057"
        containers[numPosition].style.color = "#ffffff"
        const newValues = [...values]
        newValues[numPosition] = inputValue
        setValues(newValues)
        setNumPosition(numPosition + 1)
        setCode(prevItems => [...prevItems, inputValue])
    }
    e.target.value = ''
}

export const handleKeyDown = (e, numPosition, setCode, setNumPosition, setValues, values) => {
    const containers = [...document.querySelectorAll('.number-container')]
    if(e.key === 'Backspace' && numPosition > 0) {
        containers[numPosition - 1].innerText = "0"
        containers[numPosition - 1].style.backgroundColor = ""
        containers[numPosition - 1].style.borderColor = "#E94057"
        containers[numPosition - 1].style.color = "#E8E6EA"
        const newValues = [...values]
        newValues[numPosition - 1] = 0
        setValues(newValues)
        setNumPosition(numPosition - 1)
        setCode(prevItems =>  prevItems.filter((_, i) => i !== (numPosition - 1)))
    }
}

