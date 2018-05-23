<?php
/**
 * Class AMP_Embed_Sanitizer
 *
 * @package AMP
 */

/**
 * Class AMP_Embed_Sanitizer
 *
 * Calls embed hanlders sanitize_raw_embeds
 */
class AMP_Embed_Sanitizer extends AMP_Base_Sanitizer {

	/**
	 * Embed handlers.
	 *
	 * @var AMP_Base_Embed_Handler[] AMP_Base_Embed_Handler[]
	 */
	private $embed_handlers = array();

	/**
	 * AMP_Embed_Sanitizer constructor.
	 *
	 * @param DOMDocument $dom  DOM.
	 * @param array       $args Args.
	 */
	public function __construct( $dom, $args = array() ) {
		parent::__construct( $dom, $args );

		if ( ! empty( $this->args['embed_handlers'] ) ) {
			$this->embed_handlers = $this->args['embed_handlers'];
		}
	}

	/**
	 * Checks if each embed_handler has sanitize_raw_method and calls it.
	 */
	public function sanitize() {

		foreach ( $this->embed_handlers as $embed_handler ) {
			if ( method_exists( $embed_handler, 'sanitize_raw_embeds' ) ) {
				$embed_handler->sanitize_raw_embeds( $this->dom );
			}
		}
	}
}

