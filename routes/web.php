<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

Route::get('/questions', function () {

    $file = file_get_contents('./../storage/questions.json');
    $jsonData = json_decode($file, true);

    $questions = [];
    $count = ["Film & TV" => [], "Geografi" => [], "Historia" => [], "Musik" => [], "Övrigt" => [], "Vetenskap" => [], "Sport" => []];

    while (count($questions) < 35) {
        $randomNumber = rand(0, (count($jsonData) - 1));

        if (in_array($jsonData[$randomNumber], $questions)) {
            continue;
        }

        $category = $jsonData[$randomNumber]["category"];

        if (count($count[$category]) === 5) {
            continue;
        }
        array_push($count[$category], 1);

        array_push($questions, $jsonData[$randomNumber]);
    }
    return response()->json($questions);
});
