document.addEventListener('DOMContentLoaded', () => {
    const status = document.querySelector('.status')
    const reset = document.querySelector('.reset')

    const cells = document.querySelectorAll('.game-cell')


    let xIsNext = true

    const handleCellClick = (e) => {
        if (xIsNext) {
            e.target.classList.add('x')
            xIsNext = !xIsNext

        } else {
            e.target.classList.add('o')
            xIsNext = !xIsNext
        }
    }

    const handleReset = (e) => {
        xIsNext = true;
        status.innerHTML = `x is next`;
        cells.forEach((cell) => {
            cell.classList.remove('x')
            cell.classList.remove('o')
        })
      }



    cells.forEach( (cell) => {
        cell.addEventListener('click' , handleCellClick)
    } )

    reset.addEventListener('click', handleReset)





})






