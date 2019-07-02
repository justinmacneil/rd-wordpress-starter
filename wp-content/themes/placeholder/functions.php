<?php
/**
 * Placeholder theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage placeholder
 * @since 1.0.0
 */

function rd_wp_starter_js() {
    wp_enqueue_script( 'placeholder-theme-main', get_stylesheet_directory_uri() . '/assets/js/dist/main.min.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'rd_wp_starter_js' );

