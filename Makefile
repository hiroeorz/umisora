.PHONY: test

all: build check

build:
	npm run build

check:
	npm run lint
