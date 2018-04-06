function Roll() {
    var ferst_cub =Math.floor(Math.random()*6)+1;
    var second_cub =Math.floor(Math.random()*6)+1;

    console.log(ferst_cub + " _" +second_cub)

    var cubes_result = ferst_cub + second_cub;
    alert( 'кубики результат ='+cubes_result)
}

