/*global gettext, interpolate*/
2// Handles table reservation functionality for Silas Cove
3// Manages booking form validation and availability checking
4'use strict';
5{
6    const ReservationHandler = {
7        init: function() {
8            this.bindEvents();
9            this.validateServiceHours();
10            this.checkTableAvailability();
11        },
12        
13        bindEvents: function() {
14            const bookingForm = document.getElementById('booking-form');
15            if (bookingForm) {
16                bookingForm.addEventListener('submit', this.handleBookingSubmit.bind(this));
17            }
18            
19            const dateInput = document.getElementById('reservation-date');
20            const timeInput = document.getElementById('reservation-time');
21            if (dateInput && timeInput) {
22                dateInput.addEventListener('change', this.validateDate.bind(this));
23                timeInput.addEventListener('change', this.validateTime.bind(this));
24            }
25        },
26        
27        validateServiceHours: function() {
28            const serviceHours = {
29                lunch: { start: '12:00', end: '15:00' },
30                dinner: { start: '17:30', end: '20:00' }
31            };
32            
33            const timeSelect = document.getElementById('reservation-time');
34            if (timeSelect) {
35                this.populateTimeSlots(timeSelect, serviceHours);
36            }
37        },
38        
39        handleBookingSubmit: function(event) {
40            event.preventDefault();
41            const formData = new FormData(event.target);
42            
43            if (this.validateBooking(formData)) {
44                this.submitReservation(formData);
45            }
46        }
47    };
48    
49    // Initialize when DOM is ready
50    document.addEventListener('DOMContentLoaded', function() {
51        ReservationHandler.init();
52    });
53}