//слышал что так обращение к DOM происходит быстрее
let doc = document;
//создал массив для отрисовки клеток доски (матрица)
let chess = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
]
//отрисовал доску и раскрасил
function draw (){
    let out = '';
    let m = 0;
    for(let i = 0; i < chess.length; i++){
        let arr = chess[i];
        for(let k = 0; k < arr.length; k++){
            if(m % 2 == 0){
                out += `<div class="chess-block" data-x="${k}" data-y=${i}></div>`;
            }
            else{
                out += `<div class="chess-block bg-black" data-x="${k}" data-y=${i}></div>`;
            }
            m++;
        }
        m++;
    }
    //навесил клик на каждую клетку доски
    doc.querySelector('#field').innerHTML = out;
    doc.querySelectorAll('.chess-block').forEach(function(element){
        element.onclick = horse;
    });
}
draw();
//функция расчета возможных ходов коня
function horse(){

//каждый раз у всех клеток доски удаляю классы GREEN и ACTIVE
    doc.querySelectorAll('.chess-block').forEach(function(element){
        element.classList.remove('green');
        element.classList.remove('active');
    })
    //определяю текущее положение коня
    let x = this.dataset.x;
    let y = this.dataset.y;
    //расчет возможных ходов
    this.classList.add('green');
    if(+x+2 < 8 && +y+1 < 8){
        doc.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y+1}"]`).classList.add('active');
    }
    if(+x+2 < 8 && +y-1 >= 0){
        doc.querySelector(`.chess-block[data-x="${+x+2}"][data-y="${+y-1}"]`).classList.add('active');
    }
    if(+x-2 >= 0 && +y+1 < 8){
        doc.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y+1}"]`).classList.add('active');
    }
    if(+x-2 >= 0 && +y-1 >= 0){
        doc.querySelector(`.chess-block[data-x="${+x-2}"][data-y="${+y-1}"]`).classList.add('active');
    }
    if(+x+1 < 8 && +y-2 >= 0){
        doc.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y-2}"]`).classList.add('active');
    }
    if(+x-1 >= 0 && +y-2 >= 0){
        doc.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y-2}"]`).classList.add('active');
    }
    if(+x+1 < 8 && +y+2 < 8){
        doc.querySelector(`.chess-block[data-x="${+x+1}"][data-y="${+y+2}"]`).classList.add('active');
    }
    if(+x-1 >= 0 && +y+2 < 8){
        doc.querySelector(`.chess-block[data-x="${+x-1}"][data-y="${+y+2}"]`).classList.add('active');
    }
}