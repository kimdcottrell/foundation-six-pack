<?php require('inc/header.php') ?>
  <h1>Home 2</h1>
  <h3 class="subheader">Boom we did a thing!</h3>
  <p>Manifest loading properly</p>
  <?php
  echo '<pre>$manifest: '.print_r($manifest,true).'</pre>';
  ?>
  <p>TODO: why on earth is the manifest plugin loading a contact.css? Zzzz...</p>
<?php require('inc/footer.php') ?>
