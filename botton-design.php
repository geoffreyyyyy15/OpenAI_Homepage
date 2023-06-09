<?php
   
   $height = 23;

for ($margin = 0; $margin < 23; $margin++){

      echo ' <div class="bg-black" style="margin-top: {{ $margin }}px; height: {{ $height - $margin }}px">
       </div>';
}
?>