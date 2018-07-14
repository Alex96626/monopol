 window.onload = function () {
    var obj = (Object.entries(name_block.sity));
                    // заполнение полей монополии
            var blok_infoSity = document.createElement('div');
     blok_infoSity.id = 'text_price'
            //console.log(blokkk)
                document.getElementById('number_block_2').appendChild(blok_infoSity);
                  document.getElementById('text_price').appendChild(document.createTextNode(obj[0][1].first.name))
                  document.getElementById('text_price').appendChild(document.createTextNode(obj[0][1].first.price))
                 document.getElementById('number_block_4').appendChild(document.createTextNode(obj[0][1].second.name))
                 document.getElementById('number_block_4').appendChild(document.createTextNode(obj[0][1].second.price))

                 // document.getElementById('number_block_7').insertBefore(blokkk, null);
                 document.getElementById('number_block_7').appendChild(document.createTextNode(obj[1][1].first.name))
                 // document.getElementById('text_price').appendChild(document.createTextNode(obj[1][1].first.price))
                 document.getElementById('number_block_9').appendChild(document.createTextNode(obj[1][1].second.name))
                 document.getElementById('number_block_9').appendChild(document.createTextNode(obj[1][1].second.price))
                 document.getElementById('number_block_10').appendChild(document.createTextNode(obj[1][1].third.name))
                 document.getElementById('number_block_10').appendChild(document.createTextNode(obj[1][1].third.price))

                 document.getElementById('number_block_12').appendChild(document.createTextNode(obj[2][1].first.name))
                 document.getElementById('number_block_12').appendChild(document.createTextNode(obj[2][1].first.price))
                 document.getElementById('number_block_14').appendChild(document.createTextNode(obj[2][1].second.name))
                 document.getElementById('number_block_14').appendChild(document.createTextNode(obj[2][1].second.price))
                 document.getElementById('number_block_15').appendChild(document.createTextNode(obj[2][1].third.name))
                 document.getElementById('number_block_15').appendChild(document.createTextNode(obj[2][1].third.price))

                 document.getElementById('number_block_17').appendChild(document.createTextNode(obj[3][1].first.name))
                 document.getElementById('number_block_17').appendChild(document.createTextNode(obj[3][1].first.price))
                 document.getElementById('number_block_19').appendChild(document.createTextNode(obj[3][1].second.name))
                 document.getElementById('number_block_19').appendChild(document.createTextNode(obj[3][1].second.price))
                 document.getElementById('number_block_20').appendChild(document.createTextNode(obj[3][1].third.name))
                 document.getElementById('number_block_20').appendChild(document.createTextNode(obj[3][1].third.price))

                document.getElementById('number_block_22').appendChild(document.createTextNode(obj[4][1].first.name))
                document.getElementById('number_block_22').appendChild(document.createTextNode(obj[4][1].first.price))
                document.getElementById('number_block_24').appendChild(document.createTextNode(obj[4][1].second.name))
                document.getElementById('number_block_24').appendChild(document.createTextNode(obj[4][1].second.price))
                document.getElementById('number_block_25').appendChild(document.createTextNode(obj[4][1].third.name))
                document.getElementById('number_block_25').appendChild(document.createTextNode(obj[4][1].third.price))

                document.getElementById('number_block_27').appendChild(document.createTextNode(obj[5][1].first.name))
                document.getElementById('number_block_27').appendChild(document.createTextNode(obj[5][1].first.price))
                document.getElementById('number_block_28').appendChild(document.createTextNode(obj[5][1].second.name))
                document.getElementById('number_block_28').appendChild(document.createTextNode(obj[5][1].second.price))
                document.getElementById('number_block_30').appendChild(document.createTextNode(obj[5][1].third.name))
                document.getElementById('number_block_30').appendChild(document.createTextNode(obj[5][1].third.price))

                document.getElementById('number_block_32').appendChild(document.createTextNode(obj[6][1].first.name))
                document.getElementById('number_block_32').appendChild(document.createTextNode(obj[6][1].first.price))
                document.getElementById('number_block_33').appendChild(document.createTextNode(obj[6][1].second.name))
                document.getElementById('number_block_33').appendChild(document.createTextNode(obj[6][1].second.price))
                document.getElementById('number_block_35').appendChild(document.createTextNode(obj[6][1].third.name))
                document.getElementById('number_block_35').appendChild(document.createTextNode(obj[6][1].third.price))

                document.getElementById('number_block_38').appendChild(document.createTextNode(obj[7][1].first.name))
                document.getElementById('number_block_38').appendChild(document.createTextNode(obj[7][1].first.price))
                document.getElementById('number_block_40').appendChild(document.createTextNode(obj[7][1].second.name))
                document.getElementById('number_block_40').appendChild(document.createTextNode(obj[7][1].second.price))

    console.log(document.getElementById('text_price'));

};

var money = 15000000;//стартовое кол-во денег у игроков
// function BuySity() {
//      var per = document.getElementById('player_1').parentNode;
//      console.log(per)
// }
 function checkParent() {
     let parentCheck = document.getElementById('player_1').parentNode;
     console.log(document.getElementById('player_1'));
     console.log(parentCheck);
    let arrayBlocks// создать массим блоков
    console.log(typeof arrayBlocks)


 }

// создание фишки
    function createBlock() {
        var firstBlock = document.getElementById('number_block_1');
        var player1 = document.createElement('div');
        player1.id = 'player_1';
        firstBlock.insertBefore(player1, null);
        var text_go = document.createTextNode('Вперед');
        firstBlock.appendChild(text_go);

    }

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
        var first_cub =Math.floor(Math.random()*6)+1;
        var second_cub =Math.floor(Math.random()*6)+1;
        console.log(first_cub + "_" +second_cub);
        var cubes_result = first_cub + second_cub;
        return cubes_result;
    }

var ideshnik = 1;//номер id блока
//переход по полям
    function Player(){
        var roll = Roll();
        ideshnik = roll + ideshnik;//на какой блок перейдет фигурка
        console.log(ideshnik);
        var player_1 = document.getElementById('player_1');
        if(ideshnik > 40){
            ideshnik = ideshnik - 40;
            console.log(ideshnik)
        }
        var blockID = document.getElementById("number_block_" + ideshnik);//динамический id блока
            // console.log(blockID);
        blockID.appendChild(player_1);
        // BuySity();
        checkParent();
    }

    // function checParent(sqrs) {
    //
    //
    //     const blockParent =
    //         [
    //             [document.getElementById('number_block_1')], [document.getElementById('number_block_2')],
    //             [document.getElementById('number_block_3')], [document.getElementById('number_block_4')],
    //             [document.getElementById('number_block_5')], [document.getElementById('number_block_6')],
    //             [document.getElementById('number_block_7')], [document.getElementById('number_block_8')],
    //             [document.getElementById('number_block_9')], [document.getElementById('number_block_10')],
    //             [document.getElementById('number_block_11')], [document.getElementById('number_block_12')],
    //             [document.getElementById('number_block_13')], [document.getElementById('number_block_14')],
    //             [document.getElementById('number_block_15')], [document.getElementById('number_block_16')],
    //             [document.getElementById('number_block_17')], [document.getElementById('number_block_18')],
    //             [document.getElementById('number_block_19')], [document.getElementById('number_block_20')],
    //             [document.getElementById('number_block_21')], [document.getElementById('number_block_22')],
    //             [document.getElementById('number_block_23')], [document.getElementById('number_block_24')],
    //             [document.getElementById('number_block_25')], [document.getElementById('number_block_26')],
    //             [document.getElementById('number_block_27')], [document.getElementById('number_block_28')],
    //             [document.getElementById('number_block_29')], [document.getElementById('number_block_30')],
    //             [document.getElementById('number_block_31')], [document.getElementById('number_block_32')],
    //             [document.getElementById('number_block_33')], [document.getElementById('number_block_34')],
    //             [document.getElementById('number_block_35')], [document.getElementById('number_block_36')],
    //             [document.getElementById('number_block_37')], [document.getElementById('number_block_38')],
    //             [document.getElementById('number_block_39')], [document.getElementById('number_block_40')],
    //         ]
    //     // Object.defineProperties(blockParent, ,enumerable:true)
    //
    //     // console.log( blockParent)
    //
    //     for (let blockIndex in blockParent) {
    //          // console.log(blockIndex)
    //         let [a] =[blockParent[blockIndex]];
    //
    //               console.log([a])
    //
    //
    //     }
    // }

    // checParent();


 // checParent();


