.PHONY: test

all: build check

build:
	npm run build

check:
	npm run lint

watch:
	npm run watch

clean:
	rm -f dist/bundle.js
	rm -f dist/bundle.js.map
