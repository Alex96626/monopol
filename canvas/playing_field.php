<button class="roll" onclick="Roll()">Кубики</button>
<!--рисукм поля моноолии -->

    <!--top line-->
    <div class='top_line_wrapp'>
        <?php $key = 20;  for($i=0;$i<=9   ;$i++){ $key++;?>
            <div id ='number_block_<?php print $key?>' class='top_line_block block'>
                <!--создание красных блоков-->
                <?php if($i == 1 || $i == 3 || $i == 4){ ?>
                    <div class='red_sity_block'></div>
                    <!--создание желтых блоков-->
                <?php } if( $i == 6 || $i == 7 || $i == 9){?>
                    <div class="yellow_situ_block"></div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>

    <!--left line-->
    <div class='left_line_wrapp' >
        <?php $key =21; for($i=0;$i<=8;$i++){ $key-- ?>
            <div  id ='number_block_<?php print $key?>' class='left_line_block block'>
                <!--создние оранжевых блоков городов -->
                <?php if($i == 0 || $i == 1 || $i == 3){ ?>
                    <div class='orange_sity_block'></div>
                    <!--создание розовых блоков городов-->
                <?php } if($i ==5 || $i == 6 || $i == 8) { ?>
                    <div class='pink_situ_block'></div>
                <?php } ?>
            </div>
        <?php } ?>
    </div >





    <!--right line-->
    <div class='right_line_wrapp'>
        <?php  $key = 30; for($i=0;$i<=9;$i++){ $key++ ?>
            <div id ='number_block_<?php print $key?>' class='right_line_block block'>
                <!--создание зеленых блокок-городов-->
                <?php if ($i == 1 || $i == 2 || $i == 4 ) { ?>
                    <div class='green_sity_block'></div>
                    <!-- создание синих блоков-городов-->
                <?php }  if($i == 7 || $i == 9){ ?>
                    <div class='blue_sity_block'></div>
                <?php } ?>
            </div>
        <?php } ?>
    </div>

    <!--bottom line-->
    <div  class='bot_line_wrapp'>
        <?php
        $key =12;

        for($i=0;$i<=10;$i++){ $key-- ?>
            <div id ='number_block_<?php print $key?>' class='bot_line_block block'>

                <!-- создание  бирюзовых блоков городов-->
                <?php if($i == 1 || $i == 2 || $i == 4){?>
                    <div class='turquoise_sity_block'></div>
                    <!--                    создание  коричневых блоков городов-->
                <?php } if($i == 7 || $i == 9){?>
                    <div class='brown_sity_block'></div>
                <?php  } ?>
            </div>
        <?php } ?>
    </div>
    <div class="center_block_wrapp"><img src="">МОНОПОЛИЯ</div>
    <div id="player_1"></div>

