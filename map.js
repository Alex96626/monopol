

window.onload = function () {
    var number_block_1 = document.getElementById('number_block_1');
    var number_block_2 = document.getElementById('number_block_2');
    var number_block_3 = document.getElementById('number_block_3');
    var number_block_4 = document.getElementById('number_block_4');
    var player_1 = document.getElementById('player_1');

//переход по полям
//     var star_position = player_1.style.width;
    // console.log("st=" + star_position);
    // var position = star_position * 4;
    var box = number_block_1.getBoundingClientRect();
    console.log("Top:" + box.top + ", Left:" + box.left + ", Right:" + box.right + ", Bottom:" + box.bottom)
    var box = number_block_2.getBoundingClientRect();
    console.log("Top2:" + box.top + ", Left2:" + box.left + ", Right2:" + box.right + ", Bottom2:" + box.bottom)


//
//         coor = id_block.getBoundingClientRect();
//         console.log("Top:"+coor.top+", Left:"+coor.left+", Right:"+coor.right+", Bottom:"+coor.bottom);
//
//  }

    var block_id = document.querySelectorAll('.block');
      //  console.log(typeof block_id);//object
            for(key in block_id){
                console.log(block_id[key]);
            }
        for(var i = 0; i<block_id.length;i++){
            console.log( "block"+ i + " " +  block_id[key]);//object
            var coor = block_id[i].getBoundingClientRect();//получаею координаты блоков
            // console.log(block_id[i] +    "x"+coor.x + "y" + coor.y)
        }
        console.log(coor[1])
}

