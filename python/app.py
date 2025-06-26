from flask import Flask, request, jsonify, render_template
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime

app = Flask(__name__)

# Connect to Google Sheets
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
client = gspread.authorize(creds)
sheet = client.open("Silas Cove Bookings").sheet1  # Your Google Sheet name

@app.route("/book", methods=["POST"])
def book_table():
    data = request.form

    # Extract form data
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    date = data.get("date")
    time = data.get("time")
    guests = data.get("guests")

    # Insert a new row into the sheet
    sheet.append_row([name, email, phone, date, time, guests, str(datetime.now())])

    return "Booking confirmed! Thank you."

if __name__ == "__main__":
    app.run(debug=True)