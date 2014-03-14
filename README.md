# clis

sort safe base16 to/from base64 conversion with filename and url safe characters written in pure javascript 

## Install :hammer:

```sh
npm install clis -g
```

## Usage :bulb:

```sh
clis 'hello-world' --camelize    # helloWorld
clis 'hello-world' --cam         # helloWorld

clis 'hello-world' --capitalize  # Hello-world
clis 'hello-world' --cap         # Hello-world

clis 'hello   world' --collapseWhitespace  # Hello world
clis 'hello   world' --col                 # Hello world

clis 'dataRate' --dasherize  # data-rate
clis 'dataRate' --das        # data-rate

clis 'this is it' --count is # 2
clis 'this is it' --cou is   # 2
```

Other supported transformations:

- ```dec``` || ```decodeHTMLEntities```
- ```esc``` || ```escapeHTML```
- ```hum``` || ```humanize```
- ```slu``` || ```slugify```
- ```pun``` || ```stripPunctuation```
- ```tag``` || ```stripTags```
- ```tri``` || ```trim```
- ```und``` || ```underscore```
- ```une``` || ```unescapeHTML```
- ```tim``` || ```times```

See: [string.js](http://stringjs.com) for additional function details


## Contributions :muscle:

:smile: Feedback, problem reports, enhancement requests are welcome.

:up: Example code are better.

:cool: Pull requests are best.

## License

### MIT
