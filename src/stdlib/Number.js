"use strict";

const EasyObjectValue = require('../values/EasyObjectValue');
const CompletionRecord = require('../CompletionRecord');


class NumberObject extends EasyObjectValue {
	*call(thiz, args, env, scope) {
		if ( thiz.specTypeName === "null" ) {
			return yield * args[0].toNumberValue();
		}
	}

	callPrototype(env) { return env.NumberPrototype; }

	static get MAX_VALUE$cew() { return Number.MAX_VALUE; }
	static get MIN_VALUE$cew() { return Number.MIN_VALUE; }
	static get POSITIVE_INFINITY$cew() { return Number.POSITIVE_INFINITY; }
	static get NEGATIVE_INFINITY$cew() { return Number.NEGATIVE_INFINITY; }

}

module.exports = NumberObject;
