*global fetch*/
2// Handles real-time table availability checking for Silas Cove
3// Manages terrace, window, and indoor seating preferences
4'use strict';
5{
6    const TableAvailability = {
7        cache: {},
8        
9        init: function() {
10            this.bindEvents();
11            this.setupLocationPreferences();
12            this.initializeAvailabilityChecker();
13        },
14        
15        bindEvents: function() {
16            const dateInput = document.getElementById('reservation-date');
17            const timeInput = document.getElementById('reservation-time');
18            const partySizeInput = document.getElementById('party-size');
19            
20            if (dateInput && timeInput && partySizeInput) {
21                [dateInput, timeInput, partySizeInput].forEach(input => {
22                    input.addEventListener('change', this.checkAvailability.bind(this));
23                });
24            }
25        },
26        
27        setupLocationPreferences: function() {
28            const locationOptions = document.querySelectorAll('input[name="seating-preference"]');
29            locationOptions.forEach(option => {
30                option.addEventListener('change', this.updateSeatingView.bind(this));
31            });
32        },
33        
34        checkAvailability: function() {
35            const formData = this.getReservationData();
36            if (this.isValidReservationData(formData)) {
37                this.fetchAvailability(formData);
38            }
39        },
40        
41        getReservationData: function() {
42            return {
43                date: document.getElementById('reservation-date')?.value,
44                time: document.getElementById('reservation-time')?.value,
45                partySize: document.getElementById('party-size')?.value,
46                seatingPreference: document.querySelector('input[name="seating-preference"]:checked')?.value
47            };
48        },
49        
50        updateSeatingView: function(event) {
51            const preference = event.target.value;
52            const seatingMap = document.getElementById('seating-map');
53            
54            if (seatingMap) {
55                seatingMap.className = `seating-map ${preference}-view`;
56                this.highlightPreferredTables(preference);
57            }
58        },
59        
60        highlightPreferredTables: function(preference) {
61            const tables = document.querySelectorAll('.table-icon');
62            tables.forEach(table => {
63                const tableLocation = table.dataset.location;
64                table.classList.toggle('preferred', tableLocation === preference);
65            });
66        }
67    };
68    
69    // Initialize table availability system
70    document.addEventListener('DOMContentLoaded', function() {
71        TableAvailability.init();
72    });
73}