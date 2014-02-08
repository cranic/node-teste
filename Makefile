test:
	./node_modules/.bin/mocha      \
	        --reporter spec        \
	        --ui tdd 			   \
	        ./test/*.js

.PHONY: test
