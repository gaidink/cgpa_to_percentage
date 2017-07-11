from flask import Flask, render_template

converter = Flask(__name__)


@converter.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    converter.run(debug=True)
