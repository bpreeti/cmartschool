jQuery(document).ready(function(){ 
					if ( typeof jQuery().superfish != "function" )
						return false;

					jQuery(".block-original-b8h590aa494506d6").find("ul.menu").superfish({
						delay: 200,
						animation: {opacity:"show"},
						speed: 'fast',
						onBeforeShow: function() {
							var parent = jQuery(this).parent();
							
							var subMenuParentLink = jQuery(this).siblings('a');
							var subMenuParents = jQuery(this).parents('.sub-menu');

							if ( subMenuParents.length > 0 || jQuery(this).parents('.nav-vertical').length > 0 ) {
								jQuery(this).css('marginLeft',  parent.outerWidth());
								jQuery(this).css('marginTop',  -subMenuParentLink.outerHeight());
							}
						}
					});		
				});

jQuery(document).ready(function(){

					if ( typeof window.selectnav != "function" )
						return false;

					selectnav(jQuery(".block-original-b8h590aa494506d6").find("ul.menu")[0], {
						label: "-- Navigation --",
						nested: true,
						indent: "-",
						activeclass: "current-menu-item"
					});

					jQuery(".block-original-b8h590aa494506d6").find("ul.menu").addClass("selectnav-active");

				});



