<?php

if (isset($_GET['amount'])) {
    $name = $_GET['name'];
    $email = $_GET['email'];
    $amount = $_GET['amount'];
    $s_amount = $amount . "00";
    $return = "name=$name&email=$email&amount=$amount";
    require  "../vendor/autoload.php";

    $stripe_secret_key = "sk_test_51PIb2GRwDjvDpm0JgfapymbqnCdDR7E0yIiYifQGM7nX48ix8Wnu5jyFio2hymjZZPVuQFCJ2DSXHQAAK2Z2HcrU00EyNKMP4A";

    \Stripe\Stripe::setApiKey($stripe_secret_key);

    $checkout_session = \Stripe\Checkout\Session::create([
        "mode" => "payment",
        "success_url" => "http://localhost/hgl/php/fin_donate.php?$return",
        "cancel_url" => "http://localhost/hgl",
        "line_items" => [
            [
                "quantity" => 1,
                "price_data" => [
                    "currency" => "usd",
                    "unit_amount" => $s_amount,
                    "product_data" => [
                        "name" => "Donation",
                    ]
                ]
            ]
        ]
    ]);

    http_response_code(303);
    header("location: " . $checkout_session->url);
}
