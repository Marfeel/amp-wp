<?php
/**
 * Class AMP_Facebook_Embed_Handler
 *
 * @package AMP
 */

/**
 * Class AMP_Facebook_Embed_Handler
 */
class AMP_Facebook_Embed_Handler extends AMP_Base_Embed_Handler {
	const URL_PATTERN = '#https?://(www\.)?facebook\.com/.*#i';

	protected $DEFAULT_WIDTH = 600;
	protected $DEFAULT_HEIGHT = 400;

	/**
	 * Tag.
	 *
	 * @var string embed HTML blockquote tag to identify and replace with AMP version.
	 */
	protected $sanitize_tag = 'div';

	/**
	 * Tag.
	 *
	 * @var string AMP amp-facebook tag
	 */
	private $amp_tag = 'amp-facebook';

	public function register_embed() {
		wp_embed_register_handler( $this->amp_tag, self::URL_PATTERN, array( $this, 'oembed' ), -1 );
	}

	public function unregister_embed() {
		wp_embed_unregister_handler( $this->amp_tag, -1 );
	}

	public function oembed( $matches, $attr, $url, $rawattr ) {
		return $this->render( array( 'url' => $url ) );
	}

	public function render( $args ) {
		$args = wp_parse_args( $args, array(
			'url' => false,
		) );

		if ( empty( $args['url'] ) ) {
			return '';
		}

		$this->did_convert_elements = true;

		return AMP_HTML_Utils::build_tag(
			$this->amp_tag,
			array(
				'data-href' => $args['url'],
				'layout' => 'responsive',
				'width' => $this->args['width'],
				'height' => $this->args['height'],
			)
		);
	}

	/**
	 * Sanitized <div class="fb-video" data-href=> tags to <amp-facebook>
	 *
	 * @param DOMDocument $dom DOM.
	 */
	public function sanitize_raw_embeds( $dom ) {
		/**
		 * Node list.
		 *
		 * @var DOMNodeList $node
		 */
		$nodes     = $dom->getElementsByTagName( $this->sanitize_tag );
		$num_nodes = $nodes->length;

		if ( 0 === $num_nodes ) {
			return;
		}

		for ( $i = $num_nodes - 1; $i >= 0; $i-- ) {
			$node = $nodes->item( $i );
			if ( ! $node instanceof DOMElement ) {
				continue;
			}

			if ( $this->is_facebook_raw_embed( $node ) ) {
				$this->create_amp_facebook_and_replace_node( $dom, $node );
			}
		}
	}

	/**
	 * Make final modifications to DOMNode
	 *
	 * @param DOMNode $node The DOMNode to adjust and replace.
	 *
	 * @return boolean
	 */
	private function is_facebook_raw_embed( $node ) {
		$class_attr = $node->getAttribute( 'class' );

		return null !== $class_attr && $node->hasAttribute( 'data-href' )
			&& ( false !== strpos( $class_attr, 'fb-post' ) || false !== strpos( $class_attr, 'fb-video' ) );

	}

	/**
	 * Make final modifications to DOMNode
	 *
	 * @param DOMDocument $dom The HTML Document.
	 * @param DOMNode     $node The DOMNode to adjust and replace.
	 */
	private function create_amp_facebook_and_replace_node( $dom, $node ) {
		$embed_type = $this->get_embed_type( $node );

		$amp_facebook_node = AMP_DOM_Utils::create_node( $dom, $this->amp_tag, array(
			'data-href'     => $node->getAttribute( 'data-href' ),
			'data-embed-as' => $embed_type,
			'layout'        => 'responsive',
			'width'         => $this->DEFAULT_WIDTH,
			'height'        => $this->DEFAULT_HEIGHT,
		) );

		$node->parentNode->replaceChild( $amp_facebook_node, $node );

		$this->did_convert_elements = true;
	}

	/**
	 * Make final modifications to DOMNode
	 *
	 * @param DOMNode $node The DOMNode to adjust and replace.
	 *
	 * @return boolean
	 */
	private function get_embed_type( $node ) {
		$class_attr = $node->getAttribute( 'class' );

		return false !== strpos( $class_attr, 'fb-video' ) ? 'video' : 'post';
	}

}