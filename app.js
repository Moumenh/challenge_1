document.addEventListener('DOMContentLoaded', () => {
    const status = document.querySelector('.status')
    const reset = document.querySelector('.reset')

    const cells = document.querySelectorAll('.game-cell')

    let xIsNext = true

    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkWin = (currentClass) => {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cells[index].classList.contains(currentClass)
            })
        })
    }



    const handleCellClick = (e) => {

        const classList = e.target.classList

        if (classList[1] === 'x' || classList[1] === 'o') {
            return
        }

        if (xIsNext) {
            e.target.classList.add('x')
            if(checkWin('x')){
                return alert('player x is won')
            }
            xIsNext = !xIsNext
            status.innerHTML = `o is next`

        } else {
            e.target.classList.add('o')
            if(checkWin('o')){
                alert('player o is won')
            }
            xIsNext = !xIsNext
            status.innerHTML = `x is next`
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



    cells.forEach((cell) => {
        cell.addEventListener('click', handleCellClick)
    })

    reset.addEventListener('click', handleReset)





})






