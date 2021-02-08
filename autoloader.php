<?php

require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

$includeDirs = [
    $_SERVER['DOCUMENT_ROOT'] . '/lib'
];

foreach ($includeDirs as $includeDir) {
    $directories = glob($folder . '/*', GLOB_ONLYDIR);
    foreach ($directories as $dir) {
        foreach (glob("{$dir}/*.php") as $filename) {
            include $filename;
        }
    }
}