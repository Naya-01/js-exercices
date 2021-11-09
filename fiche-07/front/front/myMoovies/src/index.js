// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom styles
import './stylesheets/main.css';
import Navbar from "./Components/Navbar/Navbar";
import {Router} from "./Components/Router/Router";
import MooviePage from "./Components/Pages/MooviePage";
"use strict";

/// Render the Navbar
Navbar();

// MooviePage();

// Call the router
Router();
