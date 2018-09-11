<?php
/**
 * Ruisugi functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Ruisugi
 */




if ( ! function_exists( 'ruisugi_setup' ) ) :

function ruisugi_setup() {
	add_theme_support( 'post-thumbnails' );
}

endif;
add_action( 'after_setup_theme', 'ruisugi_setup' );



function ruisugi_scripts() {
	wp_enqueue_style( 'ruisugi-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'ruisugi_scripts' );



//remover "acerca de" de la barra de administracion
function barra_de_admin() {
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu('wp-logo');
	$wp_admin_bar->remove_menu('about');
	$wp_admin_bar->remove_menu('wporg');
	$wp_admin_bar->remove_menu('documentation');
	$wp_admin_bar->remove_menu('support-forums');
	$wp_admin_bar->remove_menu('feedback');
	$wp_admin_bar->remove_menu('view-site');
}
add_action( 'wp_before_admin_bar_render', 'barra_de_admin' );

// remover footer de la administracion
add_filter( 'admin_footer_text', '__return_empty_string', 11 );
add_filter( 'update_footer',     '__return_empty_string', 11 );

