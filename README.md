# Weather Website

A simple weather application that displays current weather information for any city.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   - The `.env` file contains your weather API key
   - Make sure the API key in `.env` is valid for WeatherAPI.com
   - Never commit the `.env` file to version control

3. **Run the application:**
   ```bash
   npm start
   ```
   
   The server will start at `http://localhost:3000`

## Project Structure

- `index.html` - Main HTML file
- `style.css` - Styling
- `script.js` - Client-side JavaScript
- `server.js` - Express server for API handling
- `.env` - Environment variables (not tracked by git)
- `.gitignore` - Git ignore rules

## Security Notes

- The API key is now stored in the `.env` file and accessed server-side
- The client-side JavaScript makes requests to your own server, not directly to the weather API
- This prevents exposing your API key in the browser

## API

The application uses WeatherAPI.com for weather data. Make sure you have a valid API key in your `.env` file.
