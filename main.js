   window.onload= function () {
       var number_block_1 = document.getElementById('number_block_1');
       var number_block_2 = document.getElementById('number_block_2');
       var number_block_3 = document.getElementById('number_block_3');
       var number_block_4 = document.getElementById('number_block_4');
       var block_id = document.querySelectorAll('.block');

   };
    // function idOnload() {
    //     var number_block_1 = document.getElementById('number_block_1');
    //     var number_block_2 = document.getElementById('number_block_2');
    //     var number_block_3 = document.getElementById('number_block_3');
    //     var number_block_4 = document.getElementById('number_block_4');
    //     var number_block_5 = document.getElementById('number_block_5');
    //     var number_block_6 = document.getElementById('number_block_6');
    //     var number_block_7 = document.getElementById('number_block_7');
    //     var number_block_8 = document.getElementById('number_block_8');
    //     var number_block_9 = document.getElementById('number_block_9');
    // }


   // //координаты всех блоков
   //  block_id.__proto__ = Array.prototype;
   //  console.log( typeof block_id);
   //  console.log(block_id[3].getBoundingClientRect());
   //  for(var i = 0;i<=39;i++){
   //     console.log(block_id[i]);
   //      console.log(block_id[i].getBoundingClientRect()  );
   //  }
   //  console.log( block_id[3].getBoundingClientRect());
   //  console.log( block_id[3])



//КУБИКИ
function Roll() {
    var ferst_cub =Math.floor(Math.random()*6)+1;
    var second_cub =Math.floor(Math.random()*6)+1;
    console.log(ferst_cub + "_" +second_cub);
    var cubes_result = ferst_cub + second_cub;
   // alert( 'кубики результат ='+cubes_result);
    return cubes_result;
}

var ideshnik = 1;//номер id блока

//переход по полям
function Player(){
    // idOnload();
    var roll = Roll();
    ideshnik = roll + ideshnik;//на какой блок перейдет фигурка
    console.log(ideshnik);
    var player_1 = document.getElementById('player_1');
    //Roll();
    //console.log(player_1);
    //console.log(document.getElementById("number_block_" + ideshnik));
    if(ideshnik > 40){
        ideshnik = ideshnik - 40;
        console.log(ideshnik)
    }
    var blockID = document.getElementById("number_block_" + ideshnik);//динамический id блока
        console.log(blockID);

    blockID.appendChild(player_1);


}

function createBlock() {
    var firstBlock = document.getElementById('number_block_1');
    var player1 = document.createElement('div');
    player1.id = 'player_1';
    firstBlock.insertBefore(player1, null);
    var text_go = document.createTextNode('Вперед');
    firstBlock.appendChild(text_go);
}
