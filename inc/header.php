<?php $manifest = json_decode(file_get_contents('assets/manifest.json')); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Boom we did a thing</title>
  <link rel="stylesheet" href="assets/<?php echo $manifest->{'app.css'} ?>">
</head>
<body>
