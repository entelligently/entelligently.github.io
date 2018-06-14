# [entelligently.com](http://entelligently.com/)
Development for entelligently.com website

See live version at [entelligently.com](http://entelligently.com/)


## Dependencies / Libraries

* [normalize.css](https://necolas.github.io/normalize.css/) - for rendering all elements more consistently across browsers
* [Fingerprint2JS](http://scrollmagic.io/) - for ga tracking without cookies


## Development

To develop on entelligently.com:

Clone or fork this repo,
make sure you have ruby and jekyll installed on your machine, and run:

install dependencies:
` gem install -g `

and serve: 
```
$ bundle exec jekyll serve
# => A development server will run at http://localhost:4000/
# Auto-regeneration: enabled. Use `--no-watch` to disable.
```

## How do I deploy?

To deploy, just commit and push your changes to github pages (~~gh-pages~~ master branch of this repo).
