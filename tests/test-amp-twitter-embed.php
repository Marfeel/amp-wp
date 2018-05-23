<?php

class AMP_Twitter_Embed_Test extends WP_UnitTestCase {
	public function get_conversion_data() {
		return array(
			'no_embed' => array(
				'<p>Hello world.</p>',
				'<p>Hello world.</p>' . PHP_EOL,
			),
			'url_simple' => array(
				'https://twitter.com/wordpress/status/118252236836061184' . PHP_EOL,
				'<p><amp-twitter data-tweetid="118252236836061184" layout="responsive" width="600" height="480"></amp-twitter></p>' . PHP_EOL,
			),
			'url_with_big_tweet_id' => array(
				'https://twitter.com/wordpress/status/705219971425574912' . PHP_EOL,
				'<p><amp-twitter data-tweetid="705219971425574912" layout="responsive" width="600" height="480"></amp-twitter></p>' . PHP_EOL,
			),

			'shortcode_without_id' => array(
				'[tweet]' . PHP_EOL,
				'' . PHP_EOL,
			),
			'shortcode_simple' => array(
				'[tweet 118252236836061184]' . PHP_EOL,
				'<amp-twitter data-tweetid="118252236836061184" layout="responsive" width="600" height="480"></amp-twitter>' . PHP_EOL,
			),
			'shortcode_with_tweet_attribute' => array(
				'[tweet tweet=118252236836061184]' . PHP_EOL,
				'<amp-twitter data-tweetid="118252236836061184" layout="responsive" width="600" height="480"></amp-twitter>' . PHP_EOL,
			),
			'shortcode_with_big_tweet_id' => array(
				'[tweet 705219971425574912]' . PHP_EOL,
				'<amp-twitter data-tweetid="705219971425574912" layout="responsive" width="600" height="480"></amp-twitter>' . PHP_EOL,
			),
			'shortcode_with_url' => array(
				'[tweet https://twitter.com/wordpress/status/118252236836061184]' . PHP_EOL,
				'<amp-twitter data-tweetid="118252236836061184" layout="responsive" width="600" height="480"></amp-twitter>' . PHP_EOL,
			),
			'shortcode_with_url_with_big_tweet_id' => array(
				'[tweet https://twitter.com/wordpress/status/705219971425574912]' . PHP_EOL,
				'<amp-twitter data-tweetid="705219971425574912" layout="responsive" width="600" height="480"></amp-twitter>' . PHP_EOL,
			),
			'shortcode_with_non_numeric_tweet_id' => array(
				'[tweet abcd]' . PHP_EOL,
				'' . PHP_EOL,
			),
		);
	}

	/**
	 * @dataProvider get_conversion_data
	 */
	public function test__conversion( $source, $expected ) {
		$embed = new AMP_Twitter_Embed_Handler();
		$embed->register_embed();
		$filtered_content = apply_filters( 'the_content', $source );

		$this->assertEquals( $expected, $filtered_content );
	}

	public function get_scripts_data() {
		return array(
			'not_converted' => array(
				'<p>Hello World.</p>',
				array(),
			),
			'converted' => array(
				'https://twitter.com/altjoen/status/118252236836061184' . PHP_EOL,
				array( 'amp-twitter' => true ),
			),
		);
	}

	/**
	 * @dataProvider get_scripts_data
	 */
	public function test__get_scripts( $source, $expected ) {
		$embed = new AMP_Twitter_Embed_Handler();
		$embed->register_embed();
		$source = apply_filters( 'the_content', $source );

		$whitelist_sanitizer = new AMP_Tag_And_Attribute_Sanitizer( AMP_DOM_Utils::get_dom_from_content( $source ) );
		$whitelist_sanitizer->sanitize();

		$scripts = array_merge(
			$embed->get_scripts(),
			$whitelist_sanitizer->get_scripts()
		);

		$this->assertEquals( $expected, $scripts );
	}

		/**
	 * Data for test__raw_embed_sanitizer.
	 *
	 * @return array
	 */
	public function get_raw_embed_dataset() {
		return array(
			'no_embed'                           => array(
				'<p>Hello world.</p>',
				'<p>Hello world.</p>',
			),
			'embed_blockquote_without_twitter' => array(
				'<blockquote>lorem ipsum</blockquote>',
				'<blockquote>lorem ipsum</blockquote>',
			),
			'blockquote_embed'                   => array(
				'<blockquote class="twitter-tweet"><p><a href="">Lorem</a><a href="https://twitter.com/RalfLittle/status/924636074231717888?ref_src=twsrc%5Etfw"> Ipsum</a></p></blockquote>',
				'<amp-twitter data-tweetid="924636074231717888" layout="responsive" width="600" height="600"></amp-twitter>',
			),
		);
	}
	/**
	 * Test raw_embed_sanitizer.
	 *
	 * @param string $source  Content.
	 * @param string $expected Expected content.
	 * @dataProvider get_raw_embed_dataset
	 * @covers AMP_Twitter_Embed_Handler::sanitize_raw_embeds()
	 */
	public function test__raw_embed_sanitizer( $source, $expected ) {
		$dom   = AMP_DOM_Utils::get_dom_from_content( $source );
		$embed = new AMP_Twitter_Embed_Handler();
		$embed->sanitize_raw_embeds( $dom );
		$content = AMP_DOM_Utils::get_content_from_dom( $dom );
		$this->assertEquals( $expected, $content );
	}
}
