from flask import Flask, request, jsonify
import joblib
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import SnowballStemmer
import nltk

nltk.download('punkt')

app = Flask(__name__)

# Load the trained model and CountVectorizer
model = joblib.load('MRSA_bnb.pkl')
cv = joblib.load('count_vectorizer.pkl')

def clean(text):
    cleaned = re.compile(r'<.*?>')
    return re.sub(cleaned, '', text)

def is_special(text):
    rem = ''
    for i in text:
        if i.isalnum():
            rem = rem + i
        else:
            rem = rem + ' '
    return rem

def to_lower(text):
    return text.lower()

def rem_stopwords(text):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(text)
    return [w for w in words if w not in stop_words]

def stem_txt(text):
    ss = SnowballStemmer('english')
    return " ".join([ss.stem(w) for w in text])

def preprocess_text(text):
    cleaned = clean(text)
    cleaned = is_special(cleaned)
    cleaned = to_lower(cleaned)
    cleaned = rem_stopwords(cleaned)
    cleaned = stem_txt(cleaned)
    return cleaned

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        text = data['text']
        preprocessed_text = preprocess_text(text)
        text_vector = cv.transform([preprocessed_text]).toarray()
        prediction = model.predict(text_vector)
        sentiment = 'Happy' if prediction[0] == 1 else 'Sad'
        return jsonify({'sentiment': sentiment})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=True)
