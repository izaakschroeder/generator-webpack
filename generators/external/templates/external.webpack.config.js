
export default {

	// Externals are for all the libraries you DON'T want webpack to have the
	// responsibility of loading. This can include many 3rd party libraries that
	// don't allow you to host your own copy of the code, such as Stripe.
	externals: {
		// The key is the name of the module that you would normally require()
		// and the value is the name of the global the script provides.
		'<%-module%>': '<%-global%>'
	},

	resolve: {
		// This is a complementary map to `externals`, specifying the URL that
		// the external can be found at. This is not part of webpack proper,
		// but is used to handle automatically putting in the correct `<script>`
		// tags for you.
		externals: {
			'<%-module%>': '<%-url%>'
		}
	}

};
