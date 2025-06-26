from flask import Flask, request
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime

app = Flask(__name__)

# Setup Google Sheets credentials
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name("credentials.json", scope)
client = gspread.authorize(creds)
sheet = client.open("Silas Cove Bookings").sheet1  # Your Google Sheet name

@app.route("/book", methods=["POST"])
def book_table():
    data = request.form

    # Extract form values
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    date = data.get("date")
    time = data.get("time")
    guests = int(data.get("guests"))

    # Check number of guests
    if guests > 10:
        return "Sorry, maximum number of guests is 10."

    # 🕛 Check time is between 12:00 and 20:00
    booking_time = datetime.strptime(time, "%H:%M").time()
    if not (datetime.strptime("12:00", "%H:%M").time() <= booking_time <= datetime.strptime("20:00", "%H:%M").time()):
        return "Sorry, bookings must be between 12:00pm and 8:00pm."

    # If valid, save to Google Sheets
    sheet.append_row([name, email, phone, date, time, guests, str(datetime.now())])

    return "Booking confirmed! Thank you."

if __name__ == "__main__":
    app.run(debug=True)